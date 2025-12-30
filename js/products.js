const whatsappNumber = "91XXXXXXXXXX"; // replace with your number

fetch("data/products.json")
  .then(res => res.json())
  .then(data => {
    let html = "";
    data.forEach(p => {
      const message = encodeURIComponent(
        `Hello Tasnaahub,%0AI'm interested in:%0AProduct: ${p.name}%0APrice: ${p.price}`
      );

      html += `
        <div class="card">
          <img src="${p.image}" width="180">
          <h3>${p.name}</h3>
          <p>${p.price}</p>
          <a class="btn" target="_blank"
             href="https://wa.me/${whatsappNumber}?text=${message}">
             Order on WhatsApp
          </a>
        </div>
      `;
    });
    document.getElementById("product-list").innerHTML = html;
  });
