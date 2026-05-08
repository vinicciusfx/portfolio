import type { ExperienceItem, FocusArea, Project, ProjectCategory, SocialLink } from "@/types/portfolio";

const buildGallery = (slug: string) =>
  Array.from({ length: 4 }, (_, index) => ({
    id: `${slug}-screenshot-${index + 1}`,
    label: `Screenshot ${index + 1}`,
  }));

export const profileLinks = {
  github: "https://github.com/VinicciusFX",
  linkedin: "https://www.linkedin.com/in/vinicciusfx/",
  instagram: "https://www.instagram.com/viniccius.mm/",
  youtube: "https://www.youtube.com/@vinicciusFX",
  x: "https://x.com/vinicciusFX",
  cv: "/pedro-vinicius-cv.pdf",
} as const;

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    platform: "LinkedIn",
    href: profileLinks.linkedin,
    icon: "linkedin",
  },
  {
    label: "Instagram",
    platform: "Instagram",
    href: profileLinks.instagram,
    icon: "instagram",
  },
  {
    label: "YouTube",
    platform: "YouTube",
    href: profileLinks.youtube,
    icon: "youtube",
  },
  {
    label: "X",
    platform: "X - Twitter",
    href: profileLinks.x,
    icon: "x",
  },
];

export const heroFocusAreas: FocusArea[] = [
  {
    title: "Gameplay Systems",
    description: "Mecânicas, interação, progressão, minigames e ferramentas de suporte ao design.",
  },
  {
    title: "LiveOps & Backend",
    description: "Remote Config, persistência, economia, eventos temporários e dados em produção.",
  },
  {
    title: "VFX & Shaders",
    description: "Shader Graph, HLSL, apresentação visual de gameplay e integração com UI e animação.",
  },
  {
    title: "Cloud & Analytics",
    description: "Firebase, telemetria, estabilidade, updates frequentes e operação de jogos em escala.",
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    role: "Programador de Jogos",
    company: "Conta Gota",
    period: "Jul 2023 - Jan 2026",
  },
  {
    role: "Programador de Jogos",
    company: "Mage Studio",
    period: "Jan 2022 - Jan 2026",
  },
  {
    role: "Programador de Jogos",
    company: "Sensorama Tecnologia Educacional",
    period: "Feb 2021 - Jul 2021",
  },
];

export const projectCategories: Array<{ value: ProjectCategory; label: ProjectCategory }> = [
  { value: "JOGOS PUBLICADOS", label: "JOGOS PUBLICADOS" },
  { value: "VFX", label: "VFX" },
  { value: "PROJETOS PESSOAIS", label: "PROJETOS PESSOAIS" },
];

