console.log("products.js loaded");

fetch("./data/products.json")
  .then(res => {
    console.log("Fetch response:", res.status);
    return res.json();
  })
  .then(data => {
    console.log("Products data:", data);

    let html = "";
    data.forEach(p => {
      html += `
        <div class="card">
          <h3>${p.name}</h3>
          <p>${p.price}</p>
        </div>
      `;
    });

    document.getElementById("product-list").innerHTML = html;
  })
  .catch(err => {
    console.error("ERROR:", err);
    document.getElementById("product-list").innerHTML =
      "<p style='color:red;text-align:center;'>Failed to load products</p>";
  });
