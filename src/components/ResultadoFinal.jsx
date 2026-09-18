export default function ResultadoFinal({ pontuacaoTotal, pontuacaoMaxima, mensagemFinal, aoReiniciar }) {
  return (
    <section className="resultado-final" aria-live="polite">
      <p className="sobretitulo">Partida concluída</p>
      <h2>Fim de jogo!</h2>
      <p className="pontuacao-final">
        Pontuação final:
        <strong>{pontuacaoTotal} / {pontuacaoMaxima}</strong>
      </p>
      <p className="mensagem-final">{mensagemFinal}</p>
      <button id="botao-reiniciar" type="button" onClick={aoReiniciar}>
        Jogar Novamente
      </button>
    </section>
  )
}
