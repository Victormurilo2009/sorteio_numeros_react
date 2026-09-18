import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles';

export default function AreaSorteio({ numeroSorteado, ultimoNumero }) {
  return (
    <View style={styles.areaSorteio}>
      <View
        style={styles.visorNumero}
        accessible
        accessibilityLabel={`Número sorteado: ${numeroSorteado ?? 'ainda não sorteado'}`}
      >
        <Text style={styles.rotuloVisor}>NÚMERO SORTEADO</Text>
        <Text style={styles.numeroSorteado}>{numeroSorteado ?? '?'}</Text>
      </View>

      <Text style={styles.ultimoNumero}>
        Último número sorteado: {ultimoNumero ?? '--'}
      </Text>
    </View>
  );
}