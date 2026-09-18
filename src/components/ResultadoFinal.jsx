import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from '../styles';

export default function ResultadoFinal({
  pontuacaoTotal,
  pontuacaoMaxima,
  mensagemFinal,
  aoReiniciar,
}) {
  return (
    <View style={styles.resultadoFinal} accessibilityLiveRegion="polite">
      <Text style={styles.sobretituloFinal}>PARTIDA CONCLUÍDA</Text>
      <Text style={styles.tituloFinal}>Fim de jogo!</Text>

      <Text style={styles.pontuacaoFinalRotulo}>Pontuação final:</Text>
      <Text style={styles.pontuacaoFinalValor}>
        {pontuacaoTotal} / {pontuacaoMaxima}
      </Text>

      <Text style={styles.mensagemFinal}>{mensagemFinal}</Text>

      <Pressable
        onPress={aoReiniciar}
        accessibilityRole="button"
        accessibilityLabel="Jogar novamente"
        style={({ pressed }) => [
          styles.botao,
          styles.botaoReiniciar,
          pressed && styles.botaoPressionado,
        ]}
      >
        <Text style={styles.botaoTexto}>Jogar Novamente</Text>
      </Pressable>
    </View>
  );
}