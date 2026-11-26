import { mentores } from "../data/evento";
import CartaoAtracao from "./CartaoAtracao";

function Atracoes() {
  return (
    <section id="mentores" className="py-24 sm:py-32">
      <div className="container-pagina">
        <h2 className="titulo-secao surgir">Quem joga junto</h2>
        <p className="mt-4 max-w-xl text-lg">
          Mentores confirmados para acompanhar as equipes durante o desenvolvimento.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mentores.map((mentor) => (
            <CartaoAtracao key={mentor.nome} {...mentor} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Atracoes;
