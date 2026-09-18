# Sorteio de Números - React Native

Conversão do projeto original de sorteio de números para **React Native com Expo**.

## O que mudou

O projeto não usa mais tags HTML como `div`, `p`, `input` e `button`.
A interface agora usa componentes do React Native:

- `View`
- `ScrollView`
- `Text`
- `TextInput`
- `Pressable`
- `SafeAreaView`
- `StyleSheet`

A lógica do jogo foi mantida: são 5 rodadas, o usuário escolhe um número de 0 a 99, o app sorteia um número e calcula a pontuação pela distância entre os valores.

## Estrutura

```text
Sorteio-Numeros-React-Native/
├── src/
│   ├── components/
│   │   ├── AreaSorteio.jsx
│   │   ├── Cabecalho.jsx
│   │   ├── FormularioJogo.jsx
│   │   ├── Placar.jsx
│   │   └── ResultadoFinal.jsx
│   └── styles.js
├── App.jsx
├── app.json
├── package.json
└── .gitignore
```

## Como rodar

No terminal da pasta do projeto:

```bash
npm install
npm start
```

Também é possível iniciar diretamente com:

```bash
npx expo start
```

### Android

```bash
npm run android
```

### Web para testar no navegador

```bash
npm run web
```

Mesmo na versão web, a interface continua escrita com componentes React Native através do React Native Web.

## Se estiver usando Codespaces

Não copie uma pasta `node_modules` criada no Windows para o Codespaces. Se ela já existir, remova e instale novamente:

```bash
rm -rf node_modules
npm install
npm start
```

Depois de testar, envie ao GitHub normalmente:

```bash
git add .
git commit -m "Converte projeto para React Native"
git push
```
