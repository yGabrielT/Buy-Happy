const commentPool = [
  "Produto excelente, superou minhas expectativas!",
  "Muito bom, recomendo a todos!",
  "Chegou rápido e em perfeito estado. Adorei!",
  "Qualidade impecável, vale cada centavo.",
  "Funciona perfeitamente, estou muito satisfeito.",
  "Um dos melhores que já comprei, ótimo custo-benefício.",
  "Design bonito e funcional. Perfeito para o dia a dia.",
  "Fácil de usar e configurar. Recomendo!",
  "Exatamente como na descrição, sem surpresas.",
  "Ótimo para presentear, quem recebeu amou!",
  "Entrega super rápida e produto de alta qualidade.",
  "Amei! Era exatamente o que eu procurava.",
  "Surpreendente! Não esperava tanta qualidade por esse preço.",
  "Indispensável para quem busca praticidade.",
  "Muito resistente e durável, estou impressionado.",
  "Melhor compra do ano, sem dúvidas!",
  "Atendimento ao cliente excelente e produto idem.",
  "Simplesmente perfeito, sem nenhum defeito.",
  "Recompraria mil vezes! Muito feliz com a aquisição.",
  "A cor é linda e o material de ótima qualidade.",
  "Compacto e eficiente, ideal para viagens.",
  "Fiquei impressionado com a durabilidade.",
  "Excelente para o trabalho e lazer.",
  "Superou todas as minhas expectativas de desempenho.",
  "Uma compra que realmente valeu a pena!",
  "Perfeito para quem busca algo prático e moderno.",
  "Adorei a facilidade de uso, muito intuitivo.",
  "Leve e fácil de transportar, muito conveniente.",
  "Funcionalidade ótima, atende a todas as necessidades.",
  "Preço justo pela qualidade oferecida.",
  "Estou muito feliz com a minha aquisição!",
  "Produto de alta performance, recomendo!",
  "Apresentação do produto impecável.",
  "Ótima experiência de compra.",
  "Chegou antes do prazo, excelente!",
  "Material de primeira linha, muito satisfeito.",
  "Fácil de integrar com outros dispositivos.",
  "Um item essencial para o dia a dia.",
  "Superou minhas expectativas em todos os aspectos."
];

