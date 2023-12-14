import styles from "./VendedorInfo.module.css"

export default function VendedorInfo ({ vendedor}) {


    return (
      <>
        <div className={styles.InfoVendedor}>
        <h3>Informações do Vendedor</h3>
        <h4>Nome: {vendedor.nome}</h4>
        <span>Nota: {vendedor.nota}</span>
        <p>Contato: {vendedor.email}</p>
        <p>Telefone de Contato: {vendedor.telefone}</p>
        </div>
      </>
    );
  }