import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles';

export default function ResultadoFinal({
  pontuacaoTotal,
  pontuacaoMaxima,
  mensagemFinal,
  aoReiniciar,
}) {
  const [pressionado, setPressionado] = React.useState(false);

  return (
    <View style={styles.resultadoFinal} accessibilityLiveRegion="polite">
      <Text style={styles.sobretituloFinal}>PARTIDA CONCLUÍDA</Text>
      <Text style={styles.tituloFinal}>Fim de jogo!</Text>

      <Text style={styles.pontuacaoFinalRotulo}>Pontuação final:</Text>
      <Text style={styles.pontuacaoFinalValor}>
        {pontuacaoTotal} / {pontuacaoMaxima}
      </Text>

      <Text style={styles.mensagemFinal}>{mensagemFinal}</Text>

      <TouchableOpacity
        onPress={aoReiniciar}
        onPressIn={() => setPressionado(true)}
        onPressOut={() => setPressionado(false)}
        accessibilityRole="button"
        accessibilityLabel="Jogar novamente"
        activeOpacity={0.85}
        style={[
          styles.botao,
          styles.botaoReiniciar,
          pressionado && styles.botaoPressionado,
        ]}
      >
        <Text style={styles.botaoTexto}>Jogar Novamente</Text>
      </TouchableOpacity>
    </View>
  );
}