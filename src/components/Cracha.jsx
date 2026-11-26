import { evento } from "../data/evento";
import { seguirPonteiro } from "../efeitos";

// Prévia do crachá, atualizada enquanto a pessoa preenche o formulário
function Cracha({ nome, ingresso, confirmado }) {
  return (
    <div className="cartao max-w-md" onPointerMove={seguirPonteiro} aria-hidden="true">
      <div className="h-3 bg-gradient-to-r from-brasa via-pulso to-menta" />
      <div className="p-7">
        <div className="flex items-center justify-between gap-4">
          <p className="font-display text-sm font-bold text-claro">{evento.nome}</p>
          <p
            className={`rounded-full px-3 py-1 text-xs font-bold ${
              confirmado ? "bg-menta text-noite" : "border border-campo text-claro"
            }`}
          >
            {confirmado ? "Confirmado" : "Prévia"}
          </p>
        </div>

        <p className="mt-12 min-h-20 font-display text-3xl font-bold break-words text-claro">
          {nome.trim() || "Seu nome aqui"}
        </p>
        <p className="font-semibold text-pulso">{ingresso}</p>

        <div className="mt-8 border-t border-dashed border-campo pt-5 text-sm">
          <p>{evento.data}</p>
          <p>
            {evento.local}, {evento.cidade}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cracha;
