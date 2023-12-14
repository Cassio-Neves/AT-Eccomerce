import styles from "./Perguntas.module.css"
export default function Perguntas({ perguntas }) {
    return (
      <>
        <h3>Perguntas</h3>
        { perguntas.map(perg => (
          <div className={styles.Perguntas}>
            <p>{perg.nome}</p>
            <p>Data da Publicação: {perg.dataPublicacao}</p>
            <p>Pergunta: {perg.pergunta}</p>        
            <p>R: {perg.resposta ?? "Sem resposta."}</p>
          </div>
        ))}
      </>
    )
  }