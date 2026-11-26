import { useState } from "react";

function BotaoLembrete() {
  const [mensagem, setMensagem] = useState("");

  async function ativarLembrete() {
    if (!("Notification" in window)) {
      setMensagem("Este navegador não aceita notificações.");
      return;
    }
    const permissao = await Notification.requestPermission();
    if (permissao !== "granted") {
      setMensagem("Você não permitiu as notificações.");
      return;
    }
    const registro = await navigator.serviceWorker.ready;
    registro.showNotification("GameJam OC - ViniDEV", {
      body: "Não se esqueça do evento! Participe e divirta-se!",
      icon: "/icone-192.png",
    });
    setMensagem("Lembrete ativado!");
  }

  return (
    <div className="flex w-full flex-col gap-2 sm:w-auto">
      <button type="button" onClick={ativarLembrete} className="btn btn-vidro">
        Me lembre do evento
      </button>
      <p role="status" className="text-center text-sm text-claro">
        {mensagem}
      </p>
    </div>
  );
}

export default BotaoLembrete;
