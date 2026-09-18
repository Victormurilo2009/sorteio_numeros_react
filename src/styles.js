import { Platform, StyleSheet } from 'react-native';

const serif = Platform.select({
  ios: 'Georgia',
  android: 'serif',
  default: 'serif',
});

const sans = Platform.select({
  ios: 'Trebuchet MS',
  android: 'sans-serif',
  default: 'sans-serif',
});

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
    backgroundColor: '#eaf5f1',
  },

  cabecalhoFixo: {
    width: '100%',
    backgroundColor: '#9de3d8',
    paddingVertical: 18,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tituloJogo: {
    color: '#102a43',
    fontFamily: serif,
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },

  jogo: {
    width: '100%',
    maxWidth: 680,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(16, 42, 67, 0.08)',
    padding: 24,
    shadowColor: '#102a43',
    shadowOpacity: 0.14,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
  },

  rodadaContainer: {
    alignSelf: 'center',
    backgroundColor: '#d9f3ed',
    borderRadius: 999,
    paddingVertical: 7,
    paddingHorizontal: 15,
  },

  rodadaTexto: {
    color: '#102a43',
    fontFamily: sans,
    fontWeight: '700',
    fontSize: 14,
  },

  areaSorteio: {
    alignItems: 'center',
    marginVertical: 30,
  },

  visorNumero: {
    width: 210,
    height: 210,
    borderRadius: 105,
    backgroundColor: '#102a43',
    borderWidth: 9,
    borderColor: '#2cc9b4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rotuloVisor: {
    color: '#ffffff',
    fontFamily: sans,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },

  numeroSorteado: {
    marginTop: 3,
    color: '#ffffff',
    fontFamily: sans,
    fontSize: 82,
    fontWeight: '700',
    lineHeight: 88,
  },

  ultimoNumero: {
    marginTop: 22,
    color: '#547085',
    fontFamily: serif,
    fontSize: 15,
    textAlign: 'center',
  },

  formulario: {
    marginTop: 8,
  },

  label: {
    marginBottom: 10,
    color: '#18334c',
    fontFamily: sans,
    fontWeight: '700',
    fontSize: 16,
  },

  campoAcao: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 10,
  },

  campoAcaoCompacto: {
    flexDirection: 'column',
  },

  input: {
    flex: 1,
    minWidth: 0,
    minHeight: 52,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#18334c',
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#b9d4cf',
    borderRadius: 7,
    textAlign: 'center',
    fontFamily: serif,
    fontSize: 16,
  },

  inputCompacto: {
    width: '100%',
  },

  botao: {
    minHeight: 52,
    paddingHorizontal: 18,
    paddingVertical: 14,
    backgroundColor: '#9de3d8',
    borderRadius: 7,
    borderBottomWidth: 4,
    borderBottomColor: '#2cc9b4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoCompacto: {
    width: '100%',
  },

  botaoPressionado: {
    transform: [{ translateY: 2 }],
    borderBottomWidth: 2,
    opacity: 0.9,
  },

  botaoDesabilitado: {
    opacity: 0.55,
  },

  botaoTexto: {
    color: '#102a43',
    fontFamily: sans,
    fontWeight: '700',
    fontSize: 15,
    textAlign: 'center',
  },

  mensagemErro: {
    minHeight: 22,
    marginTop: 9,
    color: '#b33b2e',
    fontFamily: sans,
    fontSize: 14,
    textAlign: 'center',
  },

  placar: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 18,
  },

  placarCompacto: {
    flexDirection: 'column',
  },

  pontoCard: {
    flex: 1,
    backgroundColor: '#edf8f5',
    borderLeftWidth: 5,
    borderLeftColor: '#2cc9b4',
    padding: 18,
  },

  pontoCardCompacto: {
    width: '100%',
  },

  pontoTotal: {
    borderLeftColor: '#9de3d8',
  },

  pontoRotulo: {
    color: '#547085',
    fontFamily: sans,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.7,
  },

  pontoValor: {
    marginTop: 5,
    color: '#102a43',
    fontFamily: sans,
    fontSize: 30,
    fontWeight: '700',
  },

  pontoMaximo: {
    fontSize: 14,
    fontWeight: '600',
  },

  mensagemResultado: {
    minHeight: 24,
    marginTop: 14,
    color: '#102a43',
    fontFamily: serif,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },

  mensagemResultadoAcerto: {
    color: '#087f6c',
  },

  resultadoFinal: {
    marginTop: 28,
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#102a43',
    borderRadius: 9,
  },

  sobretituloFinal: {
    color: '#9de3d8',
    fontFamily: sans,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },

  tituloFinal: {
    marginTop: 5,
    color: '#ffffff',
    fontFamily: serif,
    fontSize: 30,
    fontWeight: '700',
  },

  pontuacaoFinalRotulo: {
    marginTop: 17,
    color: '#dcecf2',
    fontFamily: serif,
    fontSize: 16,
  },

  pontuacaoFinalValor: {
    marginTop: 4,
    color: '#2cc9b4',
    fontFamily: sans,
    fontSize: 34,
    fontWeight: '700',
  },

  mensagemFinal: {
    marginTop: 15,
    marginBottom: 22,
    color: '#ffffff',
    fontFamily: serif,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },

  botaoReiniciar: {
    alignSelf: 'stretch',
  },
});

export default styles;