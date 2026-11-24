import { useEffect, useRef } from "react";
const dados = [
  { rotulo: "Participante", valor: 120 },
  { rotulo: "Com kit", valor: 80 },
  { rotulo: "Visitante", valor: 45 },
];
function Grafico() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const maior = Math.max(...dados.map((d) => d.valor));
    ctx.font = "14px sans-serif";
    dados.forEach((item, i) => {
      const largura = (item.valor / maior) * 220; // a maior barra tem 220px
      const y = 20 + i * 50; // cada barra 50px abaixo da anterior
      ctx.fillStyle = "#22c55e";
      ctx.fillRect(110, y, largura, 30);
      ctx.fillStyle = "#fff";
      ctx.fillText(item.rotulo, 10, y + 20);
      ctx.fillText(item.valor, 110 + largura + 5, y + 20);
    });
  }, []);

  return (
    <section className="bg-primaria text-white px-4 py-16 border-b border-gray-800">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold">Inscritos por ingresso</h2>
        <canvas
          ref={canvasRef}
          width={380}
          height={170}
          role="img"
          aria-label="Gráfico de barras de inscritos por ingresso: Participante 120, Com kit 80, Visitante 45."
          className="mt-6 max-w-full"
        />
      </div>
    </section>
  );
}

export default Grafico;
