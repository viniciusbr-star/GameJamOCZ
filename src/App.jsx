import Atracoes from "./components/Atracoes";
import Cabecalho from "./components/Cabecalho";
import Grafico from "./components/Grafico";
import Hero from "./components/Hero";
import Inscricao from "./components/Inscricao";
import Programacao from "./components/Programacao";
import Rodape from "./components/Rodape";
import Sobre from "./components/Sobre";

function App() {
  return (
    <>
      {/* Skip link acessibilidade */}
      <a
        href="#conteudo-principal"
        className="btn btn-brasa sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50"
      >
        Pular para o conteúdo
      </a>

      <Cabecalho />
      <main id="conteudo-principal">
        <Hero />
        <Sobre />
        <Programacao />
        <Atracoes />
        <Grafico />
        <Inscricao />
      </main>

      <Rodape />
    </>
  );
}

export default App;
