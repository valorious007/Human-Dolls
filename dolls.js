// Doll Data
const dolls = [
    { name: "Barbie Doll Blonde", price: 1799, oldPrice: 2000, img: "https://storage.googleapis.com/a1aa/image/8GtfrmQ0QVTeP0eQADe3XnclT68vPK2Khy6Fod9dbJ5ReyZeE.jpg" },
    { name: "Monster High Draculaura", price: 1799, oldPrice: 2000, img: "https://storage.googleapis.com/a1aa/image/3gpV8qFE3SZLA1D2VUf8xiU4E9a7QjaqL1ScUi8OI20vLn5JA.jpg" },
    { name: "Lagoona Blue Doll", price: 1799, oldPrice: 2000, img: "https://storage.googleapis.com/a1aa/image/dGMXLsU4U9L1PxG1juSvDhXdxWAKFTEtfHkBfgIru9jjXOzTA.jpg" },
    { name: "Clawdeen Wolf Doll", price: 1799, oldPrice: 2000, img: "https://storage.googleapis.com/a1aa/image/Q4EPauetqb2CDCVqqHDibnD1jJfcXXXSmwoS8Lu0vzbhXOzTA.jpg" },
    { name: "My Little Pony", price: 899, oldPrice: 1000, img: "https://storage.googleapis.com/a1aa/image/fRD0L15PumyGJS9Wyc5bWzaJNomTFiy5KJSLwJS3eHKmXOzTA.jpg" },
    { name: "Barbie Science Doll", price: 899, oldPrice: 1000, img: "https://storage.googleapis.com/a1aa/image/eStW9N5ebhsqOUx7wvmz6qKiAhrNfkIoCwSOYeKkYFvUeyZeE.jpg" },
    { name: "Mermaid Barbie", price: 1299, oldPrice: 1500, img: "https://storage.googleapis.com/a1aa/image/sample.jpg" },
    { name: "Princess Doll", price: 999, oldPrice: 1200, img: "https://storage.googleapis.com/a1aa/image/sample2.jpg" },
    { name: "Fairy Doll", price: 1099, oldPrice: 1300, img: "https://storage.googleapis.com/a1aa/image/sample3.jpg" },
];

// Populate Product Grid
const productGrid = document.getElementById('productGrid');

dolls.forEach(doll => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <img src="${doll.img}" alt="${doll.name}">
        <h3>${doll.name}</h3>
        <div class="price">
            <span class="old-price">₹${doll.oldPrice}</span>
            <span>₹${doll.price}</span>
            <span class="discount">SAVE ${((doll.oldPrice - doll.price) / doll.oldPrice * 100).toFixed(0)}%</span>
        </div>
        <div class="add-to-bag">
            <button>Add to Bag</button>
        </div>
    `;
    productGrid.appendChild(productCard);
});
