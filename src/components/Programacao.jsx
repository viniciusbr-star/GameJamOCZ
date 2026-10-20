import { programacao } from "../data/evento";

function Programacao() {
  return (
    <section
      id="programacao"
      className="bg-primaria text-white py-20 px-4 border-b border-gray-800"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
          <span className="text-segundaria">Cronograma</span> do Evento
        </h2>

        <div className="bg-gray-900/40 border border-gray-800 rounded-2xl overflow-hidden max-w-2xl mx-auto shadow-xl">
          {programacao.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-center p-6 border-b border-gray-800 last:border-b-0 hover:bg-gray-800/30 transition-colors gap-4 sm:gap-8 text-center sm:text-left"
            >
              <div className="flex items-center gap-3 shrink-0 justify-center">
                <span className="bg-gray-800 text-gray-400 text-xs font-semibold px-2.5 py-1 rounded tracking-wider uppercase">
                  {item.dia}
                </span>
                <span className="text-terciaria font-bold text-lg min-weight-[45px] text-center sm:text-left">
                  {item.horario}
                </span>
              </div>

              <p className="text-gray-200 text-base md:text-lg font-medium flex-1 text-center sm:text-left">
                {item.atividade}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programacao;
