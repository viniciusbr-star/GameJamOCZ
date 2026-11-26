import { useState } from "react";
import { evento } from "../data/evento";
import BotaoLembrete from "./BotaoLembrete";
import Contagem from "./Contagem";
import FundoShader from "./FundoShader";

function Hero() {
  const [pausado, setPausado] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  return (
    <section id="inicio" className="relative isolate flex min-h-svh items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <FundoShader pausado={pausado} />
      </div>

      <div className="container-pagina pt-28 pb-20">
        <p className="mb-4 font-semibold text-claro">
          {evento.data} · {evento.cidade}
        </p>

        <h1 className="text-[clamp(2.75rem,min(11vw,13svh),8.5rem)] font-extrabold tracking-tighter">
          <span className="block">GameJam</span>
          <span className="contorno-texto block">OC 48h</span>
        </h1>

        <p className="mt-6 max-w-xl text-xl text-claro sm:text-2xl">{evento.slogan}</p>

        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
          <a href="#inscricao" className="btn btn-brasa w-full sm:w-auto">
            Garantir minha vaga <span aria-hidden="true">→</span>
          </a>
          <BotaoLembrete />
        </div>

        <div className="mt-6">
          <Contagem />
        </div>
      </div>

      <button
        type="button"
        onClick={() => setPausado(!pausado)}
        className="btn btn-vidro absolute right-4 bottom-4 !min-h-11 !px-4 text-sm"
      >
        {pausado ? "Animar fundo" : "Pausar fundo"}
      </button>
    </section>
  );
}

export default Hero;
