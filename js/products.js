document.addEventListener("DOMContentLoaded", () => {

  const products = [
    {
      name: "Poonam Saree",
      price: "₹250",
      image: "images/poonam-saree.webp"
    },
    {
      name: "Women's Leggings",
      price: "₹250",
      image: "images/womens-leggings.jpg"
    },
    {
      name: "Ladies Nighty (Feeding)",
      price: "₹250",
      image: "images/feeding-nighty.jpg"
    },
    {
      name: "Ladies Nighty",
      price: "₹250",
      image: "images/ladies-nighty.webp"
    }
  ];

  const productList = document.getElementById("product-list");

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price}</p>
    `;
    productList.appendChild(card);
  });

});
