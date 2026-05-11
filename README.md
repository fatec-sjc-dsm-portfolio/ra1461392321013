# Portfólio · Diogo Palharini

Portfólio profissional de **Diogo Palharini** — Product Owner Técnico, Desenvolvedor Full-Stack e Sócio.

Entrega acadêmica (PPC) do curso de **Desenvolvimento de Software Multiplataforma (DSM)** da **FATEC São José dos Campos**.

---

## Sobre o projeto

Single-page application em React + TypeScript que apresenta minha trajetória profissional, projetos e competências. O foco é comunicar minha atuação como Product Owner com base técnica full-stack, e o trabalho atual à frente da plataforma **Integra Rural**.

### Estrutura

O portfólio tem três seções principais e um rodapé:

1. **Sobre** — apresentação, posicionamento profissional e foto.
2. **Projetos** — sistema de abas com:
   - **Integra Rural** (atual, atuação profissional)
   - 5 projetos acadêmicos em parceria com a FATEC (Exército Brasileiro, Tecsus, FAPG, Internet Ocean, Pixels)
3. **Competências** — dois blocos:
   - Produto, Estratégia e Liderança
   - Stack Técnica
4. **Rodapé** — contatos (GitHub, LinkedIn, Instagram, E-mail).

---

## Stack

- React 18 + TypeScript
- React Router (estrutura de rotas)
- Styled Components (estilos do shell da aplicação)
- CSS modular (estilos por componente)
- React Icons (instalado localmente via npm)

---

## Conformidade FATEC / DSM

- ✅ Processamento totalmente client-side
- ✅ Sem chamadas a APIs externas ou backend
- ✅ Sem dependências via CDN (fontes, ícones e libs são locais)
- ✅ Tipografia via system font stack (sem Google Fonts)
- ✅ Foto pessoal na seção de apresentação
- ✅ Estrutura em 3 seções principais

---

## Como executar localmente

### Pré-requisitos

- Node.js 16+
- npm 8+

### Passos

```bash
# 1. Clonar o repositório
git clone https://github.com/fatec-sjc-dsm-portfolio/ra1461392321013.git
cd ra1461392321013

# 2. Instalar dependências
npm install

# 3. Rodar em modo de desenvolvimento
npm start
```

A aplicação abre em `http://localhost:3000`.

### Build de produção

```bash
npm run build
```

Os arquivos otimizados ficam em `build/`.

---

## Estrutura de pastas

```
src/
├── components/
│   ├── Header.tsx          # Navegação fixa no topo
│   ├── Footer.tsx          # Rodapé com contatos
│   └── ProjectTabs.tsx     # Sistema de abas dos projetos
├── pages/
│   └── home.tsx            # Página principal (3 seções)
├── styles/
│   ├── Header.css
│   ├── Footer.css
│   ├── Home.css
│   └── ProjectTabs.css
├── img/
│   └── DiogoPalharini.png
├── App.tsx                 # Shell da aplicação
└── index.tsx               # Ponto de entrada
```

---

## Contato

- **GitHub:** [DiogoPalharini](https://github.com/DiogoPalharini)
- **LinkedIn:** [diogo-palharini](https://www.linkedin.com/in/diogo-palharini-10b803275/)
- **E-mail:** diogo.palharini@gmail.com
