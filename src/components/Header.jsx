import styles from "./Header.module.css";

function Header() {
    return (
      <header>
        <nav className={styles.menuNav}>
      <span 
        className={styles.itemNavHome}>
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12946aba-4b7a-4624-a336-83dd8afa874d/dg8ol7a-4a7f7eba-1fc1-4bc4-b5b6-36d74aeeb3ff.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEyOTQ2YWJhLTRiN2EtNDYyNC1hMzM2LTgzZGQ4YWZhODc0ZFwvZGc4b2w3YS00YTdmN2ViYS0xZmMxLTRiYzQtYjViNi0zNmQ3NGFlZWIzZmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Elj4lj7JyQQ8rOdZeEh4hnmvcAXvEs2vly0vBPgJExY" alt="" />
        E Corp
      </span>

      <a className={styles.itemNav}>Produtos</a>
      <a className={styles.itemNav}>Serviços</a>      
      <a className={styles.itemNav}>Sobre nós</a>    
      <a className={styles.itemNav}>Contatos</a>    
      <a className={`${styles.itemNav} ${styles.itemNavToggle}`}>X</a>

    </nav>
      </header>
    )
  }

export default Header;