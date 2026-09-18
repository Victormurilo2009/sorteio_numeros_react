export default function Cabecalho({ rodadaAtual, totalRodadas, jogoFinalizado }) {
  return (
    <header className="cabecalho">
      <h1 id="titulo-jogo">Jogo dos Números</h1>
      <p className="rodada" aria-live="polite">
        {jogoFinalizado ? 'Jogo concluído' : `Rodada ${rodadaAtual} de ${totalRodadas}`}
      </p>
    </header>
  )
}
