# Projeto-3-Pixels-Art

1. Adicione à página o título "Paleta de Cores":
- O título deverá ficar dentro de uma tag h1 com o id denominado title.

2. Adicione à página uma paleta de quatro cores distintas:
- A paleta de cores deve ser um elemento com id denominado color-palette, ao passo que cada cor individual da paleta de cores deve possuir a classe color;
- A cor de fundo de cada elemento da paleta deverá ser a cor que o elemento representa. A única cor não permitida na paleta é a cor branca.;
- Cada elemento da paleta de cores deverá ter uma borda preta, sólida e com 1 pixel de largura;
- A paleta de cores deverá listar todas as cores disponíveis para utilização lado a lado, e deverá ser posicionada abaixo do título "Paleta de Cores";
- A paleta de cores não deve conter cores repetidas.

3. Adicione a cor preta como a primeira cor da paleta de cores:
- A primeira cor da paleta é preta
- As demais cores podem ser escolhidas livremente.

4. Adicione à página um quadro de pixels, com 25 pixels:
- O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento;
- O quadro de "pixels" deve possuir o id denominado pixel-board, ao passo que cada "pixel" individual dentro do quadro deve possuir a classe denominada pixel;
- A cor inicial dos "pixels" dentro do quadro, ao abrir a página, deve ser branca;
- O quadro de "pixels" deve aparecer abaixo da paleta de cores.

5. Pulei (era CSS da pagina).

6. Defina a cor preta como cor inicial:
- Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels:
    - O elemento da cor preta deve possuir, inicialmente, a classe selected;
    - Note que o elemento que deverá receber a classe selected deve ser um dos elementos que possuem a classe color, como especificado no requisito 2.

7. Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro:
- A classe selected deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada.
- Somente uma das cores da paleta deve ter a classe selected de cada vez;
- Note que os elementos que deverão receber a classe selected devem ser os mesmos elementos que possuem a classe color, como especificado no requisito 2.

8. Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada:
- Ao carregar a página deve ser possível pintar os pixels de preto.
- Após selecionar uma outra cor na paleta, é possível pintar os pixels com essa cor.
- Somente o pixel que foi clicado foi preenchido com a cor selecionada, sem influenciar na cor dos demais pixels.