const products = [
  {
    name: "Poonam Saree",
    price: "₹250",
    image: "images/saree.jpg"
  },
  {
    name: "Women's Leggings",
    price: "₹250",
    image: "images/leggings.jpg"
  },
  {
    name: "Ladies Nighty (Feeding)",
    price: "₹250",
    image: "images/nighty1.jpg"
  },
  {
    name: "Ladies Nighty",
    price: "₹250",
    image: "images/nighty2.jpg"
  }
];

const productList = document.getElementById("product-list");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
  `;

  productList.appendChild(card);
});


