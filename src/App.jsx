import { useRef, useState } from 'react'
import Cabecalho from './components/Cabecalho.jsx'
import Placar from './components/Placar.jsx'
import ResultadoFinal from './components/ResultadoFinal.jsx'

const TOTAL_RODADAS = 5
const PONTUACAO_MAXIMA = TOTAL_RODADAS * 100

function sortearNumero() {
  return Math.floor(Math.random() * 100)
}

function calcularPontuacao(numeroEscolhido, numeroGerado) {
  return 100 - Math.abs(numeroEscolhido - numeroGerado)
}

function obterMensagemFinal(pontuacao) {
  if (pontuacao === 500) return 'Perfeito! Você acertou todos!'
  if (pontuacao >= 400) return 'Quase perfeito!'
  if (pontuacao >= 300) return 'Excelente!'
  if (pontuacao >= 200) return 'Muito bem!'
  if (pontuacao >= 100) return 'Bom começo!'
  return 'Continue tentando!'
}

export default function App() {
  const [rodadaAtual, setRodadaAtual] = useState(1)
  const [pontuacaoTotal, setPontuacaoTotal] = useState(0)
  const [numeroEscolhido, setNumeroEscolhido] = useState('')
  const [numeroSorteado, setNumeroSorteado] = useState(null)
  const [ultimoNumero, setUltimoNumero] = useState(null)
  const [pontosRodada, setPontosRodada] = useState(null)
  const [mensagemValidacao, setMensagemValidacao] = useState('')
  const [mensagemResultado, setMensagemResultado] = useState('Escolha um número para começar.')
  const [acertou, setAcertou] = useState(false)
  const [jogoFinalizado, setJogoFinalizado] = useState(false)
  const [mensagemFinal, setMensagemFinal] = useState('')

  const inputRef = useRef(null)

  function validarEntrada() {
    if (numeroEscolhido.trim() === '') {
      return { valido: false, mensagem: 'Informe um número entre 0 e 99.' }
    }

    const numero = Number(numeroEscolhido)
    const inteiroValido = Number.isInteger(numero) && numero >= 0 && numero <= 99

    if (!inteiroValido) {
      return { valido: false, mensagem: 'Use apenas números inteiros de 0 a 99.' }
    }

    return { valido: true, numero }
  }

  function realizarRodada(evento) {
    evento.preventDefault()

    const entrada = validarEntrada()

    if (!entrada.valido) {
      setMensagemValidacao(entrada.mensagem)
      setMensagemResultado('')
      inputRef.current?.focus()
      return
    }

    const sorteado = sortearNumero()
    const pontos = calcularPontuacao(entrada.numero, sorteado)
    const novoTotal = Math.min(PONTUACAO_MAXIMA, pontuacaoTotal + pontos)
    const foiAcerto = entrada.numero === sorteado

    setMensagemValidacao('')
    setNumeroSorteado(sorteado)
    setUltimoNumero(sorteado)
    setPontosRodada(pontos)
    setPontuacaoTotal(novoTotal)
    setAcertou(foiAcerto)

    if (foiAcerto) {
      setMensagemResultado(`Acertou! Você fez ${pontos} pontos!`)
    } else {
      setMensagemResultado(
        `Você escolheu: ${entrada.numero}. Número sorteado: ${sorteado}. Você fez ${pontos} pontos!`,
      )
    }

    if (rodadaAtual === TOTAL_RODADAS) {
      setJogoFinalizado(true)
      setMensagemFinal(obterMensagemFinal(novoTotal))
      return
    }

    setRodadaAtual((rodada) => rodada + 1)
    setNumeroEscolhido('')
    requestAnimationFrame(() => inputRef.current?.focus())
  }

  function reiniciarJogo() {
    setRodadaAtual(1)
    setPontuacaoTotal(0)
    setNumeroEscolhido('')
    setNumeroSorteado(null)
    setUltimoNumero(null)
    setPontosRodada(null)
    setMensagemValidacao('')
    setMensagemResultado('Escolha um número para começar.')
    setAcertou(false)
    setJogoFinalizado(false)
    setMensagemFinal('')
    requestAnimationFrame(() => inputRef.current?.focus())
  }

  return (
    <main className="pagina">
      <section className="jogo" aria-labelledby="titulo-jogo">
        <Cabecalho
          rodadaAtual={rodadaAtual}
          totalRodadas={TOTAL_RODADAS}
          jogoFinalizado={jogoFinalizado}
        />

        <section className="area-sorteio" aria-labelledby="titulo-visor">
          <h2 id="titulo-visor" className="sr-only">Número sorteado</h2>
          <div className="visor-numero" aria-live="polite" aria-label="Número sorteado">
            <span className="rotulo-visor">Número sorteado</span>
            <strong id="numero-sorteado">{numeroSorteado ?? '?'}</strong>
          </div>
          <p className="ultimo-numero">
            Último número sorteado: {ultimoNumero ?? '--'}
          </p>
        </section>

        <form className="formulario" onSubmit={realizarRodada} noValidate>
          <label htmlFor="numero-escolhido">Qual número será sorteado?</label>
          <div className="campo-acao">
            <input
              ref={inputRef}
              id="numero-escolhido"
              name="numero-escolhido"
              type="number"
              inputMode="numeric"
              min="0"
              max="99"
              step="1"
              placeholder="Digite um número de 0 a 99"
              autoComplete="off"
              required
              disabled={jogoFinalizado}
              value={numeroEscolhido}
              onChange={(evento) => setNumeroEscolhido(evento.target.value)}
            />
            <button id="botao-sortear" type="submit" disabled={jogoFinalizado}>
              Sortear Número
            </button>
          </div>
          <p className="mensagem mensagem-erro" role="alert" aria-live="assertive">
            {mensagemValidacao}
          </p>
        </form>

        <Placar
          pontosRodada={pontosRodada}
          pontuacaoTotal={pontuacaoTotal}
          pontuacaoMaxima={PONTUACAO_MAXIMA}
        />

        <p className={`mensagem mensagem-resultado ${acertou ? 'acertou' : ''}`} aria-live="polite">
          {mensagemResultado}
        </p>

        {jogoFinalizado && (
          <ResultadoFinal
            pontuacaoTotal={pontuacaoTotal}
            pontuacaoMaxima={PONTUACAO_MAXIMA}
            mensagemFinal={mensagemFinal}
            aoReiniciar={reiniciarJogo}
          />
        )}
      </section>
    </main>
  )
}
