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
    eyebrow: '70 técnicas · Protocolos por tipo de dor · Acesso imediato',
    headline: 'Alivie a dor nas costas com uma sequência guiada que você faz em casa',
    sems: ['Sem sair de casa', 'Só as próprias mãos', 'No seu próprio ritmo'],
    sub: 'Aprenda movimentos simples para soltar tensão, melhorar a mobilidade e buscar o primeiro alívio ainda hoje, sem equipamentos e no seu ritmo.',
    proofText: 'mais de 2.400 pessoas já aliviaram suas dores',
    cta: 'QUERO ACESSAR O PROTOCOLO POR R$17',
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
    headline: 'Quando a coluna incomoda, até tarefas simples viram esforço',
    pains: [
      { text: 'Acordar travado e demorar para "desbloquear" o corpo antes de conseguir começar o dia.' },
      { text: 'Sentir fisgada ao levantar, dirigir, sentar ou pegar qualquer peso.' },
      { text: 'Evitar movimentos por medo da dor voltar mais forte do que antes.' }
    ]
  },

  solution: {
    eyebrow: 'O método',
    headline: 'Uma sequência simples: localizar, aliviar e manter',
    steps: [
      { num: '01', title: 'Identifique a região', desc: 'Escolha o protocolo de acordo com o ponto da dor: lombar, cervical ou tensão muscular. Sem enrolação, direto ao protocolo certo.' },
      { num: '02', title: 'Faça a sequência guiada', desc: 'Siga os movimentos curtos com ritmo seguro e sem equipamentos. Cada passo é explicado em linguagem simples, sem termos técnicos.' },
      { num: '03', title: 'Repita quando precisar', desc: 'Use como rotina de cuidado para reduzir a tensão acumulada. Com repetição, o alívio se torna mais rápido e duradouro.' }
    ]
  },

  features: {
    eyebrow: 'O que você recebe',
    headline: 'Um guia completo de alívio ao seu alcance',
    items: [
      { title: '70 Técnicas Detalhadas',    desc: 'Massagens para lombar, cervical e tensão muscular, com passo a passo explicado em linguagem simples.' },
      { title: 'Protocolos por Tipo de Dor', desc: 'Encontre rapidamente a técnica certa para o seu tipo específico de dor. Sem enrolação, direto ao alívio.' },
      { title: 'Pode fazer em casa',         desc: 'Sem equipamentos especiais. Aplique sozinho ou peça ajuda de alguém próximo. Simples e eficaz.' },
      { title: 'Acesso em Qualquer Tela',    desc: 'Celular, tablet ou computador. Material digital acessível para sempre, de qualquer lugar.' },
      { title: 'Linguagem Acessível',        desc: 'Sem termos técnicos complicados. Qualquer pessoa consegue entender e aplicar as técnicas.' },
      { title: 'Resultado na 1ª Aplicação',  desc: 'Muitas técnicas proporcionam alívio imediato. Você não precisa esperar semanas para sentir a diferença.' }
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
    cta: 'QUERO COMEÇAR AGORA',
    microcopy: 'Acesso imediato · Pagamento 100% seguro · Garantia de 7 dias'
  },

  guarantee: {
    title: 'Garantia de 7 Dias',
    text: 'Aplicou as técnicas e não sentiu alívio em 7 dias? Devolvemos tudo. Sem perguntas, sem burocracia. O risco é todo nosso.'
  },

  finalCta: {
    headline: 'Chega de conviver com dor todo dia',
    cta: 'QUERO MEU ACESSO AGORA POR R$17',
    microcopy: 'Acesso imediato · Garantia de 7 dias · Pagamento seguro'
  },

  faq: {
    eyebrow: 'Dúvidas frequentes',
    headline: 'Perguntas que costumamos receber',
    items: [
      { q: 'Isso substitui fisioterapia ou consulta médica?',   a: 'Não. Este é um guia educativo de movimentos e autocuidado. Não substitui diagnóstico nem tratamento profissional. Em caso de dor intensa ou condição clínica, consulte um médico.' },
      { q: 'Em quanto tempo posso sentir melhora?',             a: 'Algumas pessoas relatam melhora no primeiro uso. Outras precisam repetir por alguns dias. Depende do tipo e da intensidade da dor.' },
      { q: 'Funciona para qualquer tipo de dor nas costas?',    a: 'Para dores musculares e tensões recorrentes, sim. Para dor intensa após trauma recente ou condição clínica diagnosticada, procure atendimento médico antes.' },
      { q: 'Preciso de equipamentos?',                          a: 'Não. As técnicas foram desenvolvidas para aplicar em casa, com as próprias mãos, sem nenhum acessório.' },
      { q: 'Como recebo o acesso?',                             a: 'Imediato e 100% digital. Após confirmar o pagamento, você recebe o link por e-mail para acessar em qualquer dispositivo.' },
      { q: 'E se eu não sentir resultado?',                     a: 'Garantia de 7 dias. Se não funcionar para você, basta enviar um e-mail e devolvemos o valor integralmente. Sem perguntas.' }
    ]
  },

  authority: {
    eyebrow: 'Base do método',
    headline: 'Criado com base em princípios de mobilidade e liberação',
    text: 'As técnicas reunidas neste guia seguem princípios de mobilização articular, liberação miofascial e alongamento progressivo, abordagens utilizadas em fisioterapia e terapias manuais para redução de tensão e melhora da mobilidade.',
    disclaimer: 'Este material é educativo e não substitui diagnóstico ou tratamento médico. Em caso de dor intensa, trauma recente ou condição clínica diagnosticada, consulte um profissional de saúde.'
  },

  forWhom: {
    eyebrow: 'Antes de comprar',
    headline: 'Para quem é este guia',
    yes: {
      title: 'Para quem é',
      items: [
        'Tem dor lombar, cervical ou tensão muscular recorrente',
        'Quer uma opção prática para usar em casa, no próprio ritmo',
        'Já fez fisioterapia e busca algo para o dia a dia entre as sessões',
        'Quer reduzir a frequência de remédio para dor'
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
