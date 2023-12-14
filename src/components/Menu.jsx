import styles from "./Menu.module.css";
import InfoProduto from "./InfoProduto";

function Menu() {
  const produto1 = {
    info: {
      nome: "E-Phone",
      descricao: "Um smartphone avançado com ótima capacidade de processamento e câmera de alta resolução.",
      preco: 999.99, 
      nota: 5.0,
      imagens: [
        "https://images.pexels.com/photos/4386323/pexels-photo-4386323.jpeg",
        "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg",
        "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg",
        "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg"
      ],
    },
    vendedor: {
      nome: "Loja E-Corp",
      nota: 5.0,
      email: "E-Corp@E-corp.com",
      telefone: 552199999999
    },
    produtosRelacionados: [
      {nome: 'Laptop E', nota: 5.0, photo: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=600', preco: 1800.99},
      {nome: 'Fon-E', nota: 4.8, photo: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=400', preco: 499.90}
    ],
    comentarios: [
      { nome: "Raul", dataPublicacao: "01/12/2023", mensagem: "Ótimo smartphone, estou adorando!", nota: 5.0 },
      { nome: "Ana", dataPublicacao: "01/11/2023", mensagem: "Design elegante e processamento poderoso.", nota: 5.0 },
      { nome: "Lucas", dataPublicacao: "01/03/2023", mensagem: "Câmera perfeita!", nota: 5.0 },
      { nome: "Carlinhos", dataPublicacao: "12/12/2023", mensagem: "Rápido e eficiente, recomendo!", nota: 5.0 },
      { nome: "Pedro", dataPublicacao: "10/10/2023", mensagem: "Preço um pouco alto, mas vale a pena.", nota: 5.0 },
      { nome: "Isabela", dataPublicacao: "03/06/2023", mensagem: "Funcionalidades avançadas e interface simples! ", nota: 5.0 },
      { nome: "João", dataPublicacao: "23/04/2023", mensagem: "Leve e fácil de usar, estou satisfeito.", nota: 5.0},
      { nome: "Camila", dataPublicacao: "15/07/2023", mensagem: "Entrega rápida, produto em perfeitas condições.", nota: 5.0 },
      { nome: "Rafael", dataPublicacao: "07/01/2023", mensagem: "Atualizações matendo a segurança impecável", nota: 5.0 },
      { nome: "Juliana", dataPublicacao: "20/07/2023", mensagem: "Boa relação custo-benefício.", nota: 5.0 }
    ],
    perguntas: [
      {
        nome: "Fernanda", 
        dataPublicacao: "11/11/2023", 
        pergunta: "Qual é a capacidade da bateria?", 
        resposta: "A bateria tem uma capacidade de 4000mAh."
      },
      { nome: "Gabriel", dataPublicacao: "05/02/2023", pergunta: "Esse modelo suporta carregamento sem fio?"},
      { nome: "Mariana", dataPublicacao: "18/02/2023", pergunta: "É resistente à água?", resposta: "Sim, o smartphone possui certificação IP68, sendo resistente à água e poeira." },
      { nome: "Carlos", dataPublicacao: "10/03/2023", pergunta: "Quantos megapixels tem a câmera frontal?", resposta: "A câmera frontal tem 20 megapixels." },
      { nome: "Juliana", dataPublicacao: "25/03/2023", pergunta: "Vem com fones de ouvido na caixa?", resposta: "Sim, o produto inclui fones de ouvido na embalagem." },
      { nome: "Rafael", dataPublicacao: "12/04/2023", pergunta: "Posso expandir a memória com um cartão SD?", resposta: "Infelizmente, este modelo não suporta expansão de memória via cartão SD." },
      { nome: "Luiza", dataPublicacao: "05/05/2023", pergunta: "Qual é o sistema operacional pré-instalado?", resposta: "O smartphone vem com o sistema operacional Android 12 pré-instalado." },
      { nome: "Gustavo", dataPublicacao: "25/06/2023", pergunta: "Existem opções de cores disponíveis?", resposta: "Sim, oferecemos o smartphone nas cores preto, branco e azul." },
      { nome: "Isabela", dataPublicacao: "24/02/2023", pergunta: "O produto tem garantia?", resposta: "Sim, o smartphone possui garantia de 1 ano contra defeitos de fabricação." },
      { nome: "Thiago", dataPublicacao: "11/11/2023", pergunta: "Qual é o prazo de entrega para a minha região?", resposta: "O prazo de entrega varia de acordo com a sua localização, geralmente entre 5 a 7 dias úteis." }
    ]
  };
    return (
      <main>
        <InfoProduto produto={produto1}/>
      </main>
    )
  }

export default Menu;