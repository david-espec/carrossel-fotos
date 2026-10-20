# Carrossel de Fotos

Escolha fotos da galeria do celular, aperte **OK** e elas passam uma de cada
vez, da direita para a esquerda, em tela cheia: cada foto fica um tempo na tela
e troca direto para a próxima, sem animação (ou, se preferir, desliza rápido
como na galeria do celular). Depois da última, volta para a primeira.

- Toque na tela para **Pausar** ou **Sair**.
- Escolha a velocidade (quanto tempo cada foto fica na tela) e se a foto deve preencher a tela.
- **Baixar aplicativo** instala o Carrossel no celular. No Android abre o pedido de instalação; no iPhone mostra o passo a passo pelo Safari. Instalado, funciona até sem internet.
- As fotos não saem do celular: nada é enviado para servidor nenhum.
- Dá para instalar com "Adicionar à tela inicial".

É um único `index.html`, sem build. O Bootstrap e os ícones ficam em `vendor/`, dentro do próprio repositório. Cada push na `main`
publica no GitHub Pages (Settings → Pages → Source: GitHub Actions).
