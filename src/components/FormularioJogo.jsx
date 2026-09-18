import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import styles from '../styles';

function FormularioJogo({
  inputRef,
  numeroEscolhido,
  aoAlterarNumero,
  aoSortear,
  mensagemValidacao,
  desabilitado,
  compacto,
}) {
  function tratarTexto(texto) {
    const somenteNumeros = texto.replace(/[^0-9]/g, '').slice(0, 2);
    aoAlterarNumero(somenteNumeros);
  }

  return (
    <View style={styles.formulario}>
      <Text style={styles.label}>Qual número será sorteado?</Text>

      <View style={[styles.campoAcao, compacto && styles.campoAcaoCompacto]}>
        <TextInput
          ref={inputRef}
          style={[styles.input, compacto && styles.inputCompacto]}
          value={numeroEscolhido}
          onChangeText={tratarTexto}
          placeholder="Digite um número de 0 a 99"
          placeholderTextColor="#789298"
          keyboardType="number-pad"
          maxLength={2}
          editable={!desabilitado}
          returnKeyType="done"
          onSubmitEditing={aoSortear}
          accessibilityLabel="Número escolhido"
        />

        <Pressable
          onPress={aoSortear}
          disabled={desabilitado}
          accessibilityRole="button"
          accessibilityLabel="Sortear número"
          style={({ pressed }) => [
            styles.botao,
            compacto && styles.botaoCompacto,
            pressed && !desabilitado && styles.botaoPressionado,
            desabilitado && styles.botaoDesabilitado,
          ]}
        >
          <Text style={styles.botaoTexto}>Sortear Número</Text>
        </Pressable>
      </View>

      <Text style={styles.mensagemErro}>{mensagemValidacao}</Text>
    </View>
  );
}

function MensagemResultado({ mensagem, acertou }) {
  return (
    <Text
      style={[
        styles.mensagemResultado,
        acertou && styles.mensagemResultadoAcerto,
      ]}
      accessibilityLiveRegion="polite"
    >
      {mensagem}
    </Text>
  );
}

FormularioJogo.MensagemResultado = MensagemResultado;

export default FormularioJogo;