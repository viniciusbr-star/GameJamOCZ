import { useState } from "react";
import { ingressos } from "../data/evento";

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
    <section
      id="inscricao"
      className="bg-primaria py-24 px-4 text-white border-b border-gray-800"
    >
      <div className="max-w-md mx-auto bg-gray-900/60 border border-gray-800 p-8 rounded-2xl shadow-2xl">
        {enviado ? (
          /* MENSAGEM DE CONFIRMAÇÃO (Exibida após o envio bem-sucedido) */
          <div role="status" className="text-center py-6">
            <span className="text-5xl block mb-4" aria-hidden="true">
              🚀
            </span>
            <h2 className="text-2xl font-bold text-segundaria mb-3">
              Inscrição Confirmada!
            </h2>
            <p className="text-gray-200 leading-relaxed">
              Prepare o seu computador,{" "}
              <span className="text-white font-bold underline">{nome}</span>! O
              passaporte para a modalidade{" "}
              <span className="text-terciaria font-bold">
                {ingressoEscolhido}
              </span>{" "}
              foi enviado para o seu e-mail.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-2 text-center">
              Faça sua Inscrição
            </h2>
            {/* Contraste corrigido de text-gray-400 para text-gray-300 */}
            <p className="text-sm text-gray-300 text-center mb-8">
              Vagas limitadas para criadores e entusiastas.
            </p>

            <form onSubmit={lidarComEnvio} className="space-y-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="input-nome"
                  className="text-sm font-semibold text-gray-200"
                >
                  Nome Completo
                </label>
                <input
                  id="input-nome"
                  type="text"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Digite seu nome"
                  /* Adicionado placeholder-gray-400 para contraste e melhorias de foco por teclado */
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-400  focus:outline-segundaria transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="input-email"
                  className="text-sm font-semibold text-gray-200"
                >
                  E-mail para contato
                </label>
                <input
                  id="input-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seuemail@exemplo.com"
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-400  focus:outline-segundaria transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="select-ingresso"
                  className="text-sm font-semibold text-gray-200"
                >
                  Tipo de Ingresso
                </label>
                <select
                  id="select-ingresso"
                  value={ingressoEscolhido}
                  /* CORRIGIDO: Espaço removido na chamada da função */
                  onChange={(e) => setIngressoEscolhido(e.target.value)}
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white  focus:outline-segundaria transition-all"
                >
                  {ingressos.map((opcao) => (
                    <option
                      key={opcao}
                      value={opcao}
                      className="bg-gray-950 text-white"
                    >
                      {opcao}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                /* CORRIGIDO: Modificado min-height-[44px] (sintaxe inválida) para min-h-[44px] e adicionado focus:scale-[1.01] */
                className="w-full bg-segundaria text-primaria font-black py-3 px-4 rounded-xl hover:opacity-90 focus:scale-[1.01] focus:outline-offset-2 focus:outline-segundaria transition-all min-height-[44px] cursor-pointer"
              >
                Concluir Inscrição
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}

export default Inscricao;
