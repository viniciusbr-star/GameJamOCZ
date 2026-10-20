import { evento } from "../data/evento";

function Cabecalho() {
  return (
    <header className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-extrabold text-xl tracking-wider text-segundaria">
          {evento.nome}
        </span>

        <nav>
          <ul className="flex gap-6 text-sm font-medium text-gray-300">
            <li>
              <a
                href="#sobre"
                className="hover:text-terciaria transition-colors"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#programacao"
                className="hover:text-terciaria transition-colors"
              >
                Cronograma
              </a>
            </li>
            <li>
              <a
                href="#atracoes"
                className="hover:text-terciaria transition-colors"
              >
                Mentores
              </a>
            </li>
            <li>
              <a
                href="#inscricao"
                className="bg-segundaria text-primaria font-bold px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
              >
                Inscrição
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Cabecalho;
