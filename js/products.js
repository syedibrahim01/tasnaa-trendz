fetch("/tasnaahub/data/products.json")
  .then(res => res.json())
  .then(products => {
    let html = "";

    products.forEach(p => {
      html += `
        <div class="card">
          <img src="/tasnaahub/${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p>${p.price}</p>
          <a class="btn"
             href="https://wa.me/919566022719"
             target="_blank">
             Order on WhatsApp
          </a>
        </div>
      `;
    });

    document.getElementById("product-list").innerHTML = html;
  });

