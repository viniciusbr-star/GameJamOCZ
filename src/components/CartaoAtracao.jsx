function CartaoAtracao({ nome, area, descricao }) {
  return (
    <article className="bg-gray-900/60 border border-gray-800 p-6 rounded-2xl flex flex-col justify-between hover:border-terciaria transition-all duration-300 group shadow-lg min-height   -[250px]">
      <div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-segundaria transition-colors">
          {nome}
        </h3>

        <span className="inline-block bg-gray-800 text-segundaria font-semibold text-sm px-3 py-1 rounded-lg mb-4 tracking-wide">
          {area}
        </span>

        <p className="text-gray-400 text-sm leading-relaxed mt-2">
          {descricao}
        </p>
      </div>
    </article>
  );
}

export default CartaoAtracao;
