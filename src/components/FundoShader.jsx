import { useEffect, useRef } from "react";

const VERTICE = `
attribute vec2 posicao;
void main() { gl_Position = vec4(posicao, 0.0, 1.0); }
`;

// Campo de energia: ruído distorcido com curvas de nível que reagem ao ponteiro
const FRAGMENTO = `
precision highp float;
uniform vec2 tela;
uniform vec2 ponteiro;
uniform float tempo;

float sorteio(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float ruido(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(sorteio(i), sorteio(i + vec2(1, 0)), f.x),
             mix(sorteio(i + vec2(0, 1)), sorteio(i + 1.0), f.x), f.y);
}
float camadas(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) { v += a * ruido(p); p = p * 2.0 + 7.3; a *= 0.5; }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / tela;
  vec2 p = (gl_FragCoord.xy - 0.5 * tela) / tela.y;
  vec2 m = (ponteiro * tela - 0.5 * tela) / tela.y;
  float perto = exp(-5.0 * dot(p - m, p - m));
  float t = tempo * 0.06;

  vec2 q = vec2(camadas(p * 1.6 + t), camadas(p * 1.6 - t + 4.0));
  float campo = camadas(p * 1.4 + 2.2 * q + perto * 0.6);

  float linhas = pow(1.0 - abs(sin(campo * 38.0 - tempo * 0.5)), 8.0);
  vec3 cor = mix(vec3(0.18, 0.25, 0.95), vec3(1.0, 0.38, 0.18), smoothstep(0.3, 0.75, q.x));

  vec3 saida = vec3(0.027, 0.027, 0.043);
  saida += cor * pow(campo, 2.5) * 0.9;
  saida += cor * linhas * (0.35 + perto);
  saida += vec3(0.5, 0.6, 1.0) * perto * 0.12;

  // Escurece o lado do texto e a base, para manter o contraste
  saida *= mix(0.28, 1.0, smoothstep(0.15, 0.85, uv.x));
  saida = mix(vec3(0.027, 0.027, 0.043), saida, smoothstep(0.0, 0.35, uv.y));
  gl_FragColor = vec4(saida, 1.0);
}
`;

function compilar(gl, tipo, fonte) {
  const shader = gl.createShader(tipo);
  gl.shaderSource(shader, fonte);
  gl.compileShader(shader);
  return shader;
}

function FundoShader({ pausado }) {
  const canvasRef = useRef(null);
  const tempoRef = useRef(8);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");
    // Sem WebGL, fica o gradiente em CSS
    if (!gl) return;

    const programa = gl.createProgram();
    gl.attachShader(programa, compilar(gl, gl.VERTEX_SHADER, VERTICE));
    gl.attachShader(programa, compilar(gl, gl.FRAGMENT_SHADER, FRAGMENTO));
    gl.linkProgram(programa);
    if (!gl.getProgramParameter(programa, gl.LINK_STATUS)) return;
    gl.useProgram(programa);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const posicao = gl.getAttribLocation(programa, "posicao");
    gl.enableVertexAttribArray(posicao);
    gl.vertexAttribPointer(posicao, 2, gl.FLOAT, false, 0, 0);

    const uTela = gl.getUniformLocation(programa, "tela");
    const uPonteiro = gl.getUniformLocation(programa, "ponteiro");
    const uTempo = gl.getUniformLocation(programa, "tempo");

    const alvo = { x: 0.75, y: 0.55 };
    const atual = { ...alvo };
    let quadro = 0;
    let visivel = true;
    let anterior = 0;
    let pronto = false;

    function desenhar() {
      gl.uniform2f(uTela, canvas.width, canvas.height);
      gl.uniform2f(uPonteiro, atual.x, atual.y);
      gl.uniform1f(uTempo, tempoRef.current);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }

    function animar(agora) {
      quadro = requestAnimationFrame(animar);
      // Limita a 30 quadros por segundo para aliviar o aparelho
      if (anterior && agora - anterior < 32) return;
      if (anterior) tempoRef.current += Math.min(agora - anterior, 100) / 1000;
      anterior = agora;
      atual.x += (alvo.x - atual.x) * 0.05;
      atual.y += (alvo.y - atual.y) * 0.05;
      desenhar();
    }

    function atualizarLaco() {
      cancelAnimationFrame(quadro);
      anterior = 0;
      if (pronto && visivel && !pausado) quadro = requestAnimationFrame(animar);
    }

    const tamanho = new ResizeObserver(() => {
      // Resolução reduzida poupa a placa de vídeo
      const escala = Math.min(window.devicePixelRatio || 1, 1.5) * 0.75;
      canvas.width = canvas.clientWidth * escala;
      canvas.height = canvas.clientHeight * escala;
      gl.viewport(0, 0, canvas.width, canvas.height);
      desenhar();
    });
    tamanho.observe(canvas);

    const vista = new IntersectionObserver(([entrada]) => {
      visivel = entrada.isIntersecting;
      atualizarLaco();
    });
    vista.observe(canvas);

    function mover(e) {
      const area = canvas.getBoundingClientRect();
      alvo.x = (e.clientX - area.left) / area.width;
      alvo.y = 1 - (e.clientY - area.top) / area.height;
    }
    window.addEventListener("pointermove", mover);

    const espera = setTimeout(() => {
      pronto = true;
      atualizarLaco();
    }, 1500);

    return () => {
      clearTimeout(espera);
      cancelAnimationFrame(quadro);
      tamanho.disconnect();
      vista.disconnect();
      window.removeEventListener("pointermove", mover);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(programa);
    };
  }, [pausado]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full bg-[radial-gradient(circle_at_80%_30%,#1d2470,#07070b_60%)]"
    />
  );
}

export default FundoShader;
