import React from 'react';

export type BadgeKind = 'current' | 'academic' | 'partner' | 'period';

export interface Badge {
  kind: BadgeKind;
  label: string;
}

export interface Leadership {
  role: string;
  summary: string;
}

export interface MetaItem {
  label: string;
  value: string;
}

export interface PanelSection {
  title: string;
  paragraph?: string;
  bullets?: React.ReactNode[];
}

export interface Project {
  id: string;
  tabLabel: string;
  title: string;
  isCurrent?: boolean;
  badges: Badge[];
  leadership?: Leadership;
  meta?: MetaItem[];
  context: string;
  sections: PanelSection[];
  tech?: string[];
  repoUrl?: string;
}

export const professionalProjects: Project[] = [
  {
    id: 'integra-rural',
    tabLabel: 'Integra Rural',
    title: 'Integra Rural – Plataforma Agrícola',
    isCurrent: true,
    badges: [
      { kind: 'current', label: 'Atual' },
      { kind: 'partner', label: 'Atuação Profissional' },
    ],
    leadership: {
      role: 'Sócio',
      summary: 'Produto, tecnologia e estratégia',
    },
    meta: [
      { label: 'Status', value: 'Em desenvolvimento' },
      { label: 'Setor', value: 'Agronegócio' },
    ],
    context:
      'A Integra Rural é uma plataforma voltada ao setor agrícola, com foco em produção e gestão. ' +
      'O projeto nasce da empresa da qual sou sócio e busca unir produtor, operação e dados em uma ' +
      'ferramenta digital que apoie decisões reais de campo.',
    sections: [
      {
        title: 'Minha atuação',
        bullets: [
          <><strong>Participação direta</strong> nas decisões estratégicas da empresa</>,
          <>Definição da <strong>visão de produto</strong> e do roadmap</>,
          <>Estruturação técnica do sistema (arquitetura, escolha de stack, padrões)</>,
          <>Tradução de necessidades reais do agronegócio em funcionalidades viáveis</>,
          <>Mediação entre operação, produto e desenvolvimento</>,
        ],
      },
      {
        title: 'Frente de atuação',
        bullets: [
          <>Gestão de produção agrícola</>,
          <>Operação e gestão para produtores</>,
          <>Inteligência de dados aplicada ao campo</>,
        ],
      },
    ],
  },
];

