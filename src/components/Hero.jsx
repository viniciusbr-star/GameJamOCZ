import { evento } from "../data/evento";

function Hero() {
  return (
    <section
      id="inicio"
      className="bg-primaria text-white py-28 px-4 text-center border-b border-gray-800"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Nome do Evento */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
          {evento.nome}
        </h1>

        {/* Slogan Principal */}
        <p className="mt-6 text-lg md:text-xl text-terciaria font-medium max-w-xl">
          {evento.slogan}
        </p>

        {/* CORRIGIDO: Mantido text-gray-300 para contraste aprovado no Lighthouse */}
        <p className="mt-2 text-sm md:text-base text-gray-300 max-w-lg leading-relaxed">
          Prepare-se para superar desafios, conectar-se com desenvolvedores e
          construir o futuro em poucas horas de pura programação.
        </p>

        {/* Informações de Data e Local com contraste ajustado para leitura (text-gray-200) */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 text-sm font-semibold tracking-wide text-gray-200">
          <span className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-xl">
            <span aria-hidden="true">📅</span> {evento.data}
          </span>
          <span className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-xl">
            <span aria-hidden="true">📍</span> {evento.local}
          </span>
        </div>

        {/* Botão de Chamada para Ação Original e Acessível */}
        <div className="mt-12">
          <a
            href="#inscricao"
            /* CORRIGIDO: Alterado min-height-[44px] para min-h-[44px] (sintaxe válida do Tailwind) */
            className="inline-block bg-segundaria text-primaria font-black px-8 py-4 rounded-xl text-lg shadow-lg hover:scale-105 focus:scale-105 focus:outline focus:outline-3 focus:outline-offset-2 focus:outline-segundaria transition-all min-h-[44px]"
          >
            Garantir Minha Vaga
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
