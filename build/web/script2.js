let products = [];
async function selecionarProdutos() {

    try {

        const resposta = await fetch("ControleProduto");
        
        console.log(resposta);

        const products1 = await resposta.json();
        return products1;
        

    } catch (erro) {

        console.log("Erro:", erro);

    }

}
async function iniciar() {

    products = await selecionarProdutos();

    console.log(products);
    
    products.forEach(p => {
        if (p.stock === undefined) p.stock = getRandomStock();
      });

    carregarProdutos();

}

iniciar();

const form = document.querySelector(".review-create");

form.addEventListener("submit", async function(e) {

    e.preventDefault();

    const dados = new URLSearchParams();
    const idProduto = document.getElementById("idProduto").value;

    dados.append("comentario",
        document.getElementById("comentario").value
    );

    dados.append(
        "nota",
        document.querySelector('input[name="nota"]:checked').value
    );

    dados.append(
        "idProduto",
        document.getElementById("idProduto").value
    );

    dados.append(
        "idUsuario",
        document.getElementById("idUsuario").value
    );

    const resposta = await fetch("ControleReview", {
        method: "POST",
        headers: {
            "Content-Type":
            "application/x-www-form-urlencoded"
        },
        body: dados
    });

    // limpa textarea
    document.getElementById("comentario").value = "";

    // limpa estrelas
    document.querySelectorAll('input[name="nota"]')
        .forEach(radio => radio.checked = false);
        
    iniciar();

});

document.addEventListener("click", async function(e) {

    if (e.target.classList.contains("vote-btn")) {

        const reviewId = e.target.dataset.review;
        const type = e.target.dataset.type;

        const dados = new URLSearchParams();

        dados.append("idReview", reviewId);
        dados.append("tipo", type);

        await fetch("ControleVotoReview", {
            method: "POST",
            headers: {
                "Content-Type":
                "application/x-www-form-urlencoded"
            },
            body: dados
        });

        const scoreElement =
            e.target.parentElement.querySelector(".vote-score");

        let scoreAtual = parseInt(scoreElement.textContent);

        if (type === "up") {
            scoreAtual++;
        } else {
            scoreAtual--;
        }

        scoreElement.textContent = scoreAtual;
    }

});

console.log(products);

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
  const form = document.querySelector(".review-create");
  const inputHidden = document.createElement("input");
  inputHidden.id = "idProduto";
  inputHidden.type = "hidden";
  inputHidden.name = "idProduto";
  inputHidden.value = id;
  form.appendChild(inputHidden);
  const commentsList = document.getElementById("detail-product-comments");
  if (commentsList) {
    commentsList.innerHTML = "";
    if (produto.comments && produto.comments.length > 0) {
      produto.comments.forEach(comment => {

        const li = document.createElement("li");

        li.style.marginBottom = "12px";
        li.style.padding = "15px";
        li.style.backgroundColor = "#f9f9f9";
        li.style.borderRadius = "8px";
        li.style.borderLeft = "4px solid #ff5722";

        li.innerHTML = `

            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">

                <strong style="font-size:16px;color:#333;">
                    ${escapeHtml(comment.nome)}
                </strong>

                <span style="color:#ff9800;font-weight:bold;">
                    ${"★".repeat(comment.estrelas)}
                </span>

            </div>

            <div class="review-votes">

                <button class="vote-btn upvote"
                    data-review="${comment.id}"
                    data-type="up">
                    ▲
                </button>

                <span class="vote-score">
                    ${comment.score}
                </span>

                <button class="vote-btn downvote"
                    data-review="${comment.id}"
                    data-type="down">
                    ▼
                </button>

            </div>

            <div style="color:#444;line-height:1.5;margin-top:10px;">
                ${escapeHtml(comment.descricao)}
            </div>

        `;

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
