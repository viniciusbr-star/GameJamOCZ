import { useState } from "react";
import { dias, programacao } from "../data/evento";

// Converte "Sáb 10h" em horas passadas desde a abertura (sexta, 19h)
const marcos = programacao.map((item) => ({
  ...item,
  hora: dias.findIndex((d) => d.chave === item.dia) * 24 + parseInt(item.horario, 10) - 19,
}));

function relogio(hora) {
  const total = 19 + hora;
  return { dia: dias[Math.floor(total / 24)].nome, horas: `${total % 24}h` };
}

function Programacao() {
  const [hora, setHora] = useState(0);
  const atual = marcos.findLast((m) => m.hora <= hora);
  const { dia, horas } = relogio(hora);

  return (
    <section id="programacao" className="border-y border-linha bg-carvao/50 py-24 sm:py-32">
      <div className="container-pagina">
        <h2 className="titulo-secao surgir">Viaje pelas 48 horas</h2>
        <p className="mt-4 text-lg">Arraste o controle ou escolha uma atividade.</p>

        <div className="surgir mt-12 rounded-3xl border border-linha bg-noite p-6 sm:p-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <p className="font-display text-6xl font-extrabold tracking-tighter text-claro tabular-nums sm:text-8xl">
              {horas}
            </p>
            <p className="sm:text-right">
              <span className="block font-display text-xl text-claro">{dia}</span>
              <span className="tabular-nums">hora {hora} de 48</span>
            </p>
          </div>

          <div className="mt-8 min-h-24 border-l-4 border-brasa pl-5" aria-live="polite">
            <p className="text-sm">
              Desde {relogio(atual.hora).dia.toLowerCase()}, {atual.horario}
            </p>
            <p className="font-display text-xl text-claro sm:text-3xl">{atual.atividade}</p>
          </div>

          <input
            type="range"
            min="0"
            max="48"
            value={hora}
            onChange={(e) => setHora(Number(e.target.value))}
            aria-label="Hora da maratona"
            aria-valuetext={`${dia}, ${horas}`}
            className="deslizante mt-6"
            style={{ "--progresso": `${(hora / 48) * 100}%` }}
          />
          <div className="flex justify-between text-sm" aria-hidden="true">
            <span>Sex 19h</span>
            <span>Sáb 19h</span>
            <span>Dom 19h</span>
          </div>
        </div>

        <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {marcos.map((marco) => {
            const ativo = marco === atual;
            return (
              <li key={marco.hora}>
                <button
                  type="button"
                  aria-pressed={ativo}
                  onClick={() => setHora(marco.hora)}
                  className={`h-full w-full cursor-pointer rounded-2xl border p-5 text-left transition-colors ${
                    ativo
                      ? "border-brasa bg-brasa/10"
                      : "border-linha bg-noite hover:border-campo"
                  }`}
                >
                  <span className="block font-display text-sm text-brasa">
                    {marco.dia} · {marco.horario}
                  </span>
                  <span className="mt-2 block font-semibold text-claro">{marco.atividade}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default Programacao;
