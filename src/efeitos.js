// Guarda a posição do ponteiro em variáveis CSS do próprio elemento
export function seguirPonteiro(evento) {
  const alvo = evento.currentTarget;
  const area = alvo.getBoundingClientRect();
  alvo.style.setProperty("--x", `${evento.clientX - area.left}px`);
  alvo.style.setProperty("--y", `${evento.clientY - area.top}px`);
}
