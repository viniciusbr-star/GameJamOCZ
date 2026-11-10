import { evento } from "../data/evento";

function Rodape() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-8 px-4 text-center border-t border-gray-900 text-xs">
      {/* CORRIGIDO: text-gray-400 alterado para text-gray-200 para passar no contraste */}
      <p className="font-semibold text-gray-200">
        © 2026 {evento.nome} — Osvaldo Cruz/SP.
      </p>
      {/* CORRIGIDO: text-gray-600 alterado para text-gray-400 para passar no contraste */}
      <p className="mt-2 text-gray-400">
        Evento fictício criado para fins didáticos.
      </p>
    </footer>
  );
}

export default Rodape;
