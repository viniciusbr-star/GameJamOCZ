import { seguirPonteiro } from "../efeitos";

const CORES = {
  "Programação": "from-pulso to-[#3441c9]",
  "Arte 2D": "from-brasa to-[#b32a5c]",
  "Áudio": "from-menta to-[#167a86]",
  "Game design": "from-[#ffd166] to-[#c85a24]",
};

function CartaoAtracao({ nome, area, descricao }) {
  const iniciais = nome
    .split(" ")
    .map((parte) => parte[0])
    .join("");

  return (
    <article className="cartao surgir flex flex-col" onPointerMove={seguirPonteiro}>
      <div
        className={`m-3 flex aspect-[4/3] items-end rounded-2xl bg-gradient-to-br p-4 ${CORES[area]}`}
        aria-hidden="true"
      >
        <span className="font-display text-6xl font-extrabold tracking-tighter text-noite">
          {iniciais}
        </span>
      </div>
      <div className="p-5 pt-3">
        <p className="text-sm font-bold text-pulso">{area}</p>
        <h3 className="mt-1 text-lg font-bold">{nome}</h3>
        <p className="mt-3">{descricao}</p>
      </div>
    </article>
  );
}

export default CartaoAtracao;
