import { destaques, evento, requisitos } from "../data/evento";
import { seguirPonteiro } from "../efeitos";

const [maratona, equipes, mentoria] = destaques;

function Sobre() {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="container-pagina">
        <h2 className="titulo-secao surgir max-w-4xl">
          Do zero ao jogo publicado em um fim de semana.
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-6">
          <div className="cartao surgir p-7 sm:p-10 md:col-span-4" onPointerMove={seguirPonteiro}>
            <div className="space-y-4 text-lg sm:text-xl">
              <p className="text-claro">
                Na GameJam OC, equipes de até quatro pessoas criam um jogo do
                zero em 48 horas, a partir de um tema revelado na abertura.
              </p>
              <p>
                <strong className="text-menta">Não precisa saber programar:</strong>{" "}
                artistas, músicos e roteiristas também fazem falta numa equipe.
              </p>
              <p>
                Mentores ficam disponíveis o tempo todo, e os jogos terminados
                são publicados na página do evento.
              </p>
            </div>
          </div>

          <div className="surgir flex flex-col justify-between rounded-3xl bg-brasa p-7 text-noite md:col-span-2">
            <p className="font-display text-8xl font-extrabold tracking-tighter sm:text-9xl">
              48
            </p>
            <p className="text-lg font-bold">horas {maratona.rotulo}</p>
          </div>

          {[equipes, mentoria].map(({ valor, rotulo }) => (
            <div key={valor} className="cartao surgir p-7 md:col-span-3" onPointerMove={seguirPonteiro}>
              <p className="font-display text-4xl font-bold text-claro">{valor}</p>
              <p className="mt-2">{rotulo}</p>
            </div>
          ))}

          <div className="cartao surgir p-7 sm:p-10 md:col-span-4" onPointerMove={seguirPonteiro}>
            <h3 className="text-xl font-bold">Regras de participação</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {requisitos.map((item) => (
                <li key={item} className="rounded-xl border border-linha bg-noite/60 p-4 text-claro">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="surgir flex flex-col justify-end rounded-3xl bg-pulso p-7 text-noite md:col-span-2">
            <p className="text-sm font-bold">Onde acontece</p>
            <p className="mt-2 font-display text-2xl font-bold">{evento.local}</p>
            <p className="mt-1 font-semibold">{evento.cidade}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
