## 1. Quais são as duas peças que transformam um site em PWA, e o que cada uma faz?

**R:** O **manifest** (`manifest.webmanifest`) e o **Service Worker** (`sw.js`).
- O **manifest** é um arquivo JSON que descreve o app para o navegador: nome, ícones (ex.: `icone-192.png`), cores, `start_url` e modo de exibição. É ele que permite "instalar" o site na tela inicial com cara de aplicativo. Está ligado no `index.html` via `<link rel="manifest">`.
- O **Service Worker** é um script que roda em segundo plano, separado da página, registrado em `main.jsx` com `navigator.serviceWorker.register("/sw.js")`. Ele intercepta requisições (cache/funcionamento offline) e permite recursos como notificações (`registro.showNotification`).

## 2. O que acontece no seu botão de lembrete se o usuário negar a permissão?

**R:** Em `BotaoLembrete.jsx`, `Notification.requestPermission()` devolve `"denied"` (ou `"default"` se ele fechar o pedido). Como o resultado é diferente de `"granted"`, o `if (permissao !== "granted")` é verdadeiro: a mensagem **"Você não permitiu as notificações."** aparece na tela (no `<p role="status">`) e a função faz `return`. Assim, o código nunca chega ao `showNotification`, nenhuma notificação é exibida e nada quebra.

## 3. Por que o desenho do canvas fica dentro de um useEffect ?

**R:** Porque o `<canvas>` só existe no DOM **depois** que o React renderiza o componente. Durante a renderização, `canvasRef.current` ainda é `null`, então chamar `getContext("2d")` ali daria erro. O `useEffect` roda **após** a renderização e a montagem no DOM, quando `canvasRef.current` já aponta para o elemento real e pode ser desenhado. Além disso, desenhar no canvas é um efeito colateral (mexe fora do JSX), e o `useEffect` é o lugar certo para isso, podendo redesenhar quando as dependências mudarem.
