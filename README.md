# 📱 Desafio Técnico - Feed de Vídeos Estilo TikTok

Uma aplicação mobile desenvolvida em **React Native** que simula um feed de vídeos no estilo TikTok, com rolagem vertical, reprodução automática, animações e scroll infinito.

---

## 📋 Descrição do Desafio

**Objetivo:** Criar um feed de vídeos onde o usuário pode rolar verticalmente, visualizando um vídeo por vez, com reprodução automática e pausa dos demais.

---

## ✅ Funcionalidades Implementadas

### Requisitos Obrigatórios

- ✅ Rolagem vertical estilo TikTok (1 vídeo por tela)
- ✅ Reprodução automática ao tornar o vídeo visível
- ✅ Pausa automática dos vídeos fora de foco
- ✅ Indicador de carregamento enquanto o vídeo carrega
- ✅ Suporte a Android e iOS

### Requisitos Bônus

- ✅ Botão de “like” animado no canto inferior direito
- ✅ Persistência dos likes com `AsyncStorage`
- ✅ Scroll infinito com paginação falsa (simulação de carregamento)

### Extras 

- ✅ Tela de loading
- ✅ Double-tap para dar like

---

## 🧱 Tecnologias Utilizadas

- **React Native**
- **FlashList** (FlatList otimizada)
- **react-native-video**
- **AsyncStorage**
- **React Native Reanimated**
- **TypeScript (opcional)**

---

## 🚀 Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/feed-tiktok-react-native.git
cd feed-tiktok-react-native
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn
```

### 3. Execute a aplicação

```bash
npx react-native run-android
# ou
npx react-native run-ios
```

---

## 📁 Estrutura de Pastas

```bash
src/
├── assets/          # Imagens, ícones e mídias
├── commons/         # Componentes reutilizáveis (ex: CustomVideo, LikeButton)
├── enums/           # Definições fixas e constantes
├── hooks/           # Hooks customizados
├── navigations/     # Configurações de navegação
├── scenes/          # Telas principais da aplicação (ex: Main)
├── styles/          # Cores, temas e estilos globais
├── utils/           # Funções utilitárias (ex: svg, storage)
```

---

## 🧪 Detalhes Técnicos

- A lista de vídeos é gerenciada via `FlashList`, por ter melhor performance, com `viewabilityConfigCallbackPairs` para identificar o vídeo visível.
- Cada vídeo é pausado/reproduzido com base no `currentIndex` visível no feed.
- Os likes são armazenados em `AsyncStorage` e aplicados de forma animada com toque duplo ou botão.
- Scroll infinito simulado com carregamento falso para novos vídeos.
- Tempo gasto: Aproximadamente 6 horas de desenvolvimento e 2 horas de revisão