export const projects: Project[] = [
  {
    slug: "gota-buddies-numbers",
    title: "Gota Buddies: Numbers",
    category: "JOGOS PUBLICADOS",
    shortDescription:
      "Jogo de brincadeira livre e criativa para introduzir crianças à matemática com motivação extrínseca e interação sistêmica.",
    description:
      "Gota Buddies: Numbers é um jogo de brincadeira livre e criativa, desenvolvido para explorar a motivação extrínseca das crianças e introduzi-las à matemática.",
    externalLink: {
      label: "Confira no YouTube",
      href: "https://www.youtube.com/watch?v=Df90YW3nDMM&t=6s",
      platform: "YouTube",
    },
    tools: ["Unity", "Firebase", "LiveOps", "UI", "VFX"],
    palette: ["#1f74ff", "#7bdcff"],
    cardImage: {
      src: "/projects/cards/gota-buddies-numbers.png",
      alt: "Arte do projeto Gota Buddies: Numbers",
    },
    media: [
      {
        id: "gota-buddies-numbers-house-and-shop",
        label: "Casa e loja",
        src: "/projects/gota-buddies-numbers/gallery/01-house-and-shop.webp",
        alt: "Cena da casa com itens interativos e elementos de loja em Gota Buddies: Numbers",
      },
      {
        id: "gota-buddies-numbers-math-minigame",
        label: "Minigame de matemática",
        src: "/projects/gota-buddies-numbers/gallery/02-math-minigame.webp",
        alt: "Minigame de matemática com operação 9 mais 2 em Gota Buddies: Numbers",
      },
      {
        id: "gota-buddies-numbers-bedroom-scene",
        label: "Quarto interativo",
        src: "/projects/gota-buddies-numbers/gallery/03-bedroom-scene.webp",
        alt: "Cena do quarto com personagem, pet e objetos interativos em Gota Buddies: Numbers",
      },
      {
        id: "gota-buddies-numbers-character-customization",
        label: "Customização de personagem",
        src: "/projects/gota-buddies-numbers/gallery/04-character-customization.webp",
        alt: "Tela de customização de personagem em Gota Buddies: Numbers",
      },
    ],
    features: [
      "Sistema modular de customização de personagem, escalável, com múltiplas categorias e persistência de estado.",
      "Implementação de loja in-game, com lógica de compra, inventário e desbloqueio de itens.",
      "Criação de sistema de interação de itens baseado em regras para cada interação e estados de objetos.",
      "Desenvolvimento de sistema de pets, com lógica de comportamento, estados e interação com os personagens no cenário.",
      "Construção de ambiente interativo baseado em componentes, com gerenciamento de eventos e estados globais.",
      "Desenvolvimento de sistema de eventos, com controle de ativação e adição de conteúdos temporários.",
      "Desenvolvimento de minigames únicos, com dificuldade progressiva baseada nos diferentes níveis da grade curricular de matemática, adicionando moedas ao jogador que podem ser gastas na loja.",
      "Implementação do Firebase Firestore como backend de dados, gerenciando a persistência dos dados dos jogadores, como moedas e itens comprados na loja.",
      "Implementação do Firebase Analytics para coleta de métricas de uso, retenção e comportamento dos jogadores.",
    ],
    responsibilities: [
      "Este é o maior projeto em que trabalhei, com alguns anos dedicados à programação do jogo, à criação de mecânicas autorais e à construção de sistemas centrais para a experiência.",
      "O sistema de interação, junto do sistema de customização, é a base mais robusta do jogo. Ele permite que todos os elementos do cenário interajam entre si: itens interagem com o player, com o cenário e entre si mesmos. O jogador pode arrastar itens pelo cenário, fixá-los em superfícies, fazer personagens segurarem um item em cada mão, dividir objetos em pedaços menores e manipular cada parte individualmente.",
      "Também atuei na construção da UI, animações de cenário e personagens, sons, backend com Firebase, Unity Remote Config, Analytics e efeitos visuais. O sistema de customização foi pensado para evolução contínua, com novas roupas e opções de cor sendo adicionadas com frequência e persistência completa das escolhas do jogador.",
    ],
  },
  {
    slug: "mitibiku",
    title: "Mitibiku",
    category: "JOGOS PUBLICADOS",
    shortDescription:
      "Plataforma 2D com física aplicada, desenho de linhas e progressão por mais de 90 níveis únicos.",
    description:
      "Mitibiku é um jogo de plataforma 2D com mecânicas baseadas em física. O jogador precisa juntar duas bolinhas, movimentando-as através do cenário desenhando linhas com física aplicada. São mais de 90 níveis únicos que vão sendo desbloqueados conforme o progresso do jogador.",
    externalLink: {
      label: "Confira no YouTube",
      href: "https://www.youtube.com/watch?v=k58pL1-Jy3o",
      platform: "YouTube",
    },
    tools: ["Unity", "Física 2D", "UI", "Shaders", "VFX"],
    palette: ["#7b4dff", "#ff8ab2"],
    cardImage: {
      src: "/projects/cards/mitibiku.png",
      alt: "Arte do projeto Mitibiku",
    },
    media: [
      {
        id: "mitibiku-dashed-path",
        label: "Trajetória guiada",
        src: "/projects/mitibiku/gallery/01-dashed-path.png",
        alt: "Fase de Mitibiku com linha pontilhada indicando a trajetória entre os personagens",
      },
      {
        id: "mitibiku-laser-obstacle",
        label: "Obstáculo de laser",
        src: "/projects/mitibiku/gallery/02-laser-obstacle.png",
        alt: "Fase de Mitibiku com obstáculo de laser atravessando o cenário",
      },
      {
        id: "mitibiku-portal-mechanic",
        label: "Mecânica de portal",
        src: "/projects/mitibiku/gallery/03-portal-mechanic.png",
        alt: "Fase de Mitibiku com mecânica de portal no cenário",
      },
      {
        id: "mitibiku-shuriken-obstacle",
        label: "Obstáculo de shuriken",
        src: "/projects/mitibiku/gallery/04-shuriken-obstacle.png",
        alt: "Fase de Mitibiku com obstáculos de shuriken no cenário",
      },
    ],
    features: [
      "Desenvolvimento de sistema de seleção de níveis, gerenciando mais de 90 níveis com persistência de progresso.",
      "Implementação de sistema de dicas dinâmicas, acionadas por contexto e estado do jogador. Ao errar 3 vezes, o botão das dicas é habilitado.",
      "Criação de lógica de física para a linha desenhada pelo jogador.",
      "Desenvolvimento de shader customizado para simular movimento das folhas no cenário.",
      "Aplicação de curva de dificuldade progressiva, garantindo balanceamento e evolução dos níveis.",
      "Implementação de um sistema de diálogos baseado em dados e em eventos de gameplay.",
    ],
    responsibilities: [
      "Além de programar as mecânicas do jogo, fui responsável pelos efeitos visuais presentes nas diferentes fases. Este projeto marcou meu primeiro contato prático com VFX aplicados a um jogo dentro da Unity.",
      "Também montei e programei toda a UI e criei, dentro do editor, uma ferramenta para auxiliar os game designers a escrever e organizar as linhas de diálogo do projeto.",
      "O sistema de diálogos foi usado tanto nas dicas de cada fase quanto na narrativa, que era disparada a cada 10 níveis para apresentar ao jogador a história por trás do jogo.",
    ],
  },
  {
    slug: "meu-joguinho",
    title: "Meu Joguinho",
    category: "JOGOS PUBLICADOS",
    shortDescription:
      "Jogo educativo com minigames, mundo interativo e progressão de dificuldade ligada à grade curricular de matemática.",
    description:
      "Meu Joguinho é um jogo educativo com a proposta de ensinar aos jogadores as primeiras noções de matemática através dos diversos minigames dentro de um mundo interativo.",
    externalLink: {
      label: "Confira no YouTube",
      href: "https://www.youtube.com/watch?v=dcUm3bholug",
      platform: "YouTube",
    },
    tools: ["Unity", "UI", "Minigames", "Gameplay", "Level Design"],
    palette: ["#ff9966", "#ffc95c"],
    cardImage: {
      src: "/projects/cards/meu-joguinho.png",
      alt: "Arte do projeto Meu Joguinho",
    },
    media: [
      {
        id: "meu-joguinho-big-and-small",
        label: "Big and Small",
        src: "/projects/meu-joguinho/gallery/01-big-and-small.png",
        alt: "Minigame espacial de comparação em Meu Joguinho",
      },
      {
        id: "meu-joguinho-classroom-scene",
        label: "Sala de aula",
        src: "/projects/meu-joguinho/gallery/02-classroom-scene.png",
        alt: "Cenário de sala de aula em Meu Joguinho",
      },
      {
        id: "meu-joguinho-sound-panel-stage",
        label: "Painel sonoro",
        src: "/projects/meu-joguinho/gallery/03-sound-panel-stage.png",
        alt: "Minigame de painel sonoro com palco temático em Meu Joguinho",
      },
      {
        id: "meu-joguinho-cafeteria-scene",
        label: "Cantina",
        src: "/projects/meu-joguinho/gallery/04-cafeteria-scene.png",
        alt: "Cenário de cantina com doces e bebidas em Meu Joguinho",
      },
    ],
    features: [
      "Desenvolvimento de um sistema de customização de personagens, com gerenciamento de sprites, estados visuais e persistência.",
      "Implementação de cenários interativos desacoplados, utilizando padrões de composição e eventos para facilitar manutenção e escalabilidade.",
      "Criação de um sistema de dificuldade parametrizável, permitindo controle fino da progressão e adaptação da experiência do jogador.",
      "Construção de um mini-mundo 2D interativo, com lógica de interação e controle de comportamento dos objetos.",
      "Desenvolvimento de 25 minigames, cada um com mecânicas únicas, com cenário dinâmico em função da dificuldade que progride de acordo com os diferentes níveis da grade curricular de matemática.",
      "Desenvolvimento de diálogos usados tanto nos tutoriais dos minigames quanto na apresentação inicial do jogo, com personalização de velocidade de escrita, tamanho de fonte e parâmetros relevantes do sistema.",
    ],
    responsibilities: [
      "Neste projeto eu programei 25 minigames únicos, cada um com mecânicas próprias e dificuldade progressiva. Cada minigame possuía um tutorial reproduzido no início e que podia ser repetido a qualquer momento pelo jogador.",
      "O mundo interativo foi construído para ser colorido e dinâmico, com carros passando pelas ruas, sistema de dia e noite com iluminação responsiva e trilhas distintas para cada estado.",
      "O sistema de dificuldade altera todos os minigames de forma global, ajustando a configuração atrelada a cada nível. Além da programação, também trabalhei na montagem dos cenários e da UI de todo o projeto.",
    ],
  },
  {
    slug: "sensorama-play",
    title: "Sensorama Play",
    category: "JOGOS PUBLICADOS",
    shortDescription: "Plataforma educacional multiplayer 3D desenvolvida para escolas.",
    description:
      "A Sensorama Play é uma plataforma educacional multiplayer desenvolvida para escolas. As crianças reforçam o conteúdo aprendido em sala em um universo 3D online com jogos interativos e desafios personalizados.",
    externalLink: {
      label: "Confira no YouTube",
      href: "https://www.youtube.com/watch?v=wbjcA3hX8-g",
      platform: "YouTube",
    },
    tools: ["Unity", "Física 3D"],
    palette: ["#66b14a", "#58a7d7"],
    cardImage: {
      src: "/projects/cards/sensorama-play.webp",
      alt: "Cena do projeto Sensorama Play",
    },
    media: [
      {
        id: "sensorama-play-castle-exploration",
        label: "Exploração do castelo",
        src: "/projects/sensorama-play/gallery/01-castle-exploration.webp",
        alt: "Cenário de exploração com castelo em Sensorama Play",
      },
      {
        id: "sensorama-play-island-exploration",
        label: "Exploração da ilha",
        src: "/projects/sensorama-play/gallery/02-island-exploration.webp",
        alt: "Cenário de exploração em ilha tropical em Sensorama Play",
      },
      {
        id: "sensorama-play-fishing-minigame",
        label: "Minigame de pesca",
        src: "/projects/sensorama-play/gallery/03-fishing-minigame.png",
        alt: "Minigame de pesca em Sensorama Play",
      },
    ],
    features: [
      "Mundo aberto interativo, com NPCs, diversas interações e cenários para exploração.",
      "Minigames educativos 3D.",
    ],
    responsibilities: [
      "Atuei nesse projeto como programador júnior, auxiliando na programação de minigames 3D, mecânicas de exploração dos cenários e mecânicas de interação.",
    ],
  },
  {
    slug: "cozmos",
    title: "Cozmos",
    category: "PROJETOS PESSOAIS",
    shortDescription:
      "Projeto sci-fi 3D com stealth, sobrevivência e IA de inimigos, apresentado na BGS 2018.",
    description:
      "Este foi o primeiro projeto em que trabalhei. Esse projeto foi apresentado na BGS de 2018, com 4 fases diferentes, uma para cada dia de exposição. Em cada fase os jogadores deveriam chegar até o final sem ser detectados pelos inimigos e sem esgotar seu suprimento limitado de oxigênio.",
    externalLink: {
      label: "Confira no YouTube",
      href: "https://www.youtube.com/watch?v=NfAUkH3jDGg",
      platform: "YouTube",
    },
    tools: ["Unity", "Stealth", "IA", "Survival", "3D"],
    palette: ["#1d314f", "#42c1d6"],
    cardImage: {
      src: "/projects/cards/cozmos.png",
      alt: "Arte do projeto Cozmos",
    },
    media: [
      {
        id: "cozmos-reactor-room",
        label: "Sala de reatores",
        src: "/projects/cozmos/gallery/01-reactor-room.png",
        alt: "Sala com reatores luminosos em Cozmos",
      },
      {
        id: "cozmos-maintenance-corner",
        label: "Canto de manutenção",
        src: "/projects/cozmos/gallery/02-maintenance-corner.png",
        alt: "Canto de manutenção com objeto interativo em Cozmos",
      },
      {
        id: "cozmos-service-bay",
        label: "Baia de serviço",
        src: "/projects/cozmos/gallery/03-service-bay.png",
        alt: "Baia interna com plataforma iluminada em Cozmos",
      },
      {
        id: "cozmos-rest-area",
        label: "Área de descanso",
        src: "/projects/cozmos/gallery/04-rest-area.png",
        alt: "Área de descanso da nave em Cozmos",
      },
    ],
    features: [
      "Sistema de inteligência artificial para inimigos, com detecção do jogador baseada em estados, proximidade e condições de ambiente.",
      "Quebra-cabeças utilizados para controlar o progresso nos cenários.",
      "Mecânica de sobrevivência para o personagem, baseada no consumo e regeneração de oxigênio, além de estados que afetam a mobilidade e a exposição à detecção de inimigos.",
    ],
    responsibilities: [
      "Esse foi meu primeiro trabalho como programador. Cozmos é um jogo 3D sci-fi baseado em mecânicas de stealth e sobrevivência.",
      "O personagem possui uma quantidade de oxigênio limitada. A velocidade de consumo é maior do que a velocidade de regeneração e, se o oxigênio acaba, o personagem não pode se mover antes de recuperar boa parte do recurso, ficando exposto nesse período.",
      "Os inimigos possuem uma IA de patrulha e perseguem o jogador quando ele entra no campo de visão. O projeto foi apresentado na BGS de 2018, com uma fase diferente para cada dia de exposição.",
    ],
  },
  {
    slug: "liveops-samples",
    title: "LiveOps Samples",
    category: "PROJETOS PESSOAIS",
    shortDescription:
      "Projeto pessoal para consolidar Unity Services, economia, Remote Config, loja online e eventos operados por backend.",
    description:
      "LiveOps Samples é um projeto pessoal feito com o objetivo de aplicar os recursos de Live Operations na prática dentro da Unity. Nele procurei aprender e aplicar todos os recursos disponíveis do Unity Services em um único projeto. É um projeto essencialmente técnico, focado na programação dos sistemas, porém fiz o máximo que pude para adicionar recursos visuais para facilitar a visualização das mecânicas.",
    externalLink: {
      label: "Confira no GitHub",
      href: "https://github.com/VinicciusFX/LiveOps-Samples",
      platform: "GitHub",
    },
    tools: ["Unity", "Unity Game Services", "Cloud Save", "Economy", "Remote Config"],
    palette: ["#1d4ed8", "#49d9bb"],
    cardImage: {
      src: "/projects/cards/liveops-samples.png",
      alt: "Arte do projeto LiveOps Samples",
    },
    media: [
      {
        id: "liveops-samples-daily-mission",
        label: "Daily Mission",
        src: "/projects/liveops-samples/gallery/01-daily-mission.png",
        alt: "Tela de missão diária do projeto LiveOps Samples",
      },
      {
        id: "liveops-samples-main-menu",
        label: "Menu principal",
        src: "/projects/liveops-samples/gallery/02-main-menu.png",
        alt: "Menu principal com atalhos das features de LiveOps Samples",
      },
      {
        id: "liveops-samples-store",
        label: "Store",
        src: "/projects/liveops-samples/gallery/03-store.png",
        alt: "Tela de loja com itens compráveis em LiveOps Samples",
      },
      {
        id: "liveops-samples-redeem-code",
        label: "Redeem Code",
        src: "/projects/liveops-samples/gallery/04-redeem-code.png",
        alt: "Tela de resgate de códigos promocionais em LiveOps Samples",
      },
    ],
    features: [
      "Persistência de dados do jogador via Cloud Save, garantindo armazenamento seguro, sincronização entre sessões e integridade do progresso.",
      "Sistema de recompensas diárias distribuídas em um ciclo de 7 dias, com definição remota de conteúdo via Remote Config, permitindo ajustes sem necessidade de atualização do aplicativo.",
      "Sistema de missões diárias, com progresso e distribuição de recompensas configuráveis via Remote Config.",
      "Implementação de loja online atualizável em tempo real, com assets inseridos remotamente via Addressables e Unity Cloud Content.",
      "Integração de sistema de economia ao Unity Economy, gerenciando as moedas de forma centralizada.",
    ],
    responsibilities: [
      "A ideia desse projeto nasceu de um atraso de semanas que minha inexperiência causou em um projeto anterior. Foi planejada uma loja com itens rotativos e atualização dinâmica sem necessidade de publicar uma nova versão do app, mas minha primeira tentativa falhou e o escopo precisou ser reduzido.",
      "A partir disso, me dediquei ao estudo do assunto e construí o LiveOps Samples como um laboratório para adicionar novas mecânicas, eventos e ajustes manipulados via backend.",
      "Utilizei os serviços do Unity Game Services para todas as mecânicas presentes no projeto, com foco em consolidar aprendizado técnico e transformar falhas de produção em um sistema replicável.",
    ],
  },
  {
    slug: "toon-shaders-bundle",
    title: "Toon Shaders Bundle",
    category: "VFX",
    shortDescription:
      "Pacote com mais de 30 shaders para Unity, focado em efeitos impactantes, personalização e apresentação comercial do bundle.",
    description:
      "O Toon Shaders Bundle é um pacote de shaders projetado para adicionar efeitos visuais impactantes e altamente personalizáveis a jogos criados na Unity. O pacote inclui uma ampla variedade de efeitos inspirados em fantasia, ficção científica, RPG e estilos de jogos arcade, permitindo transformar instantaneamente a aparência de personagens, inimigos ou NPCs.",
    externalLink: {
      label: "Confira no itch.io",
      href: "https://vinicciusfx.itch.io/",
      platform: "itch.io",
    },
    tools: ["Shader Graph", "HLSL", "Unity", "VFX", "WebGL"],
    palette: ["#ff7f50", "#9c5cff"],
    cardImage: {
      src: "/projects/cards/toon-shaders-bundle.png",
      alt: "Arte do projeto Toon Shaders Bundle",
    },
    media: [
      {
        id: "toon-shaders-bundle-stylized-ice",
        label: "Stylized Ice",
        src: "/projects/toon-shaders-bundle/gallery/01-stylized-ice.png",
        alt: "Preview do shader Stylized Ice no Toon Shaders Bundle",
      },
      {
        id: "toon-shaders-bundle-sand",
        label: "Sand",
        src: "/projects/toon-shaders-bundle/gallery/02-sand.png",
        alt: "Preview do shader Sand no Toon Shaders Bundle",
      },
      {
        id: "toon-shaders-bundle-stylized-snow",
        label: "Stylized Snow",
        src: "/projects/toon-shaders-bundle/gallery/03-stylized-snow.png",
        alt: "Preview do shader Stylized Snow no Toon Shaders Bundle",
      },
      {
        id: "toon-shaders-bundle-toon-outline",
        label: "Toon Outline",
        src: "/projects/toon-shaders-bundle/gallery/04-toon-outline.png",
        alt: "Preview do shader Toon Outline no Toon Shaders Bundle",
      },
    ],
    features: [
      "Desenvolvimento de shaders customizáveis usando Shader Graph e HLSL onde necessário.",
      "Cena de demonstração de todos os materiais com seus respectivos exemplos de utilização em jogos.",
      "Custom Editor programado para facilitar a navegação do usuário na cena e a adição de novos assets na cena de demonstração.",
      "Build Windows e WebGL da cena de apresentação.",
    ],
    responsibilities: [
      "Esse é um projeto pessoal em que desenvolvi um pacote de efeitos visuais para ser utilizado em projetos Unity.",
      "Utilizando Shader Graph, criei mais de 30 efeitos, cada um com uma a cinco variações. Esse pacote está disponível para compra em diferentes plataformas de venda de assets e foi o primeiro produto que desenvolvi e lancei no mercado trabalhando com efeitos visuais.",
      "Além do pacote, também lancei um app que apresenta todos os efeitos de forma detalhada, com distribuição para Windows e WebGL.",
    ],
  },
  {
    slug: "ability-system",
    title: "Ability System",
    category: "PROJETOS PESSOAIS",
    shortDescription:
      "Sistema modular de habilidades com Scriptable Objects, integração com UI, input, animação e máquina de estados.",
    description:
      "Esse sistema foi criado para adicionar habilidades ao personagem de forma rápida e personalizável usando Scriptable Objects. O sistema foi feito para resolver um problema recorrente na integração entre efeitos visuais e gameplay dentro da Unity.",
    externalLink: {
      label: "Confira no GitHub",
      href: "https://github.com/VinicciusFX/Ability-System",
      platform: "GitHub",
    },
    tools: ["Unity", "Scriptable Objects", "UI", "Input System", "Gameplay"],
    palette: ["#0f766e", "#60a5fa"],
    cardImage: {
      src: "/projects/cards/ability-system.png",
      alt: "Arte do projeto Ability System",
    },
    media: [
      {
        id: "ability-system-shield-sphere",
        label: "Escudo esférico",
        src: "/projects/ability-system/gallery/01-shield-sphere.png",
        alt: "Personagem usando habilidade de escudo esférico no Ability System",
      },
      {
        id: "ability-system-build-zone",
        label: "Zona de construção",
        src: "/projects/ability-system/gallery/02-build-zone.png",
        alt: "Pré-visualização de área de construção no Ability System",
      },
      {
        id: "ability-system-projectile-attack",
        label: "Ataque de projétil",
        src: "/projects/ability-system/gallery/03-projectile-attack.png",
        alt: "Habilidade de projétil atingindo múltiplos inimigos no Ability System",
      },
      {
        id: "ability-system-area-control",
        label: "Controle de área",
        src: "/projects/ability-system/gallery/04-area-control.png",
        alt: "Habilidade de controle de área afetando múltiplos alvos no Ability System",
      },
    ],
    features: [
      "Sistema modular e escalável, em que cada habilidade é um Scriptable Object personalizável de diversas formas.",
      "Compatibilidade com o Input System e o Legacy Input System da Unity.",
      "Aplicação de uma animação diferente para cada habilidade.",
      "Módulos desacoplados, se comunicando através de uma camada de eventos ou interfaces.",
      "UI montada automaticamente, posicionando os botões na HUD conforme as configurações definidas no Scriptable Object de cada habilidade.",
    ],
    responsibilities: [
      "Esse sistema de habilidades foi desenvolvido para resolver um problema que eu enfrentava ao criar efeitos visuais: eu não conseguia integrá-los em uma gameplay de forma rápida para publicar vídeos e demonstrações.",
      "Para resolver isso, criei um sistema modular e escalável, desacoplado o bastante para que novas habilidades pudessem ser adicionadas sem exigir alterações estruturais no código ou criação manual de novos botões na UI.",
      "As habilidades são gerenciadas por uma máquina de estados que permite o uso simultâneo de habilidades diferentes, enquanto impede a reutilização da mesma habilidade antes do fim do tempo de recarga. O sistema também foi programado para suportar uma animação específica por habilidade sem exigir troca de Animator ou múltiplos slots dedicados.",
    ],
  },
];
