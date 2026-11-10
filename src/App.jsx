import Atracoes from "./components/Atracoes";
import Programacao from "./components/Programacao";
import Sobre from "./components/Sobre";
import Cabecalho from "./components/Cabecalho";
import Hero from "./components/Hero";
import Inscricao from "./components/Inscricao";
import Rodape from "./components/Rodape";

function App() {
  return (
    <>
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-white focus:text-black p-3 z-50 rounded shadow border border-gray-300"
      >
        Pular para o conteúdo
      </a>

      <Cabecalho />

      <main id="conteudo-principal">
        <Hero />
        <Sobre />
        <Programacao />
        <Atracoes />
        <Inscricao />
      </main>

      <Rodape />
    </>
  );
}

export default App;
