import styles from "./ProdutosRelacionados.module.css"

export default function ProdutosRelacionados({produtos}) {

    return (
      <>
        <h3>Produtos Relacionados</h3>
         { produtos.map(prod => (
          <div className={styles.Prod}>
            <h2>{prod.nome}</h2>
            <img src={prod.photo} alt={prod.nome} />
            <p>Preço: {prod.preco}</p>
          </div>
        ))}

      </>
    )
  }