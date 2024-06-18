

const products = [
    { id: 1, name: "Air Jordan 1 Low OG WhiteRed", price: 259.999, imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/792655-1000-1000?v=638379206231170000&width=1000&height=1000&aspect=true" },
    { id: 2, name: "Air Jordan 1 High 85", price: 379.999, imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/912983-1000-1000?v=638538892520170000&width=1000&height=1000&aspect=true" },
    { id: 3, name: "PSG Jumpman MVP", price: 289.999, imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/846316-1000-1000?v=638388504225700000&width=1000&height=1000&aspect=true" },
    { id: 4, name: "Air Jordan 1 Mid SE", price: 259.999, imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/811855-1000-1000?v=638382453117330000&width=1000&height=1000&aspect=true" },
    { id: 5, name: "Air Joran 1 Royal Reimagined", price: 349.999, imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/794795-1000-1000?v=638379237119900000&width=1000&height=1000&aspect=true" },
    { id: 6, name: "Air Jordan SE Black Elephant", price: 229.999, imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/811831-1000-1000?v=638382452676470000&width=1000&height=1000&aspect=true" },
    { id: 7, name: "Air Jordan 1 Low", price: 209.999, imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/844395-1000-1000?v=638388472425370000&width=1000&height=1000&aspect=true" },
    { id: 8, name: "Jordan Stay Loyal 3", price: 209.999, imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/877846-1000-1000?v=638467283058530000&width=1000&height=1000&aspect=true" },
    { id: 9, name: "Air Jordan  Canvas Sky Orange ", price: 209.999, imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/762695-1000-1000?v=638316094659370000&width=1000&height=1000&aspect=true" },
    { id: 10, name: "Air Jordan 1 Low", price: 229.999, imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/762451-1000-1000?v=638316090927300000&width=1000&height=1000&aspect=true" },
    { id: 11, name: "Air Jordan  Mid 1 ", price: 229.999, imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/731270-1200-1200?width=1200&height=1200&aspect=true" },
    { id: 12, name: "Air Jordan 1 Element", price: 359.999, imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/907728-1200-1200?width=1200&height=1200&aspect=true" },
    { id: 13, name: "Nike Air Force1 07 LV8", price: 240000, imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/811591-1200-1200?width=1200&height=1200&aspect=true" },
    { id: 14, name: "Nike Air Force1 07 LX", price: 270000, imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/845663-1200-1200?width=1200&height=1200&aspect=true" },
    { id: 15, name: "Nike Air Force1 07", price: 209000, imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/155416-1200-1200?width=1200&height=1200&aspect=true" },
    { id: 16, name: "Nike Air Force1 07", price: 209000, imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/812960-1200-1200?width=1200&height=1200&aspect=true" },
    { id: 17, name: "Nike Air Max Pulse", price: 285000, imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/879039-1200-1200?width=1200&height=1200&aspect=true" },
    { id: 18, name: "Nike Air VaporMax", price: 380000, imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/844976-1200-1200?width=1200&height=1200&aspect=true" },
    { id: 19, name: "Nike Air Max 86", price: 300000, imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/774339-1200-1200?width=1200&height=1200&aspect=true" },
    { id: 20, name: "Nike Air Max 90", price: 315000, imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/907876-1200-1200?width=1200&height=1200&aspect=true" },
    { id: 21, name: "Nike Air Max SC", price: 144000, imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/792638-1200-1200?width=1200&height=1200&aspect=true" },
    { id: 22, name: "Nike Air Max 1", price: 257000, imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/795313-1200-1200?width=1200&height=1200&aspect=true" },
    { id: 23, name: "Nike Air Max Systm", price: 119000, imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/701118-1200-1200?width=1200&height=1200&aspect=true" },
    { id: 24, name: "Nike Air Max SC", price: 144000, imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/880539-1200-1200?width=1200&height=1200&aspect=true" },
];

let cart = loadCartFromLocalStorage();

function addToCart(productId, quantity) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.log("No se encontró el producto");
        return;
    }
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += quantity;
        cartItem.subTotal = cartItem.quantity * cartItem.price;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            subTotal: quantity * product.price
        });
    }
    saveCartToLocalStorage();
    renderCart();
}

function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = "";
    products.forEach(product => {
        const productDiv = document.createElement('div');

        
        const productImg = document.createElement('img');
        productImg.src = product.imageUrl;
        productImg.alt = product.name;
        productImg.width = 300;
        productImg.height = 300;
        
        const productInfo = document.createElement('p');
        productInfo.textContent = `${product.name} - $${product.price}`;
        productInfo.style.color='black';
        productInfo.style.textAlign='center';
        productInfo.style.fontFamily='Courier New';
        productInfo.style.fontSize="12px";
        productInfo.style.textTransform="uppercase";


        
        const addToCartButton = document.createElement('button');
        addToCartButton.style.width = "180px"
        addToCartButton.style.backgroundColor = "black";
        addToCartButton.style.color = "white";
        addToCartButton.style.marginLeft = "50px";
        addToCartButton.style.marginBottom = "50px";
        addToCartButton.style.fontFamily = 'Courier New';
        addToCartButton.style.textTransform="uppercase";
        addToCartButton.style.fontWeight="bold";
        addToCartButton.addEventListener("click",()=>{
            addToCartButton.style.backgroundColor = "black",
            addToCartButton.style.color = "white"
            addToCartButton.style.borderRadius = "5px"
    

        })

        
        addToCartButton.textContent = "Agregar al Carrito";
        addToCartButton.onclick = () => addToCart(product.id, 1);
        
        productDiv.appendChild(productImg);
        productDiv.appendChild(productInfo);
        productDiv.appendChild(addToCartButton);
        
        productList.appendChild(productDiv);
    });
}

function renderCart() {
    const cartDiv = document.getElementById("cart");
    cartDiv.style.padding = "5px"
    cartDiv.style.boxShadow = "2px 2px 2px 2px black";
    cartDiv.innerHTML = "";
    cart.forEach(item => {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.innerHTML = `
            <p>ID: ${item.id} - Nombre: ${item.name} - Cantidad: ${item.quantity} - Precio Total: $${item.subTotal}</p>
        `;
        cartItemDiv.style.fontFamily='Courier New';
        cartItemDiv.style.fontSize='15px';
        cartDiv.appendChild(cartItemDiv);
    });
}

function saveCartToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCart();
});