function getRandomComments(min = 1, max = 3) {
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  const shuffled = [...commentPool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
const products = [
  {
    id: 1,
    nome: "Fone de Ouvido Bluetooth",
    categoria: "eletronicos",
    preco: 129.90,
    avaliacao: 4.5,
    totalAvaliacoes: 128,
    descricao: "Qualidade de som com graves reforçados e bateria de longa duração.",
    imagens: [
      "https://http2.mlstatic.com/D_NQ_NP_630478-MLU75210746968_032024-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_903650-MLU75210746966_032024-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_823094-MLU75210746967_032024-O.webp"
    ],
    comments: getRandomComments()
  },
  {
    id: 2,
    nome: "Mochila Antifurto",
    categoria: "acessorios",
    preco: 89.90,
    avaliacao: 4.8,
    totalAvaliacoes: 89,
    descricao: "Design moderno com zíper oculto e porta USB.",
    imagens: [
      "https://http2.mlstatic.com/D_NQ_NP_835618-MLU76709611585_052024-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_856652-MLU76709611586_052024-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_935088-MLU76709611588_052024-O.webp"
    ],
    comments: getRandomComments()
  },
  {
    id: 3,
    nome: "Garrafa Térmica 500ml",
    categoria: "acessorios",
    preco: 49.90,
    avaliacao: 4.4,
    totalAvaliacoes: 64,
    descricao: "Mantém sua bebida quente ou fria por até 12 horas.",
    imagens: [
      "https://http2.mlstatic.com/D_NQ_NP_788733-MLU75090081780_032024-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_837670-MLU75090081781_032024-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_817881-MLU75090081782_032024-O.webp"
    ],
    comments: getRandomComments()
  },
  {
    id: 4,
    nome: "Smartwatch Esportivo",
    categoria: "eletronicos",
    preco: 199.90,
    avaliacao: 4.9,
    totalAvaliacoes: 215,
    descricao: "GPS integrado, monitor cardíaco e diversos modos esportivos.",
    imagens: [
      "https://http2.mlstatic.com/D_NQ_NP_680913-MLA83069809714_032025-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_939955-MLA83069809715_032025-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_707872-MLA83069809716_032025-O.webp"
    ],
    comments: getRandomComments()
  },
  {
    id: 5,
    nome: "Power Bank 10000mAh",
    categoria: "eletronicos",
    preco: 79.90,
    avaliacao: 4.3,
    totalAvaliacoes: 178,
    descricao: "Carregamento rápido e entrada USB-C.",
    imagens: [
      "https://http2.mlstatic.com/D_NQ_NP_631928-MLB80495757708_112024-O.webp",
      "https://http2.mlstatic.com/D_NQ_N_NP_631928-MLB80495757708_112024-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_631928-MLB80495757708_112024-O.webp"
    ],
    comments: getRandomComments()
  },
  {
    id: 6,
    nome: "Caixa de Som Bluetooth 20W",
    categoria: "eletronicos",
    preco: 149.99,
    avaliacao: 4.4,
    totalAvaliacoes: 92,
    descricao: "Som potente com 20W RMS e bateria de 12 horas.",
    imagens: [
      "https://m.media-amazon.com/images/I/51FM1oa9nDL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/51ceBYH8tML._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61+E3v14jGL._AC_SX679_.jpg"
    ],
    comments: getRandomComments()
  },
  {
    id: 7,
    nome: "Teclado Sem Fio",
    categoria: "informatica",
    preco: 119.90,
    avaliacao: 4.2,
    totalAvaliacoes: 47,
    descricao: "Teclado ergonômico Bluetooth com baixa latência.",
    imagens: [
      "https://m.media-amazon.com/images/I/615TeBDThEL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61VnMOyQyOL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61KhbT5w7UL._AC_SX679_.jpg"
    ],
    comments: getRandomComments()
  },
  {
    id: 8,
    nome: "Mouse Gamer RGB",
    categoria: "informatica",
    preco: 69.90,
    avaliacao: 4.7,
    totalAvaliacoes: 156,
    descricao: "DPI ajustável até 6400 e iluminação RGB.",
    imagens: [
      "https://m.media-amazon.com/images/I/61saZHQI52L.__AC_SX300_SY300_QL70_ML2_.jpg",
      "https://m.media-amazon.com/images/I/61M0NDzz8rL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "https://m.media-amazon.com/images/I/61RDGuY0eOL.__AC_SX300_SY300_QL70_ML2_.jpg"
    ],
    comments: getRandomComments()
  },
  {
    id: 9,
    nome: "Carregador Sem Fio 15W",
    categoria: "eletronicos",
    preco: 59.90,
    avaliacao: 4.1,
    totalAvaliacoes: 83,
    descricao: "Carregamento rápido compatível com Qi.",
    imagens: [
      "https://m.media-amazon.com/images/I/51FM1oa9nDL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61JH1D+8t2L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/51ZNsXTc3TL._AC_SX679_.jpg"
    ],
    comments: getRandomComments()
  },
  {
    id: 10,
    nome: "Suporte para Notebook",
    categoria: "informatica",
    preco: 89.90,
    avaliacao: 4.3,
    totalAvaliacoes: 41,
    descricao: "Ergonômico e ajustável para notebooks até 17 polegadas.",
    imagens: [
      "https://m.media-amazon.com/images/I/61ZqTo-kwpL.__AC_SY300_SX300_QL70_ML2_.jpg",
      "https://m.media-amazon.com/images/I/61Uz7RVYkQL.__AC_SY300_SX300_QL70_ML2_.jpg",
      "https://m.media-amazon.com/images/I/618KYJlc3UL.__AC_SY300_SX300_QL70_ML2_.jpg"
    ],
    comments: getRandomComments()
  },
  {
    id: 11,
    nome: "HD Externo 1TB",
    categoria: "informatica",
    preco: 249.99,
    avaliacao: 4.9,
    totalAvaliacoes: 132,
    descricao: "Armazenamento portátil com USB 3.0.",
    imagens: [
      "https://m.media-amazon.com/images/I/81o5zJ+FcPL._AC_SY300_SX300_.jpg",
      "https://m.media-amazon.com/images/I/71hO6exdF3L._AC_SY300_SX300_.jpg",
      "https://m.media-amazon.com/images/I/81vCn5R9y4L._AC_SY300_SX300_.jpg"
    ],
    comments: getRandomComments()
  },
  {
    id: 12,
    nome: "Webcam Full HD 1080p",
    categoria: "informatica",
    preco: 139.90,
    avaliacao: 4.2,
    totalAvaliacoes: 76,
    descricao: "Resolução 1080p e microfone integrado.",
    imagens: [
      "https://m.media-amazon.com/images/I/41veQg4xGrL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/51Jhbm6pYgL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71vn6M16rHL._AC_SX679_.jpg"
    ],
    comments: getRandomComments()
  },
  {
    id: 13,
    nome: "Pulseira Esportiva Smartwatch",
    categoria: "acessorios",
    preco: 29.90,
    avaliacao: 4.4,
    totalAvaliacoes: 54,
    descricao: "Pulseira ajustável compatível com diversos relógios.",
    imagens: [
      "https://m.media-amazon.com/images/I/61co4OFuDIL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71M2HfVkoWL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71oB9S2U2EL._AC_SX679_.jpg"
    ],
    comments: getRandomComments()
  },
  {
    id: 14,
    nome: "Capa Protetora para Smartphone",
    categoria: "acessorios",
    preco: 39.90,
    avaliacao: 4.0,
    totalAvaliacoes: 58,
    descricao: "Proteção contra impactos, material resistente e toque emborrachado.",
    imagens: [
      "https://via.placeholder.com/600x400?text=Capa+Smartphone+1",
      "https://via.placeholder.com/160x120?text=Capa+Mini+1",
      "https://via.placeholder.com/160x120?text=Capa+Mini+2"
    ],
    comments: getRandomComments()
  },
  {
    id: 15,
    nome: "Carregador USB-C 30W",
    categoria: "eletronicos",
    preco: 79.90,
    avaliacao: 4.4,
    totalAvaliacoes: 204,
    descricao: "Carregamento rápido PD 30W para celulares e tablets.",
    imagens: [
      "https://via.placeholder.com/600x400?text=Carregador+30W+1",
      "https://via.placeholder.com/160x120?text=Carregador+Mini+1",
      "https://via.placeholder.com/160x120?text=Carregador+Mini+2"
    ],
    comments: getRandomComments()
  },
  {
    id: 16,
    nome: "Cabo Lightning MFi 1.5m",
    categoria: "acessorios",
    preco: 29.90,
    avaliacao: 4.1,
    totalAvaliacoes: 70,
    descricao: "Cabo certificado MFi para iPhone, durável e rápido.",
    imagens: [
      "https://via.placeholder.com/600x400?text=Cabo+Lightning+1",
      "https://via.placeholder.com/160x120?text=Cabo+Mini+1",
      "https://via.placeholder.com/160x120?text=Cabo+Mini+2"
    ],
    comments: getRandomComments()
  },
  {
    id: 17,
    nome: "Monitor 24'' Full HD",
    categoria: "informatica",
    preco: 699.00,
    avaliacao: 4.3,
    totalAvaliacoes: 190,
    descricao: "Monitor 24 polegadas, painel IPS e cores precisas.",
    imagens: [
      "https://via.placeholder.com/600x400?text=Monitor+24+1",
      "https://via.placeholder.com/160x120?text=Monitor+Mini+1",
      "https://via.placeholder.com/160x120?text=Monitor+Mini+2"
    ],
    comments: getRandomComments()
  },
  {
    id: 18,
    nome: "SSD NVMe 500GB",
    categoria: "informatica",
    preco: 349.90,
    avaliacao: 4.7,
    totalAvaliacoes: 412,
    descricao: "SSD NVMe com altas taxas de leitura e gravação para sistema e jogos.",
    imagens: [
      "https://via.placeholder.com/600x400?text=SSD+NVMe+500GB+1",
      "https://via.placeholder.com/160x120?text=SSD+Mini+1",
      "https://via.placeholder.com/160x120?text=SSD+Mini+2"
    ],
    comments: getRandomComments()
  },
  {
    id: 19,
    nome: "Cadeira Gamer Ergonomica",
    categoria: "informatica",
    preco: 899.90,
    avaliacao: 4.2,
    totalAvaliacoes: 88,
    descricao: "Ergonomia, apoio de cabeça e ajuste de altura para longas sessões.",
    imagens: [
      "https://via.placeholder.com/600x400?text=Cadeira+Gamer+1",
      "https://via.placeholder.com/160x120?text=Cadeira+Mini+1",
      "https://via.placeholder.com/160x120?text=Cadeira+Mini+2"
    ],
    comments: getRandomComments()
  },
  {
    id: 20,
    nome: "Teclado Mecânico RGB",
    categoria: "informatica",
    preco: 249.90,
    avaliacao: 4.6,
    totalAvaliacoes: 321,
    descricao: "Switches mecânicos, iluminação RGB e construção robusta.",
    imagens: [
      "https://via.placeholder.com/600x400?text=Teclado+Mecanico+1",
      "https://via.placeholder.com/160x120?text=Teclado+Mini+1",
      "https://via.placeholder.com/160x120?text=Teclado+Mini+2"
    ],
    comments: getRandomComments()
  },
  {
    id: 21,
    nome: "Câmera de Ação 4K",
    categoria: "eletronicos",
    preco: 399.90,
    avaliacao: 4.0,
    totalAvaliacoes: 150,
    descricao: "Gravação em 4K, estabilização eletrônica e resistência à água.",
    imagens: [
      "https://via.placeholder.com/600x400?text=Camera+Action+4K+1",
      "https://via.placeholder.com/160x120?text=Camera+Mini+1",
      "https://via.placeholder.com/160x120?text=Camera+Mini+2"
    ],
    comments: getRandomComments()
  },
  {
    id: 22,
    nome: "Relógio Esportivo com GPS",
    categoria: "eletronicos",
    preco: 349.90,
    avaliacao: 4.4,
    totalAvaliacoes: 210,
    descricao: "GPS integrado, monitor cardíaco e modos de treino.",
    imagens: [
      "https://via.placeholder.com/600x400?text=Relogio+GPS+1",
      "https://via.placeholder.com/160x120?text=Relogio+Mini+1",
      "https://via.placeholder.com/160x120?text=Relogio+Mini+2"
    ],
    comments: getRandomComments()
  },
  {
    id: 23,
    nome: "Fone Intra-auricular Esportivo",
    categoria: "eletronicos",
    preco: 79.90,
    avaliacao: 3.9,
    totalAvaliacoes: 44,
    descricao: "Fone leve, resistente ao suor e com bom isolamento.",
    imagens: [
      "https://via.placeholder.com/600x400?text=Fone+Esportivo+1",
      "https://via.placeholder.com/160x120?text=Fone+Mini+1",
      "https://via.placeholder.com/160x120?text=Fone+Mini+2"
    ],
    comments: getRandomComments()
  },
  {
    id: 24,
    nome: "Bolsa Térmica para Lanche",
    categoria: "acessorios",
    preco: 49.90,
    avaliacao: 4.0,
    totalAvaliacoes: 30,
    descricao: "Mantém a temperatura e é fácil de carregar.",
    imagens: [
      "https://via.placeholder.com/600x400?text=Bolsa+Termica+1",
      "https://via.placeholder.com/160x120?text=Bolsa+Mini+1",
      "https://via.placeholder.com/160x120?text=Bolsa+Mini+2"
    ],
    comments: getRandomComments()
  },
  {
    id: 25,
    nome: "Corda de Pular Profissional",
    categoria: "esportes",
    preco: 39.90,
    avaliacao: 4.3,
    totalAvaliacoes: 22,
    descricao: "Corda com rolamento e cabo ajustável para treinos intensos.",
    imagens: [
      "https://via.placeholder.com/600x400?text=Corda+Pular+1",
      "https://via.placeholder.com/160x120?text=Corda+Mini+1",
      "https://via.placeholder.com/160x120?text=Corda+Mini+2"
    ],
    comments: getRandomComments()
  },
  {
    id: 26,
    nome: "Bola de Futebol Oficial",
    categoria: "esportes",
    preco: 129.90,
    avaliacao: 4.5,
    totalAvaliacoes: 76,
    descricao: "Bola oficial costurada, boa resistência e ótima resposta ao chute.",
    imagens: [
      "https://via.placeholder.com/600x400?text=Bola+Futebol+1",
      "https://via.placeholder.com/160x120?text=Bola+Mini+1",
      "https://via.placeholder.com/160x120?text=Bola+Mini+2"
    ],
    comments: getRandomComments()
  },
  {
    id: 27,
    nome: "Kit Ferramentas 45 Peças",
    categoria: "acessorios",
    preco: 199.90,
    avaliacao: 4.1,
    totalAvaliacoes: 39,
    descricao: "Conjunto completo para pequenos reparos domésticos.",
    imagens: [
      "https://via.placeholder.com/600x400?text=Kit+Ferramentas+1",
      "https://via.placeholder.com/160x120?text=Kit+Mini+1",
      "https://via.placeholder.com/160x120?text=Kit+Mini+2"
    ],
    comments: getRandomComments()
  },
  {
    id: 28,
    nome: "Microfone USB Condensador",
    categoria: "informatica",
    preco: 229.90,
    avaliacao: 4.4,
    totalAvaliacoes: 64,
    descricao: "Microfone condensador USB para streaming e gravação.",
    imagens: [
      "https://via.placeholder.com/600x400?text=Microfone+USB+1",
      "https://via.placeholder.com/160x120?text=Microfone+Mini+1",
      "https://via.placeholder.com/160x120?text=Microfone+Mini+2"
    ],
    comments: getRandomComments()
  },
  {
    id: 29,
    nome: "Adaptador HDMI para USB-C",
    categoria: "informatica",
    preco: 59.90,
    avaliacao: 4.0,
    totalAvaliacoes: 18,
    descricao: "Adaptador para ligar notebooks a monitores e TVs.",
    imagens: [
      "https://via.placeholder.com/600x400?text=Adaptador+HDMI+1",
      "https://via.placeholder.com/160x120?text=Adaptador+Mini+1",
      "https://via.placeholder.com/160x120?text=Adaptador+Mini+2"
    ],
    comments: getRandomComments()
  },
  {
    id: 30,
    nome: "Cabo HDMI 2.0 - 2m",
    categoria: "informatica",
    preco: 39.90,
    avaliacao: 4.2,
    totalAvaliacoes: 25,
    descricao: "Cabo de alta velocidade para transmissão em 4K.",
    imagens: [
      "https://via.placeholder.com/600x400?text=Cabo+HDMI+1",
      "https://via.placeholder.com/160x120?text=Cabo+Mini+1",
      "https://via.placeholder.com/160x120?text=Cabo+Mini+2"
    ],
    comments: getRandomComments()
  },
  {
    id: 31,
    nome: "Squeeze Aço Inox 750ml",
    categoria: "acessorios",
    preco: 69.90,
    avaliacao: 4.5,
    totalAvaliacoes: 101,
    descricao: "Squeeze de aço inox com isolamento térmico.",
    imagens: [
      "https://via.placeholder.com/600x400?text=Squeeze+Inox+1",
      "https://via.placeholder.com/160x120?text=Squeeze+Mini+1",
      "https://via.placeholder.com/160x120?text=Squeeze+Mini+2"
    ],
    comments: getRandomComments()
  },
  {
    id: 32,
    nome: "Câmera Web 2K para Home Office",
    categoria: "informatica",
    preco: 199.90,
    avaliacao: 4.3,
    totalAvaliacoes: 88,
    descricao: "Resolução 2K, microfone duplo e correção automática de luz.",
    imagens: [
      "https://via.placeholder.com/600x400?text=Camera+2K+1",
      "https://via.placeholder.com/160x120?text=Camera+Mini+1",
      "https://via.placeholder.com/160x120?text=Camera+Mini+2"
    ],
    comments: getRandomComments()
  },
  {
    id: 33,
    nome: "Mochila para Notebook 15\"",
    categoria: "acessorios",
    preco: 179.90,
    avaliacao: 4.2,
    totalAvaliacoes: 55,
    descricao: "Compartimento acolchoado para notebook e bolsos organizadores.",
    imagens: [
      "https://via.placeholder.com/600x400?text=Mochila+Notebook+1",
      "https://via.placeholder.com/160x120?text=Mochila+Mini+1",
      "https://via.placeholder.com/160x120?text=Mochila+Mini+2"
    ],
    comments: getRandomComments()
  },
  {
    id: 34,
    nome: "Suporte de Parede para TV 32-55\"",
    categoria: "acessorios",
    preco: 119.90,
    avaliacao: 4.1,
    totalAvaliacoes: 34,
    descricao: "Suporte ajustável com parafusos de alta resistência.",
    imagens: [
      "https://via.placeholder.com/600x400?text=Suporte+TV+1",
      "https://via.placeholder.com/160x120?text=Suporte+Mini+1",
      "https://via.placeholder.com/160x120?text=Suporte+Mini+2"
    ],
    comments: getRandomComments()
  },
  {
    id: 35,
    nome: "Estabilizador de Energia 2000VA",
    categoria: "eletronicos",
    preco: 499.90,
    avaliacao: 4.0,
    totalAvaliacoes: 29,
    descricao: "Protege equipamentos eletrônicos contra variações de tensão.",
    imagens: [
      "https://via.placeholder.com/600x400?text=Estabilizador+2000VA+1",
      "https://via.placeholder.com/160x120?text=Estabilizador+Mini+1",
      "https://via.placeholder.com/160x120?text=Estabilizador+Mini+2"
    ],
    comments: getRandomComments()
  },
  {
    id: 36,
    nome: "Kit de Limpeza para Eletrônicos",
    categoria: "acessorios",
    preco: 24.90,
    avaliacao: 4.4,
    totalAvaliacoes: 12,
    descricao: "Fluído de limpeza, flanelas e pincéis para eletrônicos.",
    imagens: [
      "https://via.placeholder.com/600x400?text=Kit+Limpeza+1",
      "https://via.placeholder.com/160x120?text=Kit+Mini+1",
      "https://via.placeholder.com/160x120?text=Kit+Mini+2"
    ],
    comments: getRandomComments()
  },
  {
    id: 37,
    nome: "Cabo de Força 3m",
    categoria: "acessorios",
    preco: 19.90,
    avaliacao: 3.9,
    totalAvaliacoes: 6,
    descricao: "Cabo de força para computadores e monitores.",
    imagens: [
      "https://via.placeholder.com/600x400?text=Cabo+Forca+1",
      "https://via.placeholder.com/160x120?text=Cabo+Mini+1",
      "https://via.placeholder.com/160x120?text=Cabo+Mini+2"
    ],
    comments: getRandomComments()
  },
  {
    id: 38,
    nome: "Headset Gamer com Microfone",
    categoria: "eletronicos",
    preco: 289.90,
    avaliacao: 4.6,
    totalAvaliacoes: 110,
    descricao: "Headset com som surround 7.1, microfone retrátil e iluminação RGB.",
    imagens: [
      "https://via.placeholder.com/600x400?text=Headset+Gamer+1",
      "https://via.placeholder.com/160x120?text=Headset+Mini+1",
      "https://via.placeholder.com/160x120?text=Headset+Mini+2"
    ],
    comments: getRandomComments()
  },
  {
    id: 39,
    nome: "Roteador Wi-Fi Dual Band",
    categoria: "informatica",
    preco: 229.90,
    avaliacao: 4.2,
    totalAvaliacoes: 140,
    descricao: "Roteador dual band com boa cobertura e portas Gigabit.",
    imagens: [
      "https://via.placeholder.com/600x400?text=Roteador+WiFi+1",
      "https://via.placeholder.com/160x120?text=Roteador+Mini+1",
      "https://via.placeholder.com/160x120?text=Roteador+Mini+2"
    ],
    comments: getRandomComments()
  },
  {
    id: 40,
    nome: "Suporte Ergonômico para Monitor",
    categoria: "informatica",
    preco: 159.90,
    avaliacao: 4.1,
    totalAvaliacoes: 28,
    descricao: "Base ajustável para melhorar a postura e ergonomia.",
    imagens: [
      "https://via.placeholder.com/600x400?text=Suporte+Monitor+1",
      "https://via.placeholder.com/160x120?text=Suporte+Mini+1",
      "https://via.placeholder.com/160x120?text=Suporte+Mini+2"
    ],
    comments: getRandomComments()
  }
];

function formatCurrency(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function renderStars(score) {
  const fullStars = Math.floor(score);
  const half = (score - fullStars) >= 0.5;
  let out = '';
  for (let i = 0; i < fullStars; i++) out += '★';
  if (half) out += '½';
  const remaining = 5 - fullStars - (half ? 1 : 0);
  for (let i = 0; i < remaining; i++) out += '☆';
  return out;
}

function getRandomStock(min = 1, max = 50) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

products.forEach(p => {
  if (p.stock === undefined) p.stock = getRandomStock();
});

function shorten(text, max) {
  if (!text) return '';
  if (text.length <= max) return text;
  return text.slice(0, max-3) + '...';
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

function gerarCard(prod) {
  const stars = renderStars(prod.avaliacao);
  return `
    <div class="product" data-category="${prod.categoria}">
      <div class="product-image-container">
        <img src="${prod.imagens[0]}" alt="${escapeHtml(prod.nome)}">
      </div>
      <div class="product-content">
        <h3>${escapeHtml(prod.nome)}</h3>
        <div class="rating">${stars} <small>(${prod.totalAvaliacoes})</small></div>
        <p style="min-height:40px">${escapeHtml(shorten(prod.descricao, 120))}</p>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;">
          <div style="display:flex;flex-direction:column;align-items:flex-start;">
            <div style="font-weight:800;color:#ff6f00">${formatCurrency(prod.preco)}</div>
            <div style="color:#388e3c;font-weight:700;font-size:0.95em;margin-top:6px;">
              Em estoque: ${prod.stock} unidade${prod.stock > 1 ? 's' : ''}
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;align-items:flex-end;">
            <button class="btn" onclick="viewProduct(${prod.id})">Ver Detalhes</button>
            <button class="btn" style="background:#388e3c" onclick="addToCart(${prod.id})">Adicionar</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function carregarProdutos(categoria = "all") {
  const container = document.getElementById("produtos");
  if(!container) return;
  container.innerHTML = "";
  products
    .filter(p => categoria === "all" || p.categoria === categoria)
    .forEach(p => container.innerHTML += gerarCard(p));
}

carregarProdutos();

const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active")?.classList.remove("active");
    btn.classList.add("active");
    const cat = btn.dataset.category || "all";
    carregarProdutos(cat);
  });
});

const searchBar = document.querySelector(".search-bar");
const searchButton = document.querySelector(".search-button");

function searchProducts(term) {
  const container = document.getElementById("produtos");
  if(!container) return;
  container.innerHTML = "";
  const q = (term||'').toLowerCase().trim();
  if(!q) {
    carregarProdutos();
    return;
  }
  const found = products.filter(p =>
    p.nome.toLowerCase().includes(q) ||
    p.descricao.toLowerCase().includes(q) ||
    p.categoria.toLowerCase().includes(q)
  );
  if (found.length === 0) {
    alert("Nenhum produto encontrado.");
    carregarProdutos();
    return;
  }
  found.forEach(p => container.innerHTML += gerarCard(p));
}

if (searchButton) {
  searchButton.addEventListener("click", () => {
    searchProducts(searchBar.value);
  });
}
if (searchBar) {
  searchBar.addEventListener("keypress", e => {
    if (e.key === "Enter") {
      searchProducts(searchBar.value);
    }
  });
}

function viewProduct(id) {
  const produto = products.find(p => p.id === id);
  if(!produto) return;
  document.getElementById("home-page").style.display = "none";
  document.getElementById("produtos").style.display = "none";
  document.querySelector(".filters").style.display = "none";
  document.getElementById("product-detail-page").style.display = "block";
  document.getElementById("detail-product-name").textContent = produto.nome;
  document.getElementById("detail-product-description").textContent = produto.descricao;
  document.getElementById("detail-product-price").textContent = formatCurrency(produto.preco);
  const ratingElem = document.querySelector("#product-detail-page .rating");
  if(ratingElem) ratingElem.innerHTML = `${renderStars(produto.avaliacao)} <span>(${produto.totalAvaliacoes})</span>`;
  const mainImg = document.getElementById("detail-main-img") || document.querySelector(".product-main-image");
  if(mainImg) mainImg.src = produto.imagens[0];
  const thumbs = document.getElementById("thumbnail-container");
  if(thumbs) {
    thumbs.innerHTML = produto.imagens.map((img, idx) => `<img src="${img}" class="product-thumbnail" style="width:60px;height:60px;cursor:pointer;margin-right:8px">`).join('');
    Array.from(thumbs.querySelectorAll('img')).forEach((el, i) => {
      el.addEventListener('click', () => {
        if(mainImg) mainImg.src = produto.imagens[i];
      });
    });
  }
  const commentsList = document.getElementById("detail-product-comments");
  if (commentsList) {
    commentsList.innerHTML = "";
    if (produto.comments && produto.comments.length > 0) {
      produto.comments.forEach(comment => {
        const li = document.createElement("li");
        li.textContent = comment;
        li.style.marginBottom = "8px";
        li.style.padding = "10px";
        li.style.backgroundColor = "#f9f9f9";
        li.style.borderRadius = "5px";
        li.style.borderLeft = "3px solid #ff5722";
        commentsList.appendChild(li);
      });
    } else {
      const li = document.createElement("li");
      li.textContent = "Nenhum comentário disponível para este produto.";
      li.style.color = "#888";
      commentsList.appendChild(li);
    }
  }
  const priceElem = document.getElementById("detail-product-price");
  if (priceElem) {
    let stockP = document.getElementById("detail-product-stock");
    if (!stockP) {
      stockP = document.createElement("p");
      stockP.id = "detail-product-stock";
      stockP.style.fontSize = "18px";
      stockP.style.fontWeight = "700";
      stockP.style.color = "#388e3c";
      priceElem.parentNode.insertBefore(stockP, priceElem.nextSibling);
    }
    stockP.textContent = `Em estoque: ${produto.stock} unidade${produto.stock > 1 ? 's' : ''}`;
  }
  const addBtn = document.querySelector(".add_prod");
  if (addBtn) {
    addBtn.onclick = () => addToCart(produto.id);
  }
}

function backToProducts() {
  document.getElementById("home-page").style.display = "block";
  document.getElementById("produtos").style.display = "grid";
  document.querySelector(".filters").style.display = "flex";
  document.getElementById("product-detail-page").style.display = "none";
}

let cart = [];

function loadCart() {
  try {
    const raw = localStorage.getItem("bh_cart");
    cart = raw ? JSON.parse(raw) : [];
  } catch (e) {
    cart = [];
  }
}

function saveCart() {
  localStorage.setItem("bh_cart", JSON.stringify(cart));
  renderCartBadge();
}

function getCartCount() {
  return cart.reduce((s,i) => s + (i.q || 1), 0);
}

function findCartItem(id) {
  return cart.find(it => it.id === id);
}

function addToCart(id, qty = 1) {
  const produto = products.find(p => p.id === id);
  if (!produto) return;
  const item = findCartItem(id);
  if (item) {
    if ((item.q + qty) > produto.stock) {
      alert("Quantidade solicitada maior que o estoque disponível.");
      return;
    }
    item.q += qty;
  } else {
    if (qty > produto.stock) {
      alert("Quantidade solicitada maior que o estoque disponível.");
      return;
    }
    cart.push({ id: id, q: qty });
  }
  saveCart();
  renderCartSidebar();
}

function updateQuantity(id, newQ) {
  const produto = products.find(p => p.id === id);
  if (!produto) return;
  const item = findCartItem(id);
  if (!item) return;
  if (newQ <= 0) {
    cart = cart.filter(i => i.id !== id);
  } else {
    if (newQ > produto.stock) {
      alert("Quantidade solicitada maior que o estoque disponível.");
      return;
    }
    item.q = newQ;
  }
  saveCart();
  renderCartSidebar();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  renderCartSidebar();
}

function clearCart() {
  cart = [];
  saveCart();
  renderCartSidebar();
}

function calculateTotal() {
  return cart.reduce((sum, it) => {
    const p = products.find(x => x.id === it.id);
    if (!p) return sum;
    return sum + (p.preco * (it.q || 1));
  }, 0);
}

function createCartElements() {
  if (document.getElementById("bh-cart-sidebar")) return;
  const nav = document.querySelector("nav");
  if (nav) {
    const a = document.createElement("a");
    a.href = "#";
    a.id = "cart-btn";
    a.className = "nav-link";
    a.style.position = "relative";
    a.innerHTML = `Carrinho <span id="cart-badge" style="background:#ff6f00;color:#fff;padding:2px 6px;border-radius:12px;margin-left:6px;font-weight:700">0</span>`;
    nav.appendChild(a);
    a.addEventListener("click", (e) => {
      e.preventDefault();
      openCart();
    });
  }
  const sidebar = document.createElement("aside");
  sidebar.id = "bh-cart-sidebar";
  sidebar.style.position = "fixed";
  sidebar.style.top = "0";
  sidebar.style.right = "-420px";
  sidebar.style.width = "420px";
  sidebar.style.height = "100%";
  sidebar.style.background = "#fff";
  sidebar.style.boxShadow = "0 0 20px rgba(0,0,0,0.2)";
  sidebar.style.transition = "right 0.28s ease";
  sidebar.style.zIndex = "9999";
  sidebar.innerHTML = `
    <div style="padding:20px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #eee">
      <h3 style="margin:0">Meu Carrinho</h3>
      <button id="close-cart" style="background:none;border:none;font-size:18px;cursor:pointer">✕</button>
    </div>
    <div id="cart-items" style="padding:20px;overflow:auto;height:calc(100% - 200px)"></div>
    <div style="padding:20px;border-top:1px solid #eee">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <strong>Total</strong>
        <strong id="cart-total">${formatCurrency(0)}</strong>
      </div>
      <div style="display:flex;gap:10px">
        <button id="clear-cart" style="flex:1;padding:10px;border-radius:6px;border:none;background:#e0e0e0;cursor:pointer">Limpar</button>
        <button id="checkout" style="flex:1;padding:10px;border-radius:6px;border:none;background:#ff6f00;color:#fff;cursor:pointer">Finalizar Compra</button>
      </div>
    </div>
  `;
  document.body.appendChild(sidebar);
  document.getElementById("close-cart").addEventListener("click", closeCart);
  document.getElementById("clear-cart").addEventListener("click", () => {
    if (confirm("Deseja limpar o carrinho?")) clearCart();
  });
  document.getElementById("checkout").addEventListener("click", () => {
    if (cart.length === 0) { alert("O carrinho está vazio."); return; }
    alert("Compra simulada concluída. Obrigado!");
    clearCart();
    closeCart();
  });
}

function renderCartBadge() {
  const badge = document.getElementById("cart-badge");
  if (badge) badge.textContent = getCartCount();
}

function renderCartSidebar() {
  createCartElements();
  const container = document.getElementById("cart-items");
  if (!container) return;
  container.innerHTML = "";
  if (cart.length === 0) {
    container.innerHTML = `<p style="color:#666">Seu carrinho está vazio.</p>`;
    document.getElementById("cart-total").textContent = formatCurrency(0);
    renderCartBadge();
    return;
  }
  cart.forEach(it => {
    const p = products.find(x => x.id === it.id);
    if (!p) return;
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.gap = "10px";
    row.style.marginBottom = "12px";
    row.style.alignItems = "center";
    row.innerHTML = `
      <img src="${p.imagens[0]}" style="width:64px;height:64px;object-fit:cover;border-radius:6px">
      <div style="flex:1">
        <div style="font-weight:700">${escapeHtml(p.nome)}</div>
        <div style="color:#777;font-size:0.9em;margin-top:6px">${formatCurrency(p.preco)} x ${it.q}</div>
        <div style="margin-top:8px;display:flex;gap:8px;align-items:center">
          <button class="qty-decrease" data-id="${p.id}" style="padding:6px 8px;border-radius:4px;border:1px solid #ddd;background:#fff;cursor:pointer">-</button>
          <input class="qty-input" data-id="${p.id}" value="${it.q}" style="width:48px;text-align:center;padding:6px;border:1px solid #ddd;border-radius:4px" />
          <button class="qty-increase" data-id="${p.id}" style="padding:6px 8px;border-radius:4px;border:1px solid #ddd;background:#fff;cursor:pointer">+</button>
          <button class="remove-item" data-id="${p.id}" style="margin-left:8px;padding:6px 8px;border-radius:4px;border:none;background:#ff5252;color:#fff;cursor:pointer">Remover</button>
        </div>
      </div>
    `;
    container.appendChild(row);
  });
  Array.from(container.querySelectorAll('.qty-decrease')).forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      const item = findCartItem(id);
      if (!item) return;
      updateQuantity(id, (item.q || 1) - 1);
    });
  });
  Array.from(container.querySelectorAll('.qty-increase')).forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      const item = findCartItem(id);
      if (!item) return;
      updateQuantity(id, (item.q || 1) + 1);
    });
  });
  Array.from(container.querySelectorAll('.qty-input')).forEach(input => {
    input.addEventListener('change', () => {
      const id = Number(input.dataset.id);
      const val = parseInt(input.value) || 0;
      updateQuantity(id, val);
    });
  });
  Array.from(container.querySelectorAll('.remove-item')).forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      if (confirm("Remover este item do carrinho?")) removeFromCart(id);
    });
  });
  document.getElementById("cart-total").textContent = formatCurrency(calculateTotal());
  renderCartBadge();
}

function openCart() {
  createCartElements();
  const sidebar = document.getElementById("bh-cart-sidebar");
  if (!sidebar) return;
  sidebar.style.right = "0";
  renderCartSidebar();
}

function closeCart() {
  const sidebar = document.getElementById("bh-cart-sidebar");
  if (!sidebar) return;
  sidebar.style.right = "-420px";
}

loadCart();
createCartElements();
renderCartBadge();
renderCartSidebar();

window.carregarProdutos = carregarProdutos;
window.viewProduct = viewProduct;
window.backToProducts = backToProducts;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.openCart = openCart;
window.closeCart = closeCart;


document.querySelector(".back-to-products")?.addEventListener("click", (e) => {
  e.preventDefault();
  backToProducts();
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    backToProducts();

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
