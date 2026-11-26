import { useEffect, useRef } from "react";

const dados = [
  { rotulo: "Participante", valor: 120, cor: "#ff6a3d" },
  { rotulo: "Com kit", valor: 80, cor: "#8ea2ff" },
  { rotulo: "Visitante", valor: 45, cor: "#4fe0c1" },
];

const ALTURA_LINHA = 76;
const ALTURA = dados.length * ALTURA_LINHA;
const DURACAO = 1200;

function Grafico() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const maior = Math.max(...dados.map((d) => d.valor));
    const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let progresso = semMovimento ? 1 : 0;
    let quadro = 0;

    function desenhar() {
      const largura = canvas.clientWidth;
      const escala = window.devicePixelRatio || 1;

      // A resolução real acompanha a tela, para o texto não borrar
      canvas.width = largura * escala;
      canvas.height = ALTURA * escala;
      ctx.setTransform(escala, 0, 0, escala, 0, 0);

      dados.forEach((item, i) => {
        const y = i * ALTURA_LINHA;
        const barra = (item.valor / maior) * largura * progresso;

        ctx.font = "600 15px Manrope, sans-serif";
        ctx.fillStyle = "#adadbd";
        ctx.textAlign = "left";
        ctx.fillText(item.rotulo, 0, y + 22);

        ctx.font = "700 22px Unbounded, sans-serif";
        ctx.fillStyle = "#f4f3ef";
        ctx.textAlign = "right";
        ctx.fillText(Math.round(item.valor * progresso), largura, y + 24);

        ctx.fillStyle = "#1c1c27";
        ctx.beginPath();
        ctx.roundRect(0, y + 38, largura, 18, 9);
        ctx.fill();

        ctx.fillStyle = item.cor;
        ctx.beginPath();
        ctx.roundRect(0, y + 38, barra, 18, 9);
        ctx.fill();
      });
    }

    // As barras crescem quando o gráfico aparece na tela
    const vista = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        vista.disconnect();
        if (semMovimento) return;

        const comeco = performance.now();
        function animar(agora) {
          const t = Math.min(Math.max((agora - comeco) / DURACAO, 0), 1);
          progresso = 1 - (1 - t) ** 3;
          desenhar();
          if (t < 1) quadro = requestAnimationFrame(animar);
        }
        quadro = requestAnimationFrame(animar);
      },
      { threshold: 0.5 },
    );
    vista.observe(canvas);

    const tamanho = new ResizeObserver(desenhar);
    tamanho.observe(canvas);
    document.fonts.ready.then(desenhar);

    return () => {
      cancelAnimationFrame(quadro);
      vista.disconnect();
      tamanho.disconnect();
    };
  }, []);

  return (
    <section className="pb-24 sm:pb-32" aria-labelledby="titulo-grafico">
      <div className="container-pagina">
        <div className="grid gap-10 rounded-3xl border border-linha bg-carvao p-7 sm:p-12 lg:grid-cols-[2fr_3fr]">
          <div>
            <h2 id="titulo-grafico" className="font-display text-2xl font-bold sm:text-3xl">
              Inscritos por ingresso
            </h2>
            <p className="mt-4">Distribuição das inscrições entre as três modalidades.</p>
          </div>

          <canvas
            ref={canvasRef}
            role="img"
            aria-label="Gráfico de barras: Participante 120, Com kit 80, Visitante 45."
            className="block w-full min-w-0 self-center"
            style={{ height: ALTURA }}
          />
        </div>
      </div>
    </section>
  );
}

export default Grafico;
