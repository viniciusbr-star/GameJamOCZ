import { evento } from "../data/evento";

function Hero() {
  return (
    <section
      id="inicio"
      className="bg-primaria text-white py-28 px-4 text-center border-b border-gray-800"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
          {evento.nome}
        </h1>

        <p className="mt-6 text-lg md:text-xl text-terciaria font-medium max-w-xl">
          {evento.slogan}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 text-sm font-semibold tracking-wide text-gray-400">
          <span className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-xl">
            📅 {evento.data}
          </span>
          <span className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-xl">
            📍 {evento.local}
          </span>
        </div>

        <div className="mt-12">
          <a
            href="#inscricao"
            className="inline-block bg-segundaria text-primaria font-black px-8 py-4 rounded-xl text-lg shadow-lg hover:scale-105 transition-transform min-height-[44px]"
          >
            Garantir Minha Vaga
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
