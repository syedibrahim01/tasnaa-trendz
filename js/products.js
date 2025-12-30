fetch("data/products.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to load products.json");
    }
    return response.json();
  })
  .then(products => {
    let html = "";
    products.forEach(p => {
      html += `
        <div class="card">
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p>${p.price}</p>
          <a class="btn"
             href="https://wa.me/917550237469"
             target="_blank">
             Order on WhatsApp
          </a>
        </div>
      `;
    });
    document.getElementById("product-list").innerHTML = html;
  })
  .catch(error => {
    document.getElementById("product-list").innerHTML =
      "<p style='color:red;text-align:center;'>Products loading failed</p>";
    console.error(error);
  });
