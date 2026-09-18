export default function Placar({ pontosRodada, pontuacaoTotal, pontuacaoMaxima }) {
  return (
    <section className="placar" aria-label="Placar da partida">
      <article className="ponto-card">
        <span>Pontos da rodada</span>
        <strong>{pontosRodada ?? '--'}</strong>
      </article>

      <article className="ponto-card ponto-total">
        <span>Pontuação total</span>
        <strong>
          {pontuacaoTotal}
          <small>/ {pontuacaoMaxima}</small>
        </strong>
      </article>
    </section>
  )
}
