import { useState } from "react";
function BotaoLembrete() {
  const [mensagem, setMensagem] = useState("");
  async function ativarLembrete() {
    // 1. Se o navegador não tiver 'Notification' em window,
    // mostre a mensagem "Este navegador não aceita notificações." e pare (return)
    if (!("Notification" in window)) {
        setMensagem("Este navegador não aceita notificações.");
        return;
    }
    // 2. Peça a permissão e guarde a resposta numa constante
    // (lembre: requestPermission devolve uma Promise, use await)
    const permissao = await Notification.requestPermission();
    // 3. Se a resposta for diferente de 'granted',
    // mostre "Você não permitiu as notificações." e pare
    if (permissao !== "granted") {
        setMensagem("Você não permitiu as notificações.");
        return;
    }
    // 4. Espere o Service Worker ficar pronto e guarde em 'registro'
    const registro = await navigator.serviceWorker.ready;
    // 5. Mostre a notificação com registro.showNotification(...)
    // título: nome do seu evento
    // body: uma frase de lembrete
    // icon: '/icone-192.png'
    registro.showNotification("GameJam OC - ViniDEV", {
        body: "Não se esqueça do evento! Participe e divirta-se!",
        icon: "/icone-192.png",
    });
    // 6. Mostre na tela a mensagem "Lembrete ativado!"
    setMensagem("Lembrete ativado!");
  }
  
  return (
    <div className="bg-primaria py-8 px-4 flex flex-col items-center border-b border-gray-800">
      <button
        type="button"
        onClick={ativarLembrete}
        className="inline-flex items-center gap-2 border-2 border-segundaria text-segundaria font-bold px-6 py-3 rounded-xl min-height-[44px] hover:bg-segundaria hover:text-primaria focus:outline-2 focus:outline-offset-2 focus:outline-segundaria transition-colors"
      >
        <span aria-hidden="true">🔔</span> Me lembre do evento
      </button>
      {mensagem && (
        <p role="status" className="mt-3 text-sm text-gray-200">
          {mensagem}
        </p>
      )}
    </div>
  );
}
export default BotaoLembrete;
