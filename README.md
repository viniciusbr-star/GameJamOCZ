# GameJam OC 48h

Página de divulgação e inscrição de uma maratona de criação de jogos em Osvaldo Cruz/SP: 48 horas, um tema surpresa e o primeiro jogo publicado. O evento acontece de 6 a 8 de agosto de 2027, no Espaço Maker Municipal.

> Evento fictício, criado para fins didáticos. Projeto de **ViniDEV**.

**Acesse o site:** [lp_gamejam_vini.vercel.app](https://lp_gamejam_vini.vercel.app)

## Funcionalidades

- **Fundo animado em WebGL**, que reage ao ponteiro e pode ser pausado.
- **Contagem regressiva** até a abertura.
- **Linha do tempo interativa** das 48 horas, com controle deslizante.
- **Mentores** em cartões com efeito de luz que acompanha o cursor.
- **Gráfico de inscritos** desenhado em `<canvas>`.
- **Formulário de inscrição** com prévia do crachá em tempo real.
- **Lembrete por notificação** do navegador.
- **PWA**: pode ser instalado e, a partir da segunda visita com internet, guarda a página para abrir sem conexão.

O formulário é apenas uma demonstração: nenhum dado é enviado ou armazenado. Os números do gráfico são fixos no código.

## Tecnologias

- [React 19](https://react.dev)
- [Vite 8](https://vite.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- WebGL e Canvas 2D, sem bibliotecas extras
- Service Worker e Web App Manifest
- ESLint

## Como rodar

É preciso ter o [Node.js](https://nodejs.org) 20.19 ou mais recente (na linha 22, a partir da 22.13).

```bash
npm install
npm run dev
```

Depois, abra o endereço mostrado no terminal (em geral, `http://localhost:5173`).

| Comando           | O que faz                                     |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento          |
| `npm run build`   | Gera a versão de produção na pasta `dist`     |
| `npm run preview` | Serve a versão de produção (rode o build antes) |
| `npm run lint`    | Verifica o código com o ESLint                |

## Estrutura

```
├── public/
│   ├── manifest.webmanifest   # dados de instalação do PWA
│   ├── sw.js                  # service worker (rede primeiro, cache como reserva)
│   └── ícones, favicon e robots.txt
├── src/
│   ├── components/            # um componente por parte da página
│   ├── data/evento.js         # textos, programação, mentores e ingressos
│   ├── App.jsx                # ordem das seções
│   ├── efeitos.js             # luz que acompanha o ponteiro
│   ├── index.css              # cores, fontes e estilos compartilhados
│   └── main.jsx               # ponto de entrada e registro do service worker
└── index.html
```

Para mudar data, horários, mentores ou ingressos, comece por `src/data/evento.js`. Alguns textos ficam direto nos componentes (por exemplo, a data na mensagem de confirmação da inscrição), assim como os dados do gráfico, em `Grafico.jsx`.

## Observações

- As notificações só funcionam em `localhost` ou em um site com HTTPS, e dependem da permissão de quem acessa.
- Se o sistema estiver configurado para reduzir movimento, o fundo começa pausado e as animações são reduzidas. O botão **Animar fundo** liga o fundo.
- As fontes (Unbounded e Manrope) vêm do Google Fonts; sem internet e sem cache, o navegador usa fontes substitutas.

## Qualidade

Medição com o Lighthouse 13.6 em 26/11/2026, sobre o build de produção servido localmente:

| Categoria       | Celular | Computador |
| --------------- | :-----: | :--------: |
| Desempenho      | 82 a 85 |    100     |
| Acessibilidade  |   100   |    100     |
| Boas práticas   |   100   |    100     |
| SEO             |   100   |    100     |

No celular simulado, o que reduz o desempenho é o fundo animado em WebGL: em um teste com o WebGL desativado, a nota foi 98. As medições foram feitas com o Chrome em modo sem janela, e os valores podem variar conforme o aparelho.

O histórico de acessibilidade está em [ACESSIBILIDADE.md](ACESSIBILIDADE.md).
