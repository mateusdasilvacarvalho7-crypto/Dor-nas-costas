// assets/js/data.js
// Edite apenas este arquivo para mudar copy, preços, imagens ou textos.

const CONFIG = {

  images: {
    logo:   '../images/logo.png',
    banner: '../images/banner.png'
  },

  produto: {
    checkoutUrl: 'SUBSTITUA-LINK-DO-CHECKOUT', // Hotmart / Kirvano / Cakto / Kiwify
    preco: '17',
    precoAntes: 'De R$ 47,00'
  },

  topBanner: {
    badge: 'Oferta de lançamento',
    text: 'Desconto especial, por tempo limitado'
  },

  hero: {
    eyebrow: 'Protocolo por tipo de dor · Sem equipamentos · Resultado na 1ª aplicação',
    headline: 'A dor some quando você para de usar a técnica errada para o seu tipo de dor',
    sems: ['Sem equipamentos', 'Sem sair de casa', 'Sem técnica genérica'],
    sub: 'O Protocolo Costas Novas identifica se a origem é lombar, cervical ou tensão muscular — e aplica a sequência certa direto no ponto de origem. Resultado na primeira aplicação.',
    proofText: 'mais de 2.400 pessoas já aliviaram suas dores',
    cta: 'QUERO ALIVIAR MINHA DOR AGORA',
    trust: [
      { label: 'Acesso imediato' },
      { label: 'Material completo' },
      { label: '7 dias de garantia' }
    ]
  },

  stats: [
    { valor: '2.400+', label: 'pessoas aliviadas' },
    { valor: '4.9/5',  label: 'avaliação média' },
    { valor: '70',     label: 'técnicas detalhadas' },
    { valor: '24h',    label: 'para o primeiro alívio' }
  ],

  problem: {
    eyebrow: 'Você reconhece isso?',
    headline: 'Você já tentou de tudo. A dor voltou porque a técnica era errada para o seu tipo de dor',
    pains: [
      { text: 'Acordar travado e levar minutos para conseguir levantar da cama.' },
      { text: 'Sentir fisgada ao sentar, dirigir, carregar peso ou amarrar o sapato.' },
      { text: 'Dormir mal sem encontrar posição confortável — e acordar pior do que dormiu.' }
    ]
  },

  solution: {
    eyebrow: 'Por que nada funcionou até agora',
    headline: 'A técnica certa muda quando o tipo de dor muda',
    steps: [
      { num: '01', title: 'Identifique a região', desc: 'Lombar, cervical ou tensão muscular — cada origem exige uma sequência diferente. Sem identificar o tipo, qualquer técnica é genérica.' },
      { num: '02', title: 'Aplique a sequência certa', desc: 'Siga o protocolo específico para o seu tipo de dor. Sem improvisar, sem aplicar técnica errada que não resolve.' },
      { num: '03', title: 'Repita com segurança', desc: 'Use como rotina de cuidado. Com repetição, o alívio se torna mais rápido e a frequência das crises diminui.' }
    ]
  },

  features: {
    eyebrow: 'O que você recebe',
    headline: 'Cada protocolo mapeado para um tipo de dor',
    items: [
      { title: 'Levante sem rigidez',          desc: '3 movimentos de liberação lombar aplicados antes de sair da posição horizontal.' },
      { title: 'Trabalhe sem queimação',        desc: 'Sequência de pausa de 4 minutos para quem passa horas sentado no computador.' },
      { title: 'Fim da fisgada ao pegar peso',  desc: 'Identifique o músculo travado e solte o ponto de tensão certo antes do esforço.' },
      { title: 'Durma sem acordar com dor',     desc: 'Protocolo de descompressão em 6 minutos aplicado antes de deitar.' },
      { title: 'Menos crises',                  desc: 'Rotina de 5 minutos que impede a tensão de se acumular ao longo do dia.' },
      { title: 'Aplique sozinho',               desc: 'Sem parceiro, sem equipamento — só as próprias mãos nos pontos de tensão certos.' }
    ]
  },

  testimonials: {
    eyebrow: 'Quem já usou',
    headline: 'Resultados de quem aplicou o protocolo',
    items: [
      { initial: 'R', name: 'Roberta Almeida', role: 'Cliente Verificada', context: 'Dor lombar recorrente há 3 anos',      result: 'Melhora perceptível em 5 dias',          text: '"Todo dia acordava com a lombar travada. Na primeira semana usando o protocolo, a rigidez matinal reduziu muito. Hoje uso três vezes por semana como manutenção."' },
      { initial: 'J', name: 'Juliana Costa',   role: 'Analista, home office', context: 'Tensão cervical por 8h/dia no computador', result: 'Rotina estabelecida em menos de 7 dias', text: '"Pescoço e nuca travados toda tarde. O protocolo cervical virou minha pausa do almoço. O resultado apareceu antes de a primeira semana acabar."' },
      { initial: 'F', name: 'Fernanda Reis',   role: 'Professora',           context: 'Mãe com hérnia de disco L4-L5',           result: 'Complemento aprovado pelo fisioterapeuta', text: '"Comprei para minha mãe usar entre as sessões de fisio. O fisioterapeuta aprovou o complemento. Ela diz que a mobilidade melhorou visivelmente nas últimas semanas."' }
    ]
  },

  offer: {
    eyebrow: 'Oferta de lançamento',
    headline: 'Acesso imediato ao Protocolo Costas Novas',
    items: [
      '70 técnicas organizadas por tipo de desconforto',
      'Protocolo Lombar: movimentos para dor na parte baixa das costas',
      'Protocolo Cervical: sequência para pescoço, nuca e ombros',
      'Protocolo Tensão Muscular: liberação para costas tensas e enrijecidas',
      'Orientações para aplicar em casa com segurança, sem equipamentos',
      'Acesso imediato e vitalício pelo celular, tablet ou computador',
      'Garantia de 7 dias: se não funcionar, devolvemos tudo'
    ],
    cta: 'ACESSAR O PROTOCOLO POR R$17',
    microcopy: 'Acesso imediato · Pagamento 100% seguro · Garantia de 7 dias'
  },

  guarantee: {
    title: 'Garantia de 7 Dias',
    text: '7 dias para testar. Se não perceber melhora real no conforto ou na mobilidade, devolvemos tudo — sem perguntas, sem burocracia.'
  },

  finalCta: {
    headline: 'Chega de usar a técnica errada para o seu tipo de dor',
    cta: 'QUERO ALIVIAR MINHA DOR AGORA',
    microcopy: 'Acesso imediato · Garantia de 7 dias · Pagamento seguro'
  },

  faq: {
    eyebrow: 'Dúvidas antes de comprar',
    headline: 'Perguntas que costumamos receber',
    items: [
      { q: 'Isso substitui fisioterapia?',              a: 'Não. É material educativo de autocuidado. Não substitui diagnóstico nem tratamento profissional. Em caso de dor intensa ou condição clínica, consulte um médico.' },
      { q: 'Funciona para hérnia de disco?',            a: 'Não prometemos tratar diagnósticos. Para hérnia com dor crônica controlada, as técnicas de liberação podem complementar o tratamento. Para crise aguda com irradiação forte para a perna, consulte o médico antes.' },
      { q: 'Posso piorar a dor fazendo errado?',        a: 'O protocolo tem orientações claras sobre intensidade e limites. Cada técnica vem com instrução de quando parar. Se sentir dor aguda durante a aplicação, pare imediatamente.' },
      { q: 'Preciso de outra pessoa para aplicar?',     a: 'Não. O protocolo foi desenhado para automassagem — você aplica em si mesmo, sozinho. Sem depender de parceiro, sem precisar de fisioterapeuta presente.' },
      { q: 'Como recebo o acesso?',                     a: 'Imediato e 100% digital. Após confirmar o pagamento, você recebe o link por e-mail para acessar em qualquer dispositivo.' },
      { q: 'E se eu não sentir resultado?',             a: 'Garantia de 7 dias. Se não funcionar para você, basta enviar um e-mail e devolvemos o valor integralmente. Sem perguntas.' }
    ]
  },

  authority: {
    eyebrow: 'Base do protocolo',
    headline: 'Técnicas com base em mobilidade e liberação muscular',
    text: 'As técnicas do protocolo seguem princípios de liberação miofascial e mobilização articular — abordagens usadas em fisioterapia manual para reduzir tensão e restaurar mobilidade. Organizadas por tipo de dor, em linguagem simples, para aplicar em casa sem depender de sessão.',
    disclaimer: 'Este material é educativo. Não substitui diagnóstico médico nem tratamento clínico. Em caso de dor aguda intensa, trauma recente ou condição neurológica diagnosticada, consulte um profissional de saúde antes de aplicar.'
  },

  forWhom: {
    eyebrow: 'Antes de comprar',
    headline: 'Para quem é este guia',
    yes: {
      title: 'Para quem é',
      items: [
        'Tem dor lombar, cervical ou tensão muscular que volta com frequência',
        'Quer uma opção prática para usar em casa, no próprio ritmo',
        'Já fez fisioterapia e busca algo para manter o alívio entre as sessões',
        'Quer reduzir a dependência de remédio para dor'
      ]
    },
    no: {
      title: 'Para quem não é',
      items: [
        'Dor aguda intensa após lesão ou trauma recente',
        'Diagnóstico de fratura, tumor ou condição neurológica grave',
        'Quem busca substituir acompanhamento médico ou fisioterapêutico'
      ]
    }
  },

  valueComparison: {
    eyebrow: 'Compare antes de decidir',
    headline: 'O que R$17 representa',
    items: [
      { label: 'Sessão de fisioterapia', value: 'R$150+', sub: 'por sessão, sem garantia de continuidade' },
      { label: 'Sessão de massagem',     value: 'R$80+',  sub: 'alívio temporário, precisa repetir todo mês' },
      { label: 'Remédio para dor',       value: 'R$40+',  sub: 'por mês, mascara sem resolver a causa' },
      { label: 'Protocolo Costas Novas', value: 'R$17',   sub: 'acesso vitalício, usa quantas vezes precisar', highlight: true }
    ]
  },

  footer: {
    brand: 'Protocolo Costas Novas',
    copy: () => `© ${new Date().getFullYear()} Protocolo Costas Novas. Todos os direitos reservados.`,
    links: [
      { label: 'Termos de Uso',          href: '#' },
      { label: 'Política de Privacidade', href: '#' },
      { label: 'Contato',                 href: '#' }
    ]
  },

  salesPopup: {
    buyers: [
      { name: 'Ana Silva',       plan: 'Protocolo Costas Novas', initial: 'A' },
      { name: 'Carlos Souza',    plan: 'Protocolo Costas Novas', initial: 'C' },
      { name: 'Roberta Lima',    plan: 'Protocolo Costas Novas', initial: 'R' },
      { name: 'Marcos Oliveira', plan: 'Protocolo Costas Novas', initial: 'M' },
      { name: 'Patricia Santos', plan: 'Protocolo Costas Novas', initial: 'P' },
      { name: 'Beatriz Ramos',   plan: 'Protocolo Costas Novas', initial: 'B' },
      { name: 'Luiz Ferreira',   plan: 'Protocolo Costas Novas', initial: 'L' }
    ],
    times: ['agora mesmo', '1 min atrás', '2 min atrás', '3 min atrás', '5 min atrás', '7 min atrás']
  }

};