export const academicProjects: Project[] = [
  {
    id: 'controle-militar',
    tabLabel: 'Controle Operacional Militar',
    title: 'Aplicativo Mobile para Controle Operacional Militar',
    badges: [
      { kind: 'academic', label: 'Projeto Acadêmico' },
      { kind: 'partner', label: 'Parceria FATEC' },
      { kind: 'period', label: '2025.02' },
    ],
    leadership: {
      role: 'Product Owner',
      summary: 'Liderança de backlog e mediação com o cliente',
    },
    meta: [
      { label: 'Semestre', value: '5º – 2025.02' },
      { label: 'Parceiro', value: 'Exército Brasileiro' },
      { label: 'Status', value: 'Concluído' },
    ],
    context:
      'Projeto acadêmico desenvolvido em parceria com o Exército Brasileiro. O cliente mantinha o ' +
      'controle operacional por processos manuais, com baixa rastreabilidade. A solução substituiu ' +
      'esse fluxo por um aplicativo mobile integrado, com previsões de demanda apoiadas por IA.',
    sections: [
      {
        title: 'Atuação como Product Owner',
        bullets: [
          <>Atuei como ponte entre a equipe técnica e os representantes do cliente</>,
          <>Traduzi necessidades operacionais críticas em histórias de usuário priorizadas</>,
          <>Coordenei 3 sprints com <strong>100% das histórias planejadas concluídas</strong></>,
          <>Refinei o backlog continuamente, validando cada incremento com o cliente</>,
          <>Defini critérios de aceitação para funcionalidades sensíveis (rastreabilidade total)</>,
          <>Mediei decisões entre viabilidade técnica e requisitos operacionais</>,
        ],
      },
      {
        title: 'Funcionalidades entregues',
        bullets: [
          <>Controle de entrada e saída com QR Code</>,
          <>Gestão de lotes e validade</>,
          <>Fluxos de aprovação</>,
          <>Dashboard com previsões usando IA</>,
          <>Notificações automáticas</>,
          <>Geração de relatórios em PDF</>,
        ],
      },
    ],
    tech: ['Flutter', 'Node.js', 'Python', 'Supabase', 'PostgreSQL', 'Figma'],
    repoUrl: 'https://github.com/TeamHiveAPI/API-2025.02',
  },
  {
    id: 'iot-meteorologico',
    tabLabel: 'IoT Meteorológico',
    title: 'Sistema IoT de Monitoramento Meteorológico',
    badges: [
      { kind: 'academic', label: 'Projeto Acadêmico' },
      { kind: 'partner', label: 'Parceria FATEC' },
      { kind: 'period', label: '2025.01' },
    ],
    leadership: {
      role: 'Product Owner',
      summary: 'Priorização e validação iterativa com o parceiro',
    },
    meta: [
      { label: 'Semestre', value: '4º – 2025.01' },
      { label: 'Parceiro', value: 'Tecsus' },
      { label: 'Status', value: 'Concluído' },
    ],
    context:
      'Projeto acadêmico em parceria com a Tecsus. O cliente precisava de uma plataforma para ' +
      'gerenciar estações meteorológicas remotas, com coleta de dados ambientais em tempo real e ' +
      'alertas críticos de baixa latência para eventos climáticos extremos.',
    sections: [
      {
        title: 'Atuação como Product Owner',
        bullets: [
          <>Construí e refinei backlog com <strong>mais de 40 histórias de usuário</strong></>,
          <>Priorizei requisito crítico: alertas em <strong>menos de 5 segundos</strong> após detecção</>,
          <>Mantive alinhamento constante com o parceiro sobre escopo e expectativas</>,
          <>Traduzi requisitos técnicos complexos (MQTT, processamento em tempo real) em backlog viável</>,
          <>Validei protótipos iterativamente com stakeholders técnicos</>,
        ],
      },
      {
        title: 'Funcionalidades entregues',
        bullets: [
          <>Dashboard web interativo</>,
          <>Mapas de calor</>,
          <>Alertas por e-mail e SMS</>,
          <>Integração com sensores usando MQTT</>,
          <>Histórico e gráficos</>,
        ],
      },
    ],
    tech: ['Node.js', 'Express', 'React.js', 'Chart.js', 'MongoDB', 'MQTT', 'Docker'],
    repoUrl: 'https://github.com/TeamHiveAPI/API-2025.01',
  },
  {
    id: 'portal-fapg',
    tabLabel: 'Portal FAPG',
    title: 'Portal de Transparência – FAPG',
    badges: [
      { kind: 'academic', label: 'Projeto Acadêmico' },
      { kind: 'partner', label: 'Parceria FATEC' },
      { kind: 'period', label: '2024.02' },
    ],
    meta: [
      { label: 'Semestre', value: '2024.02' },
      { label: 'Parceiro', value: 'Fundação de Apoio à Pesquisa' },
      { label: 'Status', value: 'Concluído' },
    ],
    context:
      'Projeto acadêmico desenvolvido em parceria com a FAPG. A entrega consistiu na renovação do ' +
      'Portal de Transparência da Fundação, equilibrando usabilidade pública com controle administrativo ' +
      'interno.',
    sections: [
      {
        title: 'Atuação',
        paragraph:
          'Participei do desenvolvimento full-stack do sistema, contribuindo na compreensão dos ' +
          'requisitos de transparência institucional e na implementação de funcionalidades de gestão ' +
          'de projetos.',
      },
      {
        title: 'Funcionalidades entregues',
        bullets: [
          <>Sistema completo de cadastro e edição de projetos</>,
          <>Sistema de solicitações e aprovação</>,
          <>Upload e controle de versões de documentos</>,
          <>Filtros dinâmicos e interface responsiva</>,
        ],
      },
    ],
    tech: ['Java', 'Spring Boot', 'React.js', 'MySQL'],
    repoUrl: 'https://github.com/A-Sync-Fatec/api-fatec-3sem-24',
  },
  {
    id: 'internet-ocean',
    tabLabel: 'Internet Ocean',
    title: 'Internet Ocean – Sistema de Chamados',
    badges: [
      { kind: 'academic', label: 'Projeto Acadêmico' },
      { kind: 'partner', label: 'Parceria FATEC' },
      { kind: 'period', label: '2024.01' },
    ],
    meta: [
      { label: 'Semestre', value: '2024.01' },
      { label: 'Status', value: 'Concluído' },
    ],
    context:
      'Projeto acadêmico de um sistema para abertura, acompanhamento e resolução de chamados ' +
      'técnicos, com base de conhecimento integrada para ajudar usuários a resolverem problemas ' +
      'sozinhos.',
    sections: [
      {
        title: 'Atuação',
        paragraph:
          'Desenvolvimento full-stack do sistema, com foco na experiência de usuários técnicos e ' +
          'administradores.',
      },
      {
        title: 'Funcionalidades entregues',
        bullets: [
          <>Sistema de autenticação</>,
          <>Controle de status dos chamados</>,
          <>FAQ com busca</>,
          <>Dashboard para administradores</>,
        ],
      },
    ],
    tech: ['Node.js', 'Express', 'React.js', 'MySQL'],
    repoUrl: 'https://github.com/CoddingWarriors/Api_CoddingWarriors',
  },
  {
    id: 'pixels',
    tabLabel: 'Projeto Pixels',
    title: 'Projeto Pixels – Plataforma para Famílias',
    badges: [
      { kind: 'academic', label: 'Projeto Acadêmico' },
      { kind: 'partner', label: 'Parceria FATEC' },
      { kind: 'period', label: '2023.02' },
    ],
    leadership: {
      role: 'Product Owner',
      summary: 'Primeira atuação em gestão de produto',
    },
    meta: [
      { label: 'Semestre', value: '2023.02' },
      { label: 'Parceiro', value: 'Grupo de Mães' },
      { label: 'Status', value: 'Concluído' },
    ],
    context:
      'Projeto acadêmico em parceria com um grupo de mães. Plataforma educativa com blog, fórum e ' +
      'recursos voltados a famílias de crianças com Insuficiência Renal Crônica.',
    sections: [
      {
        title: 'Atuação como Product Owner',
        paragraph:
          'Primeira experiência como Product Owner. Conduzi o levantamento de requisitos com o ' +
          'grupo parceiro, organizei e gerenciei o backlog e validei a usabilidade da plataforma ' +
          'com o público-alvo. Também desenvolvi o sistema de autenticação.',
      },
      {
        title: 'Funcionalidades entregues',
        bullets: [
          <>Blog educativo</>,
          <>Fórum de discussão</>,
          <>Sistema de autenticação</>,
          <>Área administrativa</>,
        ],
      },
    ],
    tech: ['Python', 'Flask', 'HTML/CSS', 'MySQL', 'Figma'],
    repoUrl: 'https://github.com/Daiene/Pixels',
  },
];
