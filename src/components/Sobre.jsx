import { destaques } from '../data/evento';

function Sobre() {
  return (
    <section id="sobre" className="bg-primaria text-white py-20 px-4 border-b border-gray-800">
      <div className="max-w-4xl mx-auto">
        
        {/* Bloco de Texto Explicativo */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Sobre a <span className="text-segundaria">GameJam OC</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Na GameJam OC, equipes de até quatro pessoas criam um jogo do zero em 48 horas, 
            a partir de um tema revelado na abertura. Não precisa saber programar: artistas, 
            músicos e roteiristas também fazem falta numa equipe. Mentores ficam disponíveis 
            o tempo todo, e os jogos terminados são publicados na página do evento.
          </p>
        </div>

        {/* Bloco dos Números de Destaque Corrigido */}
        <div className="grid gap-6 sm:grid-cols-3">
          {destaques.map((item) => (
            <div 
              key={item.valor} 
              className="bg-gray-900/50 border border-gray-800 p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:border-terciaria transition-all duration-300 group min-height-[180px]"
            >
              {/* Número Grande */}
              <span className="block text-3xl md:text-4xl font-extrabold text-segundaria group-hover:text-terciaria transition-colors mb-2">
                {item.valor}
              </span>
              {/* Texto Explicativo Centralizado */}
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider max-weight-[200px] block">
                {item.rotulo}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Sobre;
