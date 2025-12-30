fetch("data/products.json")
  .then(res => res.json())
  .then(data => {
    let html = "";
    data.forEach(p => {
      html += `<div class="card">
                 <h3>${p.name}</h3>
                 <p>${p.price}</p>
               </div>`;
    });
    document.getElementById("product-list").innerHTML = html;
  });
