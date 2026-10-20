import { mentores } from "../data/evento";
import CartaoAtracao from "./CartaoAtracao";

function Atracoes() {
  return (
    <section
      id="atracoes"
      className="bg-primaria text-white py-20 px-4 border-b border-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Mentores <span className="text-segundaria">Confirmados</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            Especialistas do mercado estarão disponíveis durante as 48h para
            guiar sua equipe no desenvolvimento do jogo.
          </p>
        </div>

        {/* Grade de Cartões (Responsiva: 1 col no celular, 2 no tablet, 4 no computador) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mentores.map((mentor) => (
            <CartaoAtracao
              key={mentor.nome}
              nome={mentor.nome}
              area={mentor.area}
              descricao={mentor.descricao}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Atracoes;
