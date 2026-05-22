<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Buy Happy</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>

  <header>
    <h1>Buy Happy</h1>
    <div class="search-container">
      <input type="text" class="search-bar" placeholder="Pesquise produtos...">
      <button class="search-button">Buscar</button>
    </div>
  </header>

  <nav>
    <a href="#" class="nav-link" data-page="home">Início</a>
    <a href="#" class="back-to-products">Produtos</a>
    <a href="#" class="nav-link" data-page="home">Ofertas</a>
    <a href="#" class="nav-link" data-page="home">Contato</a>
  </nav>

  <section class="capa" id="home-page">
    <div class="capa-conteudo">
      <h1>Bem-vindo ao Buy Happy!</h1>
      <p>Seu marketplace de confiança, onde economia e felicidade andam juntas!</p>
      <a href="#produtos" class="botao-capa">Ver Produtos</a>
    </div>
  </section>

  <div class="filters">
    <button class="filter-btn active" data-category="all">Todos</button>
    <button class="filter-btn" data-category="eletronicos">Eletrônicos</button>
    <button class="filter-btn" data-category="acessorios">Acessórios</button>
    <button class="filter-btn" data-category="informatica">Informática</button>
    <button class="filter-btn" data-category="esportes">Esportes</button>
  </div>


  <section class="products" id="produtos"></section>

  <div class="product-page" id="product-detail-page">
    <a href="#" class="back-to-products" onclick="backToProducts()">? Voltar para produtos</a>
    <div class="product-detail">
      <div class="product-gallery">
        <img id="detail-main-img" src="https://via.placeholder.com/600x400?text=Produto+Selecionado"
          alt="Produto" class="product-main-image">

        <div class="product-thumbnails" id="thumbnail-container"></div>
      </div>

      <div class="product-info">
        <h2 id="detail-product-name">Nome do Produto</h2>
        <div class="rating">????? <span>(128 avaliações)</span></div>
        <p id="detail-product-price"
          style="font-size: 24px; color: #ff6f00; font-weight: bold; margin: 15px 0;">R$ 299,90</p>
        <p id="detail-product-description">Descrição detalhada do produto aparecerá aqui.</p>
        
        <div class="product-reviews" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">
          <h3 style="font-size: 1.3em; margin-bottom: 10px; color: #333;">Comentários de Clientes</h3>
          <ul id="detail-product-comments" style="list-style: none; padding: 0;">
          </ul>
        </div>

        <button class="btn" style="padding: 15px; font-size: 18px; margin-top: 20px;">Comprar Agora</button>
        <button class="btn add_prod" style="padding: 15px; font-size: 18px; margin-top: 10px;">Adicionar ao Carrinho</button>
      </div>
    </div>
  </div>

  <footer>
    &copy; 2025 Buy Happy. Todos os direitos reservados.
  </footer>
  
  <script src="script2.js"></script>

</body>
</html>
