import Atracoes from './components/Atracoes';
import Programacao from './components/Programacao';
import Sobre from './components/Sobre';
import Cabecalho from './components/Cabecalho';
import Hero from './components/Hero';
import Inscricao from './components/Inscricao';
import Rodape from './components/Rodape';

function App() {
  return (
    <>
      <main>
        <Cabecalho />
        <Hero />
        <Sobre />
        <Programacao />
        <Atracoes />
        <Inscricao />
        <Rodape />
      </main>
    </>
  );
}

export default App;