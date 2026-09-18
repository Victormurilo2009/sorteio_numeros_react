import React, { useRef, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useWindowDimensions,
  View,
} from 'react-native';

import Cabecalho from './src/components/Cabecalho';
import AreaSorteio from './src/components/AreaSorteio';
import FormularioJogo from './src/components/FormularioJogo';
import Placar from './src/components/Placar';
import ResultadoFinal from './src/components/ResultadoFinal';
import styles from './src/styles';

const TOTAL_RODADAS = 5;
const PONTUACAO_MAXIMA = TOTAL_RODADAS * 100;

function sortearNumero() {
  return Math.floor(Math.random() * 100);
}

function calcularPontuacao(numeroEscolhido, numeroGerado) {
  return 100 - Math.abs(numeroEscolhido - numeroGerado);
}

function obterMensagemFinal(pontuacao) {
  if (pontuacao === 500) return 'Perfeito! Você acertou todos!';
  if (pontuacao >= 400) return 'Quase perfeito!';
  if (pontuacao >= 300) return 'Excelente!';
  if (pontuacao >= 200) return 'Muito bem!';
  if (pontuacao >= 100) return 'Bom começo!';
  return 'Continue tentando!';
}

export default function App() {
  const { width } = useWindowDimensions();
  const compacto = width < 520;

  const [rodadaAtual, setRodadaAtual] = useState(1);
  const [pontuacaoTotal, setPontuacaoTotal] = useState(0);
  const [numeroEscolhido, setNumeroEscolhido] = useState('');
  const [numeroSorteado, setNumeroSorteado] = useState(null);
  const [ultimoNumero, setUltimoNumero] = useState(null);
  const [pontosRodada, setPontosRodada] = useState(null);
  const [mensagemValidacao, setMensagemValidacao] = useState('');
  const [mensagemResultado, setMensagemResultado] = useState(
    'Escolha um número para começar.'
  );
  const [acertou, setAcertou] = useState(false);
  const [jogoFinalizado, setJogoFinalizado] = useState(false);
  const [mensagemFinal, setMensagemFinal] = useState('');

  const inputRef = useRef(null);

  function validarEntrada() {
    if (numeroEscolhido.trim() === '') {
      return {
        valido: false,
        mensagem: 'Informe um número entre 0 e 99.',
      };
    }

    const numero = Number(numeroEscolhido);
    const inteiroValido =
      Number.isInteger(numero) && numero >= 0 && numero <= 99;

    if (!inteiroValido) {
      return {
        valido: false,
        mensagem: 'Use apenas números inteiros de 0 a 99.',
      };
    }

    return { valido: true, numero };
  }

  function realizarRodada() {
    if (jogoFinalizado) return;

    Keyboard.dismiss();

    const entrada = validarEntrada();

    if (!entrada.valido) {
      setMensagemValidacao(entrada.mensagem);
      setMensagemResultado('');
      inputRef.current?.focus();
      return;
    }

    const sorteado = sortearNumero();
    const pontos = calcularPontuacao(entrada.numero, sorteado);
    const novoTotal = Math.min(
      PONTUACAO_MAXIMA,
      pontuacaoTotal + pontos
    );
    const foiAcerto = entrada.numero === sorteado;

    setMensagemValidacao('');
    setNumeroSorteado(sorteado);
    setUltimoNumero(sorteado);
    setPontosRodada(pontos);
    setPontuacaoTotal(novoTotal);
    setAcertou(foiAcerto);

    if (foiAcerto) {
      setMensagemResultado(`Acertou! Você fez ${pontos} pontos!`);
    } else {
      setMensagemResultado(
        `Você escolheu: ${entrada.numero}. Número sorteado: ${sorteado}. Você fez ${pontos} pontos!`
      );
    }

    if (rodadaAtual === TOTAL_RODADAS) {
      setJogoFinalizado(true);
      setMensagemFinal(obterMensagemFinal(novoTotal));
      return;
    }

    setRodadaAtual((rodada) => rodada + 1);
    setNumeroEscolhido('');

    setTimeout(() => {
      inputRef.current?.focus();
    }, 150);
  }

  function reiniciarJogo() {
    setRodadaAtual(1);
    setPontuacaoTotal(0);
    setNumeroEscolhido('');
    setNumeroSorteado(null);
    setUltimoNumero(null);
    setPontosRodada(null);
    setMensagemValidacao('');
    setMensagemResultado('Escolha um número para começar.');
    setAcertou(false);
    setJogoFinalizado(false);
    setMensagemFinal('');

    setTimeout(() => {
      inputRef.current?.focus();
    }, 150);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#9de3d8" />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Cabecalho />

        <ScrollView
          style={styles.flex}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.jogo}>
            <Cabecalho.Rodada
              rodadaAtual={rodadaAtual}
              totalRodadas={TOTAL_RODADAS}
              jogoFinalizado={jogoFinalizado}
            />

            <AreaSorteio
              numeroSorteado={numeroSorteado}
              ultimoNumero={ultimoNumero}
            />

            <FormularioJogo
              inputRef={inputRef}
              numeroEscolhido={numeroEscolhido}
              aoAlterarNumero={setNumeroEscolhido}
              aoSortear={realizarRodada}
              mensagemValidacao={mensagemValidacao}
              desabilitado={jogoFinalizado}
              compacto={compacto}
            />

            <Placar
              pontosRodada={pontosRodada}
              pontuacaoTotal={pontuacaoTotal}
              pontuacaoMaxima={PONTUACAO_MAXIMA}
              compacto={compacto}
            />

            <FormularioJogo.MensagemResultado
              mensagem={mensagemResultado}
              acertou={acertou}
            />

            {jogoFinalizado && (
              <ResultadoFinal
                pontuacaoTotal={pontuacaoTotal}
                pontuacaoMaxima={PONTUACAO_MAXIMA}
                mensagemFinal={mensagemFinal}
                aoReiniciar={reiniciarJogo}
              />
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}