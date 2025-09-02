# Desafio React Quest

Este projeto foi desenvolvido como resposta ao **Desafio React Quest**, implementando dois componentes React conforme especificado no desafio.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utilitário
- **JavaScript (JSX)** - Linguagem de programação

## 📋 Desafios Implementados

### Desafio 1: Componente ColoredText
Componente que colore e transforma um texto para maiúsculo utilizando JavaScript.

**Características:**
- Recebe props `text` e `color`
- Converte texto para maiúsculas usando `.toUpperCase()`
- Aplica cor via style inline
- Suporta cores por nome ("red", "green") e hexadecimal ("#2563eb")

**Uso:**
```jsx
<ColoredText text="Olá mundo!" color="red" />
<ColoredText text="React é incrível" color="#2563eb" />
```

### Desafio 2: Componente AlertButton
Componente Button com evento de clique que apresenta um alerta informando a label do botão.

**Características:**
- Recebe prop `label`
- Evento onClick que exibe alert
- Mensagem: "A label desse botão é [label]"
- Estilização com Tailwind CSS

**Uso:**
```jsx
<AlertButton label="Baixar CV" />
<AlertButton label="Enviar Mensagem" />
```

## 🛠️ Estrutura do Projeto

```
desafio-react-quest/
├── public/
├── src/
│   ├── components/
│   │   ├── ColoredText.jsx    # Desafio 1
│   │   └── AlertButton.jsx    # Desafio 2
│   ├── App.jsx               # Componente principal
│   ├── App.css              # Estilos globais
│   └── main.jsx             # Ponto de entrada
├── .gitignore               # Arquivos ignorados pelo Git
├── package.json             # Dependências do projeto
└── README.md               # Este arquivo
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou pnpm

### Instalação e Execução

1. **Clone o repositório:**
```bash
git clone <url-do-repositorio>
cd desafio-react-quest
```

2. **Instale as dependências:**
```bash
npm install
# ou
pnpm install
```

3. **Execute o projeto em modo de desenvolvimento:**
```bash
npm run dev
# ou
pnpm run dev
```

4. **Acesse no navegador:**
```
http://localhost:5173
```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter

## 📱 Funcionalidades

- ✅ Interface responsiva e moderna
- ✅ Componentes reutilizáveis e bem documentados
- ✅ Props tipadas e bem definidas
- ✅ Código limpo e organizado
- ✅ Exemplos práticos de uso
- ✅ Design profissional com Tailwind CSS

## 🎯 Requisitos Atendidos

### Desafio 1 - ColoredText
- ✅ Bom nome para o componente
- ✅ Renderiza parágrafo colorido
- ✅ Todas as letras maiúsculas usando JS
- ✅ Props para texto e cor
- ✅ Style inline para colorir

### Desafio 2 - AlertButton  
- ✅ Componente Button funcional
- ✅ Evento de clique implementado
- ✅ Alert com mensagem correta
- ✅ Prop label funcionando

### Extras Implementados
- ✅ Projeto criado com Vite
- ✅ Arquivo .gitignore incluído
- ✅ Interface demonstrativa completa
- ✅ Documentação técnica
- ✅ Múltiplos exemplos de uso

## 👨‍💻 Desenvolvedor

Projeto desenvolvido seguindo as melhores práticas de desenvolvimento React, com código limpo, componentes reutilizáveis e interface profissional.

---

**Nota:** Este projeto atende completamente aos requisitos do Desafio React Quest, implementando ambos os componentes solicitados com funcionalidades extras para uma melhor experiência do usuário.

