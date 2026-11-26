import { useEffect, useState } from "react";
import { evento } from "../data/evento";

const INICIO = new Date(evento.inicio).getTime();

function Contagem() {
  const [agora, setAgora] = useState(() => Date.now());

  useEffect(() => {
    const relogio = setInterval(() => setAgora(Date.now()), 1000);
    return () => clearInterval(relogio);
  }, []);

  const restante = Math.floor((INICIO - agora) / 1000);

  if (restante <= 0) {
    return <p className="font-display text-2xl text-claro">A maratona já começou.</p>;
  }

  const partes = [
    { rotulo: "dias", valor: Math.floor(restante / 86400) },
    { rotulo: "horas", valor: Math.floor(restante / 3600) % 24 },
    { rotulo: "min", valor: Math.floor(restante / 60) % 60 },
    { rotulo: "seg", valor: restante % 60 },
  ];

  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-claro">Faltam para a abertura</p>
      <div role="timer" className="grid max-w-xl grid-cols-4 gap-2 sm:gap-3">
        {partes.map(({ rotulo, valor }) => (
          <div
            key={rotulo}
            className="rounded-2xl border border-white/15 bg-noite/60 px-2 py-3 text-center backdrop-blur-md sm:py-4"
          >
            <span className="block font-display text-2xl font-bold tabular-nums text-claro sm:text-4xl">
              {String(valor).padStart(2, "0")}
            </span>
            <span className="text-xs sm:text-sm">{rotulo}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contagem;
