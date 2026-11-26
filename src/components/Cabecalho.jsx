import { useState } from "react";
import { evento, links } from "../data/evento";

function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);
  const fecharMenu = () => setMenuAberto(false);

  return (
    <header className="fixed inset-x-0 top-3 z-40 px-3">
      <div className="mx-auto max-w-5xl rounded-[1.75rem] border border-white/15 bg-noite/80 backdrop-blur-xl">
        <div className="flex h-14 items-center justify-between gap-4 pr-2 pl-5">
          <a href="#inicio" className="font-display text-sm font-bold text-claro">
            {evento.nome}
          </a>

          <nav className="hidden md:block" aria-label="Navegação principal">
            <ul className="flex items-center gap-8 text-sm font-semibold">
              {links.map(({ href, rotulo }) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-claro">
                    {rotulo}
                  </a>
                </li>
              ))}
              <li>
                <a href="#inscricao" className="btn btn-brasa !min-h-10 !py-1.5">
                  Inscrever-se
                </a>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            aria-expanded={menuAberto}
            aria-controls="menu-mobile"
            onClick={() => setMenuAberto(!menuAberto)}
            className="btn btn-vidro !min-h-11 !px-4 text-sm md:!hidden"
          >
            {menuAberto ? "Fechar" : "Menu"}
          </button>
        </div>

        {menuAberto && (
          <nav id="menu-mobile" className="px-5 pb-4 md:hidden" aria-label="Menu mobile">
            <ul className="flex flex-col font-semibold">
              {links.map(({ href, rotulo }) => (
                <li key={href} className="border-t border-linha">
                  <a href={href} onClick={fecharMenu} className="block py-3 text-claro">
                    {rotulo}
                  </a>
                </li>
              ))}
              <li className="border-t border-linha pt-4">
                <a href="#inscricao" onClick={fecharMenu} className="btn btn-brasa w-full">
                  Inscrever-se
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Cabecalho;
