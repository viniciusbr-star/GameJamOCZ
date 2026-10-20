import { evento } from "../data/evento";

function Rodape() {
  return (
    <footer className="bg-gray-950 text-gray-500 py-8 px-4 text-center border-t border-gray-900 text-xs">
      <p className="font-semibold text-gray-400">
        © 2026 {evento.nome} — Osvaldo Cruz/SP.
      </p>
      <p className="mt-2 text-gray-600">
        Evento fictício criado para fins didáticos.
      </p>
    </footer>
  );
}

export default Rodape;
