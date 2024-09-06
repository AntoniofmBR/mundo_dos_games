let dados = [
  {
    name: "The Legend of Zelda: Breath of the Wild",
    description: "Um jogo de mundo aberto aclamado pela crítica que oferece aos jogadores a liberdade de explorar o vasto reino de Hyrule como quiserem. Com uma variedade de biomas, quebra-cabeças desafiadores, inimigos formidáveis e mecânicas inovadoras, os jogadores podem abordar cada situação de maneiras criativas, seja escalando montanhas, resolvendo templos ou derrotando chefes épicos. A física realista e a narrativa sutil tornam este um marco nos jogos de aventura.",
    link: "https://pt.wikipedia.org/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild",
    tags: 'nintendo switch aventura mundo aberto',
  },
  {
    name: "Red Dead Redemption 2",
    description: "Desenvolvido pela Rockstar Games, este épico de mundo aberto ambientado no Velho Oeste oferece uma narrativa profundamente emocional e envolvente. Os jogadores assumem o papel de Arthur Morgan, um fora da lei em fuga, enquanto ele lida com dilemas morais, lealdades e sobrevivência em um mundo em mudança. Com paisagens deslumbrantes, missões dinâmicas, caça, pesca e interações detalhadas com NPCs, é considerado um dos jogos mais imersivos já criados.",
    link: "https://pt.wikipedia.org/wiki/Red_Dead_Redemption_2",
    tags: 'rockstar games western mundo aberto',
  },
  {
    name: "The Witcher 3: Wild Hunt",
    description: "Este RPG premiado coloca os jogadores no papel de Geralt de Rívia, um caçador de monstros em busca de sua filha adotiva enquanto navega por intrigas políticas e enfrenta criaturas perigosas. Com um mundo vasto e aberto, missões ricas em história, escolhas morais que afetam o curso do jogo e um sistema de combate envolvente, 'The Witcher 3' define novos padrões para jogos de RPG de fantasia.",
    link: "https://pt.wikipedia.org/wiki/The_Witcher_3:_Wild_Hunt",
    tags: 'rpg fantasia mundo aberto',
  },
  {
    name: "God of War 4",
    description: "Em 'God of War', Kratos, o Deus da Guerra, embarca em uma jornada emocional com seu filho Atreus pelos reinos da mitologia nórdica. O jogo apresenta uma narrativa profunda sobre paternidade, redenção e sacrifício, além de combates brutais e um sistema de evolução de personagem bem elaborado. Com cenários majestosos e uma história que combina ação e momentos emocionantes, é um marco na franquia.",
    link: "https://pt.wikipedia.org/wiki/God_of_War",
    tags: 'ps4 ação aventura mitologia',
  },
  {
    name: "Minecraft",
    description: "Minecraft é um jogo de construção em mundo aberto onde os jogadores podem explorar e modificar um ambiente gerado proceduralmente feito de blocos. Com modos de sobrevivência e criação, é possível construir estruturas, criar ferramentas, enfrentar inimigos ou simplesmente explorar o vasto mundo. Sua simplicidade visual é compensada pela liberdade criativa quase infinita, fazendo dele um dos jogos mais populares e influentes da história.",
    link: "https://pt.wikipedia.org/wiki/Minecraft",
    tags: 'sandbox construção sobrevivência multiplayer',
  },
  {
    name: "Grand Theft Auto V",
    description: "GTA V é um jogo de ação e aventura em mundo aberto onde os jogadores podem alternar entre três personagens principais, cada um com sua própria história e habilidades, enquanto cometem crimes, realizam assaltos e exploram a cidade fictícia de Los Santos. O jogo oferece uma variedade de atividades paralelas, como esportes, corridas e exploração submarina, além de seu multiplayer online que se tornou um sucesso massivo por si só.",
    link: "https://pt.wikipedia.org/wiki/Grand_Theft_Auto_V",
    tags: 'rockstar games ação mundo aberto',
  },
  {
    name: "Cyberpunk 2077",
    description: "Ambientado na distópica Night City, 'Cyberpunk 2077' é um RPG de ação futurista com foco em personalização de personagens, narrativa e escolhas morais. Os jogadores podem explorar livremente a cidade, interagir com personagens complexos e seguir uma trama envolvendo corporações, hackers e o submundo do crime. Apesar de um lançamento conturbado, o jogo é notável por sua ambição e imersão no universo cyberpunk.",
    link: "https://pt.wikipedia.org/wiki/Cyberpunk_2077",
    tags: 'rpg ação futurista mundo aberto',
  },
  {
    name: "Horizon Zero Dawn",
    description: "Neste jogo de ação e aventura, os jogadores controlam Aloy, uma caçadora que vive em um mundo pós-apocalíptico dominado por máquinas robóticas. A narrativa explora temas de identidade, tecnologia e civilização perdida, enquanto o combate exige estratégia ao enfrentar máquinas gigantescas com diferentes pontos fracos. O mundo vasto e a história envolvente fizeram de 'Horizon Zero Dawn' um sucesso aclamado.",
    link: "https://pt.wikipedia.org/wiki/Horizon_Zero_Dawn",
    tags: 'ação aventura mundo aberto pós-apocalíptico',
  },
  {
    name: "Elden Ring",
    description: "Desenvolvido pela FromSoftware, 'Elden Ring' é um RPG de ação em mundo aberto com mecânicas desafiadoras, característico dos jogos 'soulslike'. Criado em parceria com o autor George R. R. Martin, o jogo oferece um mundo vasto e intrincado, repleto de segredos, criaturas aterrorizantes e um sistema de combate focado em precisão e habilidade. A liberdade de exploração e personalização o destacam no gênero.",
    link: "https://pt.wikipedia.org/wiki/Elden_Ring",
    tags: 'rpg ação mundo aberto fantasia',
  },
  {
    name: "Assassin's Creed Valhalla",
    description: "Em 'Assassin's Creed Valhalla', os jogadores assumem o papel de Eivor, um guerreiro Viking que busca estabelecer um novo lar na Inglaterra medieval. O jogo oferece um mundo aberto vasto com batalhas épicas, pilhagens e intrigas políticas, além de elementos de construção de assentamentos e RPG. A combinação de história e mitologia nórdica com a tradicional jogabilidade de Assassin's Creed proporciona uma experiência envolvente.",
    link: "https://pt.wikipedia.org/wiki/Assassin%27s_Creed_Valhalla",
    tags: 'ação aventura histórico mundo aberto',
  },
  {
    name: "Ghost of Tsushima",
    description: "Ambientado no Japão feudal durante a invasão mongol, 'Ghost of Tsushima' segue a jornada de Jin Sakai, um samurai que deve adotar técnicas de combate furtivas para proteger sua terra. O jogo apresenta uma recriação bela e detalhada da ilha de Tsushima, com um sistema de combate que valoriza a precisão e o estilo, além de uma narrativa emocional sobre honra e sacrifício.",
    link: "https://pt.wikipedia.org/wiki/Ghost_of_Tsushima",
    tags: 'ação aventura histórico samurai',
  },
  {
    name: "Celeste",
    description: "Um jogo de plataforma 2D que acompanha a jornada de Madeline enquanto ela escala a misteriosa Montanha Celeste. 'Celeste' se destaca não só por sua jogabilidade desafiadora, mas também por sua narrativa tocante, abordando temas como ansiedade e superação pessoal. Os controles precisos e os desafios bem projetados tornam-no um dos melhores jogos de plataforma indie de todos os tempos.",
    link: "https://pt.wikipedia.org/wiki/Celeste_(jogo)",
    tags: 'plataforma indie desafio história',
  },
  {
    name: "Among Us",
    description: "Um jogo multiplayer de dedução social onde os jogadores trabalham juntos para completar tarefas em uma nave espacial enquanto tentam descobrir quais membros da equipe são impostores tentando sabotar tudo. A combinação de cooperação e traição, juntamente com partidas rápidas e imprevisíveis, fez de 'Among Us' um fenômeno viral, especialmente durante o período de distanciamento social.",
    link: "https://pt.wikipedia.org/wiki/Among_Us",
    tags: 'multiplayer social dedução',
  },
  {
    name: "Fortnite",
    description: "Fortnite é um dos jogos mais populares do gênero battle royale, onde 100 jogadores lutam até que apenas um sobreviva. Com uma mecânica única de construção em tempo real e eventos ao vivo dentro do jogo, Fortnite revolucionou o gênero, atraindo milhões de jogadores com sua jogabilidade acessível, estilo visual vibrante e constante fluxo de atualizações e novos conteúdos.",
    link: "https://pt.wikipedia.org/wiki/Fortnite",
    tags: 'battle royale multiplayer ação',
  },
  {
    name: "Valorant",
    description: "Desenvolvido pela Riot Games, 'Valorant' é um jogo de tiro tático em primeira pessoa que mistura mecânicas de jogos como CS:GO com habilidades de heróis em estilo 'Overwatch'. Cada agente possui habilidades únicas que influenciam o campo de batalha, e o trabalho em equipe é essencial para vencer as partidas. Com uma ênfase em estratégia e precisão, 'Valorant' rapidamente se tornou um dos jogos competitivos mais populares no cenário de esports.",
    link: "https://pt.wikipedia.org/wiki/Valorant",
    tags: 'fps tático multiplayer esports',
  }
];
