import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles';

function Cabecalho() {
  return (
    <View style={styles.cabecalhoFixo}>
      <Text style={styles.tituloJogo}>Jogo dos Números</Text>
    </View>
  );
}

function Rodada({ rodadaAtual, totalRodadas, jogoFinalizado }) {
  return (
    <View style={styles.rodadaContainer}>
      <Text style={styles.rodadaTexto}>
        {jogoFinalizado
          ? 'Jogo concluído'
          : `Rodada ${rodadaAtual} de ${totalRodadas}`}
      </Text>
    </View>
  );
}

Cabecalho.Rodada = Rodada;

export default Cabecalho;