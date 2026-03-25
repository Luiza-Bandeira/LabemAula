export type MaterialModule = 'cin' | 'eq' | 'demo';

export interface Step {
  text: string;
  note?: string;
}

export interface Callout {
  type: 'info' | 'danger' | 'warning';
  icon: string;
  text: string;
}

export interface DataTable {
  title?: string;
  headers: string[];
  rows: string[][];
}

export interface EquationBox {
  lines: string[];
  label: string;
}

export interface Material {
  id: string;
  title: string;
  module: MaterialModule;
  moduleTag: string;
  icon: string;
  num: string;
  description: string;
  time: string;
  difficulty: string;
  heroMeta: string[];
  intro: string;
  materials: string[];
  steps: Step[];
  callouts?: Callout[];
  dataTables?: DataTable[];
  equationBoxes?: EquationBox[];
  conclusion: { q: string; placeholder?: string }[];
  plan: 'avulso' | 'kit' | 'escola';
}

export const materials: Material[] = [
  {
    id: 'conc',
    title: 'Influência da Concentração',
    module: 'cin',
    moduleTag: '⚗ Cinética Química · 01',
    icon: '💧',
    num: '01',
    description: 'Vinagre + bicarbonato de sódio em diferentes concentrações. Mede o tempo de reação e conecta com a Teoria dos Choques Efetivos.',
    time: '45-60 min',
    difficulty: 'Fácil',
    heroMeta: ['⏱ Aula dupla (90 min)', '👥 Grupos de 3–4', '⚗ Materiais simples'],
    intro: 'A reação entre vinagre (ácido acético) e bicarbonato de sódio libera dióxido de carbono (CO₂). Ao variar a concentração do ácido, investigamos como a quantidade de partículas por volume afeta a frequência de choques efetivos — e portanto a velocidade da reação.',
    materials: [
      '2 g de bicarbonato de sódio',
      '30 mL de vinagre',
      '10 mL de água',
      'Balança',
      'Proveta',
      '2 Erlenmeyers',
      'Cronômetro'
    ],
    steps: [
      { text: 'Em um erlenmeyer ➀, adicione 10 mL de água + 10 mL de vinagre (solução diluída — concentração 50%).' },
      { text: 'Em um erlenmeyer ➁, adicione 20 mL de vinagre puro (solução concentrada — 100%).' },
      { text: 'Adicione simultaneamente 1 g de bicarbonato de sódio em cada erlenmeyer. Dispare o cronômetro no momento da adição.', note: '⚠ Realizar nos dois ao mesmo tempo (ou com intervalo igual) para comparação justa.' },
      { text: 'Observe a efervescência em cada erlenmeyer. Pare o cronômetro quando a produção de bolhas cessar completamente. Registre os tempos.' }
    ],
    callouts: [
      { type: 'info', icon: '💡', text: 'Este experimento usa apenas materiais de cozinha. Ideal para laboratórios simples ou aulas sem estrutura completa de lab.' }
    ],
    dataTables: [
      {
        headers: ['Experimento', 'Composição', 'Concentração', 'Tempo (s)'],
        rows: [
          ['Erlenmeyer 1', '10 mL vinagre + 10 mL água', '50%', '—'],
          ['Erlenmeyer 2', '20 mL vinagre puro', '100%', '—']
        ]
      }
    ],
    equationBoxes: [
      {
        lines: ['CH₃COOH(aq) + NaHCO₃(s) → CH₃COONa(aq) + H₂O(l) + CO₂(g)'],
        label: 'Ácido acético + Bicarbonato de sódio → Acetato de sódio + Água + Dióxido de carbono'
      }
    ],
    conclusion: [
      { q: 'O que foi observado no fenômeno? Descreva as diferenças entre os dois erlenmeyers.', placeholder: 'Descreva a intensidade da efervescência, formação de espuma e diferença no tempo...' },
      { q: 'Como explicar o comportamento das partículas nos dois casos pela Teoria Cinética?', placeholder: 'Relacione a concentração com o número de partículas por volume e a frequência de colisões...' },
      { q: 'Como relacionar a Teoria dos Choques Efetivos com os resultados obtidos?', placeholder: 'Para que ocorra uma reação, as partículas precisam colidir com energia suficiente e orientação correta...' }
    ],
    plan: 'avulso'
  },
  {
    id: 'sup',
    title: 'Influência da Superfície de Contato',
    module: 'cin',
    moduleTag: '⚗ Cinética Química · 02',
    icon: '💊',
    num: '02',
    description: 'Comprimido antiácido inteiro vs triturado. Relação direta com absorção de medicamentos no cotidiano dos alunos.',
    time: '20-30 min',
    difficulty: 'Fácil',
    heroMeta: ['⏱ Aula simples (45 min)', '👥 Grupos de 3–4', '💊 Antiácido'],
    intro: 'Antiácidos são substâncias que neutralizam o ácido gástrico, aliviando azia e má-digestão. Ao triturar o comprimido, aumentamos a área de contato entre sólido e líquido — investigando como isso afeta a rapidez da reação de neutralização.',
    materials: [
      '2 comprimidos antiácidos',
      '20 mL de água',
      'Cadinho de porcelana com pistilo',
      '2 Erlenmeyers',
      'Cronômetro'
    ],
    steps: [
      { text: 'Em um cadinho, triture um comprimido antiácido com o pistilo até obter um pó fino e homogêneo.' },
      { text: 'Adicione 10 mL de água em cada um dos dois erlenmeyers.' },
      { text: 'Adicione o comprimido inteiro no erlenmeyer ➀ e o comprimido triturado no erlenmeyer ➁. Dispare o cronômetro simultaneamente.', note: '⚠ Tente adicionar ao mesmo tempo para comparação justa.' },
      { text: 'Observe a efervescência. Pare o cronômetro em cada caso quando a reação cessar completamente. Registre os tempos separadamente.' }
    ],
    dataTables: [
      {
        headers: ['Experimento', 'Estado do comprimido', 'Superfície de contato', 'Tempo (s)'],
        rows: [
          ['Erlenmeyer 1', 'Inteiro', 'Menor', '—'],
          ['Erlenmeyer 2', 'Triturado (pó)', 'Maior', '—']
        ]
      }
    ],
    equationBoxes: [
      {
        lines: ['NaHCO₃(s) + H₂O(l) → Na+(aq) + HCO₃–(aq) + H₂O'],
        label: 'Dissolução do bicarbonato de sódio (componente do antiácido)'
      }
    ],
    conclusion: [
      { q: 'O que foi observado? Compare a efervescência dos dois casos.', placeholder: '' },
      { q: 'Como a trituração aumenta a área de superfície e afeta a frequência de colisões entre as partículas?', placeholder: 'Pense em quantas partículas ficam expostas à água quando o comprimido está inteiro vs em pó...' },
      { q: 'Por que comprimidos efervescentes dissolvem mais rápido do que comprimidos sólidos comuns? Como isso se relaciona com a prática?', placeholder: '' }
    ],
    plan: 'avulso'
  },
  {
    id: 'temp',
    title: 'Influência da Temperatura',
    module: 'cin',
    moduleTag: '⚗ Cinética Química · 03',
    icon: '🌡️',
    num: '03',
    description: 'Banho-maria vs banho de gelo. Demonstra como energia cinética das partículas determina a rapidez da reação.',
    time: '45 min',
    difficulty: 'Médio',
    heroMeta: ['⏱ Aula dupla (90 min)', '👥 Grupos de 3–4', '🔥 Usa lamparina'],
    intro: 'A temperatura determina a energia cinética média das partículas. Ao aquecer ou resfriar o vinagre, investigamos como a variação de temperatura altera a velocidade com que as partículas reagem com o bicarbonato de sódio.',
    materials: [
      '2 g de bicarbonato de sódio',
      '20 mL de vinagre',
      'Proveta de 50 mL',
      '2 Erlenmeyers',
      'Tripé e tela de amianto',
      'Álcool etílico',
      'Pavio e lamparina',
      'Béquer grande',
      'Gelo',
      'Água',
      'Cronômetro'
    ],
    steps: [
      { text: 'Adicione 10 mL de vinagre no erlenmeyer ➀. Coloque-o em banho-maria e aqueça até ~50–60°C (quente ao toque, sem ferver).' },
      { text: 'Adicione 10 mL de vinagre no erlenmeyer ➁. Coloque-o em banho de gelo por 5 minutos para resfriar a solução.' },
      { text: 'Adicione 1 g de bicarbonato de sódio em cada erlenmeyer simultaneamente. Dispare o cronômetro.', note: '⚠ Ideal realizar os dois ao mesmo tempo com auxílio de um colega.' },
      { text: 'Observe e registre o tempo de reação em cada caso. Pause o cronômetro quando a efervescência cessar.' }
    ],
    callouts: [
      { type: 'danger', icon: '🔥', text: 'Cuidado ao manusear a lamparina. Use tela de amianto e não deixe o erlenmeyer superaquecer. Nunca aqueça diretamente na chama — sempre em banho-maria.' }
    ],
    dataTables: [
      {
        headers: ['Experimento', 'Condição', 'Temperatura estimada', 'Tempo (s)'],
        rows: [
          ['Erlenmeyer 1', 'Banho-maria (aquecido)', '~50–60 °C', '—'],
          ['Erlenmeyer 2', 'Banho de gelo (resfriado)', '~0–10 °C', '—']
        ]
      }
    ],
    equationBoxes: [
      {
        lines: ['CH₃COOH(aq) + NaHCO₃(s) → CH₃COONa(aq) + H₂O(l) + CO₂(g)'],
        label: ''
      }
    ],
    conclusion: [
      { q: 'O que foi observado? Compare a reação nos dois erlenmeyers.', placeholder: '' },
      { q: 'Como a temperatura altera a energia cinética das partículas? O que isso causa na frequência e na eficácia das colisões?', placeholder: '' },
      { q: 'Como a Teoria dos Choques Efetivos explica os resultados? Por que reações em temperaturas baixas são mais lentas?', placeholder: '' }
    ],
    plan: 'kit'
  },
  {
    id: 'cat',
    title: 'Influência do Catalisador',
    module: 'cin',
    moduleTag: '⚗ Cinética Química · 04',
    icon: '⚡',
    num: '04',
    description: 'Zinco + H₂SO₄ com KMnO₄. O papel do KNO₃ como catalisador e a teoria da energia de ativação.',
    time: '45 min',
    difficulty: 'Médio',
    heroMeta: ['⏱ Aula dupla (90 min)', '👥 Grupos de 3–4', '⚗ Lab equipado'],
    intro: 'Catalisadores aceleram reações ao reduzir a energia de ativação — sem serem consumidos no processo. Neste experimento, o KNO₃ atua como catalisador na reação de descoloração do KMnO₄, demonstrando como um intermediário de reação pode criar um caminho energético mais favorável.',
    materials: [
      '2 tubos de ensaio',
      'Zinco (grânulos)',
      'H₂SO₄ 1 mol/L',
      'KMnO₄ 0,01 mol/L',
      'KNO₃ sólido',
      'Cronômetro'
    ],
    steps: [
      { text: 'Em dois tubos de ensaio, coloque um grânulo de zinco e 1,0 mL de H₂SO₄ 1,0 mol/L em cada.' },
      { text: 'Aguarde o início do desprendimento de H₂ (aparecimento de bolhas). Então adicione 2 gotas de KMnO₄ 0,01 mol/L em cada tubo. Inicie o cronômetro. Observe a cor violeta.' },
      { text: 'Em apenas um dos tubos, adicione um pequeno cristal de KNO₃. O outro permanece sem KNO₃ (controle).', note: '💡 Este é o ponto crítico do experimento. Observe e compare os dois tubos.' },
      { text: 'Registre o tempo de descoloração (desaparecimento da cor violeta) em cada tubo separadamente.' }
    ],
    callouts: [
      { type: 'danger', icon: '⚠️', text: 'H₂SO₄ é corrosivo. Use luvas e óculos de proteção. Trabalhe na capela se disponível.' }
    ],
    dataTables: [
      {
        headers: ['Tubo', 'Composição', 'Tempo descoloração (s)'],
        rows: [
          ['Tubo 1 (controle)', 'Zn + H₂SO₄ + KMnO₄', '—'],
          ['Tubo 2 (catalisado)', 'Zn + H₂SO₄ + KMnO₄ + KNO₃', '—']
        ]
      }
    ],
    equationBoxes: [
      {
        lines: [
          '1a (lenta)  2 MnO₄⁻ + 6 H⁺ + 5 H₂ → 2 Mn²⁺ + 8 H₂O',
          '2a (rápida) 5 NO₃⁻ + 5 H₂ → 5 NO₂⁻ + 5 H₂O',
          '3a (rápida) 2 MnO₄⁻ + 5 NO₂⁻ + 6 H⁺ → 2 Mn²⁺ + 5 NO₃⁻ + 3 H₂O'
        ],
        label: 'A soma de 2a + 3a é equivalente à reação 1a, porém ocorre por um caminho de menor energia de ativação'
      }
    ],
    conclusion: [
      { q: 'O que foi observado? Qual tubo descolorou mais rápido e por quê?', placeholder: '' },
      { q: 'Qual reação ocorreu em cada tubo (1a, 2a+3a)? Qual foi o papel do KNO₃?', placeholder: 'O KNO₃ foi consumido? Ele aparece no produto final?' },
      { q: 'Como a teoria da energia de ativação explica a ação do catalisador? Desenhe mentalmente um diagrama de energia.', placeholder: '' }
    ],
    plan: 'kit'
  },
  {
    id: 'rapido',
    title: 'Rapidez das Reações',
    module: 'cin',
    moduleTag: '⚗ Cinética Química · 05',
    icon: '📈',
    num: '05',
    description: 'Mede volume de CO₂ ao longo do tempo com 10, 20 e 30 mL de vinagre. Análise quantitativa com tabela.',
    time: '45 min',
    difficulty: 'Médio',
    heroMeta: ['⏱ Aula dupla (90 min)', '👥 Grupos de 3–4', '📊 Dados quantitativos'],
    intro: 'Medindo o volume de CO₂ produzido ao longo do tempo, construímos uma análise quantitativa da rapidez da reação entre bicarbonato e vinagre. A variação do volume de ácido acético permite comparar taxas de reação e construir gráficos de velocidade.',
    materials: [
      '0,5 g de bicarbonato de sódio',
      'Vinagre (10, 20 e 30 mL)',
      'Tubo de ensaio',
      'Garras e suporte universal',
      'Proveta de 50 mL',
      'Béquer de 1 L',
      'Rolha',
      'Mangueira de borracha',
      'Cronômetro'
    ],
    steps: [
      { text: 'Introduza 0,5 g de bicarbonato de sódio no tubo de ensaio. Adapte a mangueira na rolha e tampe.' },
      { text: 'Encha a proveta de 50 mL com água. Tampe com a palma da mão e inverta com cuidado dentro do béquer com água + vinagre (10 mL vinagre : 100 mL água). Prenda com a garra.', note: '⚠ Certifique-se que não há bolha de ar dentro da proveta invertida.' },
      { text: 'Introduza a outra extremidade da mangueira na proveta invertida. Destampe o tubo e adicione 10 mL de vinagre. Tampe rapidamente.' },
      { text: 'Quando a primeira bolha surgir na proveta, dispare o cronômetro. Para cada 5 mL de gás coletado, anote o tempo. Pare aos 25 mL.' },
      { text: 'Repita os passos variando para 20 mL e depois 30 mL de vinagre.' }
    ],
    dataTables: [
      {
        title: 'Registro de Dados — 10 mL de vinagre',
        headers: ['Volume de gás (mL)', 'Tempo (s)'],
        rows: [['5 mL', '—'], ['10 mL', '—'], ['15 mL', '—'], ['20 mL', '—'], ['25 mL', '—']]
      },
      {
        title: '20 mL de vinagre',
        headers: ['Volume de gás (mL)', 'Tempo (s)'],
        rows: [['5 mL', '—'], ['10 mL', '—'], ['15 mL', '—'], ['20 mL', '—'], ['25 mL', '—']]
      },
      {
        title: '30 mL de vinagre',
        headers: ['Volume de gás (mL)', 'Tempo (s)'],
        rows: [['5 mL', '—'], ['10 mL', '—'], ['15 mL', '—'], ['20 mL', '—'], ['25 mL', '—']]
      }
    ],
    equationBoxes: [
      {
        lines: ['CH₃COOH(aq) + NaHCO₃(s) → CH₃COONa(aq) + H₂O(l) + CO₂(g)'],
        label: ''
      }
    ],
    conclusion: [
      { q: 'O que foi observado? Como a produção de gás variou com a concentração?', placeholder: '' },
      { q: 'Como as partículas se comportam nos três casos pela Teoria dos Choques?', placeholder: '' },
      { q: 'O que a prática demonstrou sobre a relação entre concentration e velocidade de reação?', placeholder: '' }
    ],
    plan: 'kit'
  },
  {
    id: 'relogio',
    title: 'Reação Relógio',
    module: 'cin',
    moduleTag: '⚗ Cinética Química · 06',
    icon: '🕐',
    num: '06',
    description: '7 concentrações de KIO₃ + bissulfito. A coloração azul dramática revela o momento exato da reação.',
    time: '45-60 min',
    difficulty: 'Médio',
    heroMeta: ['⏱ Aula dupla (90 min)', '👥 Grupos de 3–4', '🎨 Mudança de cor dramática'],
    intro: 'A "reação relógio" é um clássico espetacular da cinética química. O iodo (I₂) produzido reage com o amido formando um complexo azul intenso — mas apenas quando todo o bissulfito (HSO₃⁻) é consumido. Variando a concentração do iodato, investigamos como a concentração determina o "tempo de disparo" da coloração azul.',
    materials: [
      'Solução A: KIO₃ diluído + H₂SO₄',
      'Solução B: HSO₃⁻ + amido',
      '14 tubos de ensaio',
      'Proveta graduada',
      'Água destilada',
      'Cronômetro'
    ],
    steps: [
      { text: 'Prepare as 7 diluições da Solução A conforme a tabela abaixo. Numere os tubos de #1A a #7A.' },
      { text: 'Em 7 tubos numerados #1B a #7B, adicione 5 mL da Solução B em cada.' },
      { text: 'Despeje o tubo #1A sobre o #1B e dispare o cronômetro imediatamente. Agite em movimentos circulares.', note: '⚠ Só disparar quando as duas soluções entrarem em contato!' },
      { text: 'Observe atentamente. No instante em que aparecer a coloração azul intensa, pare o cronômetro. Registre o tempo.' },
      { text: 'Repita o procedimento para os tubos #2 a #7.' }
    ],
    callouts: [
      { type: 'info', icon: 'ℹ', text: 'Prepare todos os tubos A antes de começar as reações. A reação pode ser muito rápida nos tubos com maior concentração.' }
    ],
    dataTables: [
      {
        headers: ['Tubo', 'Vol. Sol. A (mL)', 'Vol. H₂O (mL)', 'Vol. Sol. B (mL)', 'Tempo (s)'],
        rows: [
          ['#1', '2,50', '0,00', '5,00', '—'],
          ['#2', '2,00', '0,50', '5,00', '—'],
          ['#3', '1,50', '1,00', '5,00', '—'],
          ['#4', '1,25', '1,25', '5,00', '—'],
          ['#5', '1,00', '1,50', '5,00', '—'],
          ['#6', '0,75', '1,75', '5,00', '—'],
          ['#7', '0,50', '2,00', '5,00', '—']
        ]
      }
    ],
    equationBoxes: [
      {
        lines: [
          'IO₃⁻(aq) + 3 HSO₃⁻(aq) → I⁻(aq) + 3 SO₄²⁻(aq) + 3 H⁺(aq)',
          '5 I⁻(aq) + 6 H⁺(aq) + IO₃⁻(aq) → 3 I₂(s) + 3 H₂O(l)'
        ],
        label: 'I₂ + amido → complexo azul intenso (indicador visual da conclusão da reação)'
      }
    ],
    conclusion: [
      { q: 'O que foi observado? Descreva o momento em que a coloração azul apareceu.', placeholder: '' },
      { q: 'Como o comportamento das partículas explica a variação no tempo de reação?', placeholder: '' },
      { q: 'O que a prática demonstrou sobre a relação entre concentração e velocidade de reação?', placeholder: '' }
    ],
    plan: 'kit'
  },
  {
    id: 'garrafa',
    title: 'Garrafa Azul (Blue Bottle)',
    module: 'eq',
    moduleTag: '⚖ Equilíbrio Químico · 07',
    icon: '🔵',
    num: '07',
    description: 'Glicose + NaOH + azul de metileno. Azul ao agitar, incolor em repouso. Equilíbrio reversível em ação.',
    time: '45 min',
    difficulty: 'Fácil',
    heroMeta: ['⏱ Aula dupla (90 min)', '👥 Demonstração + grupos', '🔵 Alto impacto visual'],
    intro: 'A garrafa azul é um experimento icônico de equilíbrio. O azul de metileno é reduzido pela glicose (em meio básico) e fica incolor — mas ao agitar e introduzir O₂ do ar, é reoxidado e volta ao azul. O sistema oscila entre dois estados de equilíbrio de forma visível e repetida.',
    materials: [
      '600 mL de água',
      '5 mL de azul de metileno',
      '18 g de dextrose (glicose)',
      '10 g de NaOH puro',
      'Garrafa volumétrica 1,5–2 L'
    ],
    steps: [
      { text: 'Adicione 600 mL de água na garrafa.' },
      { text: 'Adicione os 10 g de NaOH. Feche bem e agite até dissolver completamente.', note: '⚠ Atenção: a garrafa vai aquecer com o NaOH! Segure com cuidado.' },
      { text: 'Adicione los 18 g de dextrose. Feche e agite até dissolver.' },
      { text: 'Adicione o azul de metileno. Feche bem e agite vigorosamente por 5 segundos. ➝ Toda a solução fica azul.' },
      { text: 'Deixe a garrafa em repouso e observe. ➝ A solução ficará progressivamente incolor. Agite novamente para retornar ao azul.' }
    ],
    callouts: [
      { type: 'danger', icon: '⚠️', text: 'O NaOH (soda cáustica) é corrosivo e sua dissolução em água é muito exotérmica. Use luvas. A garrafa ficará quente — manuseie com cuidado.' }
    ],
    conclusion: [
      { q: 'O que foi observado? Por que a solução fica azul ao agitar e incolor em repouso?', placeholder: 'Pense no papel do oxigênio do ar na reoxidação do azul de metileno...' },
      { q: 'Como as partículas se comportam nesse sistema reversível? O que acontece com o equilíbrio ao agitar?', placeholder: '' },
      { q: 'O que a prática demonstrou sobre o conceito de equilíbrio químico e reversibilidade?', placeholder: '' }
    ],
    plan: 'kit'
  },
  {
    id: 'permanga',
    title: 'Permanganato + Amônia',
    module: 'eq',
    moduleTag: '⚖ Equilíbrio Químico · 08',
    icon: '🟣',
    num: '08',
    description: 'Fenolftaleína, NH₃, KMnO₄ e H₂O₂. Dois experimentos que mostram deslocamento de equilíbrio por temperatura e reagentes.',
    time: '45-90 min',
    difficulty: 'Médio',
    heroMeta: ['⏱ Aula dupla (90 min)', '👥 Grupos + demonstração', '🎨 Duas partes'],
    intro: 'Dois experimentos integrados: na Parte 1, a reação de ionização da amônia é perturbada pela temperatura, mostrando o princípio de Le Chatelier. Na Parte 2, o permanganato de potássio reage com vinagre e água oxigenada, revelando como o equilíbrio é deslocado pela adição de reagentes.',
    materials: [
      '200 mL de água',
      'Solução amoniacal doméstica',
      'Solução de fenolftaleína',
      'Lamparina / Bico de Bunsen',
      'Gelo + recipiente',
      'Tubo de ensaio',
      'Béquer de 250 mL',
      '4 copos de vidro (250 mL)',
      '2 comprimidos de KMnO₄',
      'Vinagre incolor (CH₃COOH)',
      'Água oxigenada 10 vol (H₂O₂)',
      'Bastão de vidro'
    ],
    steps: [
      { text: 'Parte 1: Coloque 200 mL de água em um béquer. Adicione 10 gotas de solução amoniacal e fenolftaleína. Observe a cor.' },
      { text: 'Aqueça parte da solução no tubo de ensaio. Observe a mudança de cor.' },
      { text: 'Resfrie em banho de gelo e observe novamente.' },
      { text: 'Parte 2: Prepare copos com KMnO₄ em água (1 e 2). Copos 3 e 4 com vinagre e H₂O₂.' },
      { text: 'No copo 1: adicione vinagre, depois H₂O₂. No copo 2: adicione H₂O₂ primeiro, depois vinagre.' }
    ],
    callouts: [
      { type: 'info', icon: '📰', text: 'Contexto: Na altitude de La Paz (3.600 m), o Brasil perdeu para a Bolívia 2×1 nas eliminatórias de 2009. Como isso se relaciona com equilíbrio químico no sangue?' }
    ],
    dataTables: [
      {
        headers: ['Reagentes no copo', 'Cor da solução', 'Espécies presentes'],
        rows: [
          ['Água + KMnO₄', 'Observe', 'MnO₄⁻, H₂O'],
          ['+ Vinagre (CH₃COOH)', 'Observe', '—'],
          ['+ Água oxigenada (H₂O₂)', 'Observe', '—'],
          ['Água + KMnO₄ + H₂O₂', 'Observe', '—']
        ]
      }
    ],
    conclusion: [
      { q: 'O que foi observado em cada etapa? Descreva as mudanças de cor.', placeholder: '' },
      { q: 'Como o contexto do futebol em La Paz (altitude) se relaciona com equilíbrio químico no sangue?', placeholder: 'Pense na hemoglobina e no equilíbrio HbO₂ ⇌ Hb + O₂...' },
      { q: 'O que a prática demonstrou sobre o equilíbrio químico?', placeholder: '' }
    ],
    plan: 'kit'
  },
  {
    id: 'elefante',
    title: 'Pasta de Dente de Elefante',
    module: 'demo',
    moduleTag: '🐘 Demonstração Especial · 09',
    icon: '🐘',
    num: '09',
    description: 'H₂O₂ concentrado + KI como catalisador. Espuma explosiva de alto impacto visual. Demonstração expositiva com toda turma.',
    time: '15 min',
    difficulty: 'Médio',
    heroMeta: ['⏱ 15 minutos', '👀 Toda a turma assiste', '🔬 Um grupo executa'],
    intro: 'O peróxido de hidrogênio (H₂O₂) se decompõe lentamente em O₂ e H₂O. O iodeto de potássio (KI) funciona como catalisador: reage com o H₂O₂ em dois passos rápidos, liberando todo o O₂ rapidamente. O detergente captura o gás formando espuma espetacular — a "pasta de dente de elefante".',
    materials: [
      'Corante líquido (cor livre)',
      '10 mL de detergente',
      '20 mL H₂O₂ concentrado',
      '2 g de iodeto de potássio (KI)',
      'Proveta de 500 mL',
      'Recipiente plástico grande',
      'Luvas, jaleco e óculos (EPI)'
    ],
    steps: [
      { text: 'Coloque a proveta de 500 mL sobre o recipiente plástico. Todos os participantes calçam luvas e óculos.' },
      { text: 'Adicione o corante líquido dentro da proveta.' },
      { text: 'Adicione os 10 mL de detergente.' },
      { text: 'Adicione cuidadosamente os 20 mL de H₂O₂ concentrado.' },
      { text: 'Com cuidado, adicione os 2 g de KI à mistura. Imediatamente recue e observe!', note: '🐘 A espuma subirá rapidamente pela proveta e transbordará para o recipiente.' }
    ],
    callouts: [
      { type: 'danger', icon: '⚠️', text: 'PRÁTICA EXPOSITIVA — apenas um grupo executa. A água oxigenada concentrada pode causar queimaduras. Use luvas, jaleco e óculos de proteção obrigatoriamente.' }
    ],
    equationBoxes: [
      {
        lines: ['2 H₂O₂(aq) → 2 H₂O(l) + O₂(g)'],
        label: 'Reação global · catalisa via KI em dois passos rápidos'
      },
      {
        lines: ['H₂O₂ + I⁻ → H₂O + OI⁻  |  H₂O₂ + OI⁻ → H₂O + I⁻ + O₂'],
        label: 'O I⁻ é regenerado no 2º passo — é um catalisador (não é consumido)'
      }
    ],
    conclusion: [
      { q: 'O que foi observado? Descreva o fenômeno com detalhes.', placeholder: '' },
      { q: 'Qual é a função do iodeto (I⁻) nessa reação? Ele foi consumido?', placeholder: 'Observe as equações dos dois passos. O I⁻ aparece no início e no final...' },
      { q: 'Como a enzima catalase no sangue age de forma similar ao KI neste experimento?', placeholder: 'Pense no que acontece quando você coloca água oxigenada em um machucado...' }
    ],
    plan: 'escola'
  }
];
