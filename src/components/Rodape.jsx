import { evento, links } from "../data/evento";

function Rodape() {
  return (
    <footer className="overflow-hidden border-t border-linha pt-14">
      <div className="container-pagina">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div>
            <p className="font-bold text-claro">
              {evento.local}, {evento.cidade}
            </p>
            <p>{evento.data}</p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 font-semibold">
              {[...links, { href: "#inscricao", rotulo: "Inscrição" }].map(({ href, rotulo }) => (
                <li key={href}>
                  <a href={href} className="inline-block py-1 hover:text-claro">
                    {rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-10 border-t border-linha py-6 text-sm">
          © 2026 {evento.nome}. Evento fictício criado para fins didáticos.
        </p>
      </div>

      <p
        aria-hidden="true"
        className="contorno-texto before:content-['GameJam_OC'] translate-y-[0.2em] text-center font-display text-[13vw] leading-none font-extrabold tracking-tighter whitespace-nowrap opacity-20 select-none"
      />
    </footer>
  );
}

export default Rodape;
