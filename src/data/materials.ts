export type MaterialModule = 'cin' | 'eq' | 'demo';

export interface Material {
  id: string;
  title: string;
  module: MaterialModule;
  icon: string;
  description: string;
  time: string;
  difficulty: string;
  intro: string;
  materials: string[];
  steps: { text: string; note?: string }[];
  equations?: { line: string; label: string; sub?: boolean }[];
  conclusion: { q: string; placeholder?: string }[];
  plan: 'avulso' | 'kit' | 'escola';
}

export const materials: Material[] = [
  {
    id: 'conc',
    title: 'Influência da Concentração',
    module: 'cin',
    icon: '💧',
    description: 'Vinagre + bicarbonato de sódio em diferentes concentrações. Mede o tempo de reação.',
    time: '45-60 min',
    difficulty: 'Fácil',
    intro: 'Nesta atividade, vamos observar como a variação da concentração de um reagente (ácido acético do vinagre) altera a rapidez com que o dióxido de carbono é produzido na reação com o bicarbonato de sódio. É uma aplicação direta da Teoria das Colisões.',
    materials: [
      '3 vidros de conserva vazios',
      'Vinagre de álcool',
      'Bicarbonato de sódio',
      'Água filtrada',
      'Cronômetro',
      'Colher de chá'
    ],
    steps: [
      { text: 'Etiquete os 3 vidros como: PURO, MÉDIO e DILUÍDO.' },
      { text: 'No vidro PURO, coloque 100 mL de vinagre.' },
      { text: 'No vidro MÉDIO, coloque 50 mL de vinagre e 50 mL de água.' },
      { text: 'No vidro DILUÍDO, coloque 25 mL de vinagre e 75 mL de água.' },
      { text: 'Prepare 3 porções de 1 colher de chá de bicarbonato.' },
      { text: 'Adicione o bicarbonato no vidro PURO e inicie o cronômetro.', note: '⚠️ Pare quando as bolhas pararem de subir.' }
    ],
    conclusion: [
      { q: 'Em qual frasco a reação foi mais rápida?', placeholder: 'Descreva os tempos observados...' },
      { q: 'Como a Teoria dos Choques explica esse resultado?', placeholder: 'Pense na probabilidade de encontro entre as moléculas...' }
    ],
    plan: 'avulso'
  },
  {
    id: 'sup',
    title: 'Superfície de Contato',
    module: 'cin',
    icon: '💊',
    description: 'Comprimido antiácido inteiro vs triturado. Relação com a rapidez da reação.',
    time: '20-30 min',
    difficulty: 'Fácil',
    intro: 'Como a fragmentação de um sólido influencia a velocidade da sua reação com um líquido? Vamos comparar o tempo de dissolução de um comprimido efervescente inteiro e em pó.',
    materials: [
      '2 copos transparentes',
      '2 comprimidos efervescentes',
      'Água (temperatura ambiente)',
      'Cronômetro'
    ],
    steps: [
      { text: 'Coloque 150 mL de água em cada copo.' },
      { text: 'Triture um dos comprimidos até virar pó.' },
      { text: 'Adicione o comprimido INTEIRO no primeiro copo e inicie o cronômetro.' },
      { text: 'Repita com o comprimido em PÓ no segundo copo.' }
    ],
    conclusion: [
      { q: 'Qual reagiu mais rápido? Por quê?', placeholder: '' },
      { q: 'Como isso se aplica à nossa digestão?', placeholder: 'Pense por que mastigamos os alimentos...' }
    ],
    plan: 'avulso'
  },
  {
    id: 'temp',
    title: 'Influência da Temperatura',
    module: 'cin',
    icon: '🌡️',
    description: 'Banho-maria vs banho de gelo. Como o calor afeta as partículas.',
    time: '45 min',
    difficulty: 'Médio',
    intro: 'A temperatura é um dos fatores mais críticos na rapidez das reações químicas. Vamos observar o efeito da energia térmica na colisão entre as partículas.',
    materials: [
      '3 béqueres ou copos de vidro',
      'Água quente, gelada e ambiente',
      'Pastilhas efervescentes',
      'Termômetro (opcional)'
    ],
    steps: [
      { text: 'Prepare os três banhos: Quente (60°C), Ambiente (20°C) e Gelado (5°C).' },
      { text: 'Adicione uma pastilha em cada e cronometre.' }
    ],
    conclusion: [
      { q: 'Qual a relação entre temperatura e tempo de reação?', placeholder: '' }
    ],
    plan: 'kit'
  },
  {
    id: 'garrafa',
    title: 'Garrafa Azul',
    module: 'eq',
    icon: '🔵',
    description: 'Reação de oxirredução reversível com mudança de cor impactante.',
    time: '45 min',
    difficulty: 'Difícil (Usa soda cáustica)',
    intro: 'Um clássico da química! Uma solução incolor que fica azul ao ser agitada e volta a ser incolor em repouso. Uma demonstração perfeita de equilíbrio químico e oxigênio dissolvido.',
    materials: [
      'Frasco com tampa (500 mL)',
      'Glicose (açúcar)',
      'Hidróxido de Sódio (NaOH)',
      'Azul de metileno',
      'Água destilada'
    ],
    steps: [
      { text: 'Dissolva 10g de glicose e 5g de NaOH em 300 mL de água.' },
      { text: 'Adicione 3 gotas de azul de metileno. A solução ficará azul e depois incolor em repouso.' },
      { text: 'Agite a garrafa e observe a mágica.' }
    ],
    conclusion: [
      { q: 'Por que a cor volta ao agitar?', placeholder: 'O que entra na solução quando agitamos?' }
    ],
    plan: 'escola'
  }
];
