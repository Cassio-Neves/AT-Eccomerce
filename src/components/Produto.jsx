import styles from './Produto.module.css';
import Galeria from './Galeria';
import { BaseButton } from './assets/Componentes';


export default function Produto(prop) {

    return (
      <>
        <div>
          <h3 className={styles.cabecalhoProduto} >{prop.produto.nome}</h3>

          <Galeria imagens={prop.produto.imagens} />
          <h3>Descrição</h3>
          <p className={styles.descricaoProduto}>{prop.produto.descricao}</p>

          <div className={styles.painelCompra}>
            <p>Avaliação: {prop.produto.nota} / 5.0</p>
            <p className={styles.estiloPreco}>Preço: R$ {prop.produto.preco}</p>
            <BaseButton type='sucesso'>Comprar</BaseButton>
          </div>
        </div>
      </>
    )
  }