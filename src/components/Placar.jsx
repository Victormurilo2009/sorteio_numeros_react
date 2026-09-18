import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles';

export default function Placar({
  pontosRodada,
  pontuacaoTotal,
  pontuacaoMaxima,
  compacto,
}) {
  return (
    <View style={[styles.placar, compacto && styles.placarCompacto]}>
      <View style={[styles.pontoCard, compacto && styles.pontoCardCompacto]}>
        <Text style={styles.pontoRotulo}>PONTOS DA RODADA</Text>
        <Text style={styles.pontoValor}>{pontosRodada ?? '--'}</Text>
      </View>

      <View
        style={[
          styles.pontoCard,
          styles.pontoTotal,
          compacto && styles.pontoCardCompacto,
        ]}
      >
        <Text style={styles.pontoRotulo}>PONTUAÇÃO TOTAL</Text>
        <Text style={styles.pontoValor}>
          {pontuacaoTotal}
          <Text style={styles.pontoMaximo}> / {pontuacaoMaxima}</Text>
        </Text>
      </View>
    </View>
  );
}