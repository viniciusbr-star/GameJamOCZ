import { useState } from "react";
import { ingressos } from "../data/evento";
import Cracha from "./Cracha";

function Inscricao() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [ingressoEscolhido, setIngressoEscolhido] = useState(ingressos[0]);
  const [enviado, setEnviado] = useState(false);

  function lidarComEnvio(e) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <section id="inscricao" className="border-t border-linha py-24 sm:py-32">
      <div className="container-pagina grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="titulo-secao">Entre no jogo</h2>
          <p className="mt-4 mb-10 max-w-md text-lg">
            Preencha a inscrição e veja seu crachá tomar forma. As vagas são limitadas.
          </p>
          <Cracha nome={nome} ingresso={ingressoEscolhido} confirmado={enviado} />
        </div>

        <div className="rounded-3xl border border-linha bg-carvao p-6 sm:p-10">
          {enviado ? (
            <div role="status" className="py-8">
              <h3 className="text-2xl font-bold">Inscrição confirmada!</h3>
              <p className="mt-5 text-lg">
                Prepare o seu computador, <strong className="text-claro">{nome}</strong>!
                Modalidade escolhida:{" "}
                <strong className="text-claro">{ingressoEscolhido}</strong>. E-mail de contato:{" "}
                <strong className="break-all text-claro">{email}</strong>.
              </p>
              <p className="mt-5 text-menta">Nos vemos em agosto de 2027.</p>
            </div>
          ) : (
            <form onSubmit={lidarComEnvio} className="space-y-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="input-nome" className="text-sm font-bold text-claro">
                  Nome completo
                </label>
                <input
                  id="input-nome"
                  type="text"
                  required
                  autoComplete="name"
                  maxLength={60}
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="campo"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="input-email" className="text-sm font-bold text-claro">
                  E-mail
                </label>
                <input
                  id="input-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seuemail@exemplo.com"
                  className="campo"
                />
              </div>

              <fieldset>
                <legend className="mb-2 text-sm font-bold text-claro">Tipo de ingresso</legend>
                <div className="space-y-2">
                  {ingressos.map((opcao) => (
                    <label
                      key={opcao}
                      className="flex cursor-pointer items-center gap-3 rounded-xl border border-linha bg-noite p-4 text-claro has-checked:border-brasa has-checked:bg-brasa/10"
                    >
                      <input
                        type="radio"
                        name="ingresso"
                        value={opcao}
                        checked={ingressoEscolhido === opcao}
                        onChange={(e) => setIngressoEscolhido(e.target.value)}
                        className="h-4 w-4 accent-brasa"
                      />
                      {opcao}
                    </label>
                  ))}
                </div>
              </fieldset>

              <button type="submit" className="btn btn-brasa w-full">
                Concluir inscrição
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Inscricao;
