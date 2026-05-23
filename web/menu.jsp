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
    <div class="product-detail" style="display:flex; flex-direction:column; gap:30px;">

        <div style="display:flex; gap:40px; align-items:flex-start;">

          <div class="product-gallery">
            <img id="detail-main-img"
              src="https://via.placeholder.com/600x400?text=Produto+Selecionado"
              alt="Produto"
              class="product-main-image">

            <div class="product-thumbnails" id="thumbnail-container"></div>
          </div>

          <div class="product-info">
            <h2 id="detail-product-name">Nome do Produto</h2>

            <div class="rating">
              ????? <span>(128 avaliações)</span>
            </div>

            <p id="detail-product-price"
              style="font-size: 24px; color: #ff6f00; font-weight: bold; margin: 15px 0;">
              R$ 299,90
            </p>

            <p id="detail-product-description">
              Descrição detalhada do produto aparecerá aqui.
            </p>

            <button class="btn"
              style="padding: 15px; font-size: 18px; margin-top: 20px;">
              Comprar Agora
            </button>

            <button class="btn add_prod"
              style="padding: 15px; font-size: 18px; margin-top: 10px;">
              Adicionar ao Carrinho
            </button>
          </div>

        </div>

        <div class="product-reviews"
             style="width:100%; border-top:1px solid #eee; padding-top:20px;">
            
            <form id="review-form" class="review-create" action="ControleReview" method="POST">

                <h3>Escrever avaliação</h3>
                <div class="star-rating">

                    <input type="radio" id="star5" name="nota" value="5">
                    <label for="star5"></label>

                    <input type="radio" id="star4" name="nota" value="4">
                    <label for="star4"></label>

                    <input type="radio" id="star3" name="nota" value="3">
                    <label for="star3"></label>

                    <input type="radio" id="star2" name="nota" value="2">
                    <label for="star2"></label>

                    <input type="radio" id="star1" name="nota" value="1" required>
                    <label for="star1"></label>

                </div>
                <input 
                    id ="idUsuario"
                    type="hidden"
                    name="idUsuario"
                    value="${idUsuario}"
                >
                <textarea 
                    id ="comentario"
                    name="comentario"
                    placeholder="Digite sua avaliação..."
                    required
                ></textarea>

                <button type="submit">
                    Enviar
                </button>

            </form>

          <h3 style="font-size:1.4em; margin-bottom:20px; color:#333;">
            Comentários de Clientes
          </h3>

          <ul id="detail-product-comments"
              style="
                list-style:none;
                padding:0;
                display:flex;
                flex-direction:column;
                gap:15px;
              ">
          </ul>

        </div>

      </div>
  </div>

  <footer>
    &copy; 2025 Buy Happy. Todos os direitos reservados.
  </footer>
  <script src="script2.js"></script>

</body>
</html>
