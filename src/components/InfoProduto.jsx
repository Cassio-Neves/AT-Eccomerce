import styles from "./InfoProduto.module.css";
import Produto from "../components/Produto";
import VendedorInfo from '../components/VendedorInfo';
import ProdutosRelacionados from '../components/ProdutosRelacionados';
import Comentarios from '../components/Comentarios';
import Perguntas from '../components/Perguntas';



export default function InfoProduto({produto}) {


  return (
    <>
      <Produto produto={produto.info} />
      <VendedorInfo vendedor={produto.vendedor} />
      <Comentarios comentarios={produto.comentarios} />
      <Perguntas perguntas={produto.perguntas} />
      <ProdutosRelacionados produtos={produto.produtosRelacionados} />
    </>
  )
}