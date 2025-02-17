const products = [
    {id: 1,name:"purfume",Image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTRuQF9ettQNsxHegjbtbdC3zTXdZ0DDxZ5aRpHTGdfuTa-6SPvDLt3nQZ706xNPrdvgaTdXy1ZTS1Cikvqq0yWP0pBfbdl7JdyfEcFhb5T5GKKC5eVQ8xfyfH4u32Ug_jxWF1eMW8&usqp=CAc",price:680},
    {id: 2,name:"Hair oil",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpmxb2AJAfJmwi5xziv9FjnWa_7jWgqalU9A&s",price:2600},
    {id: 3,name:"makeupset",Image:"https://beautypalace.s3.amazonaws.com/images/salontrix/8904245704285m",price:20000},
    {id: 4,name:"laptop",Image:"https://techterms.com/img/xl/laptop_586.png",price:12000},
    {id: 5,name:"smartwatch",Image:"https://m.media-amazon.com/images/I/513N9dw5IZL._AC_SS115_.jpg",price:1300},
    {id: 6,name:"item",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0gDJSC7OEaQ2HRDl_ma2ENQk5ONZp-_msLw&s",price:23000},
    {id: 7,name:"powder",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdeuqxYgkGHcma1Sw6aRcnwUZlSFGa8HVl5g&s",price:2200},
    {id: 8,name:"........",Image:"https://media-uk.landmarkshops.in/cdn-cgi/image/h=1125,w=1125,q=85,fit=cover/lifestyle/1000011748422-1000011748421_01-2100.jpg",price:9090},
    {id: 9,name:"1234",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbX6LjXCnf8I5YgljN-ClOxZgYQIgCpe04sQ&s",price:676767},
    {id: 10,name:"Vinay",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMEY0GWEpy4rz0HLGzJJp3NERIPnd_SwY52g&s",price:4444},
    {id: 11,name:"Ganesh",Image:"data:image/png;base64,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",price:9990},
    {id: 12,name:"",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnWO7dXG_dI5qQO3d6ZSOtCpNIJnIkkGqQA&s",price:1212},
    ]
    
    function renderProducts(products,productList){
        const container=document.getElementById(productList);
        container.innerHTML=" ";
        products.forEach(product => {
            const productDiv=document.createElement("div");
            productDiv.classList.add("product-item");
            productDiv.innerHTML= `
            <img src= "${product.Image}"/>
            <h3>${product.name}</h3>
            <h2>${product.price}</h2>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
            `
            container.appendChild(productDiv);
    
    
        })
    }
    function sortProducts(criteria){
        if(criteria === "price"){
            return products.sort((a,b) => a.price-b.price);
        }
        return products;
    }
    
    document.getElementById("sortOptions")?.addEventListener("change",(Event)=>{
        const sortedProducts = sortProducts(Event.target.value);
        renderProducts(sortedProducts,"productList");
    })
    
    function addToCart(productId){
        const product = products.find(p => p.id === productId);
        let cart = JSON.parse(localStorage.getItem("cart"))||[];
        cart.push(product);
        localStorage.setItem("cart",JSON.stringify(cart));
        alert(`${product.name} is added to cart`)
        renderCart();
    }
    
    function renderCart(){
        const cart=JSON.parse(localStorage.getItem("cart")) || [];
        const container=document.getElementById("cartItems");
        container.innerHTML="";
        if(cart.length == 0){
            container.innerHTML="<h1>Your Cart is Empty</h>"
        }
        cart.forEach(item => {
            const cartDiv = document.createElement("div");
            cartDiv.classList.add("cart-item");
            cartDiv.innerHTML=`
            <img src="${item.Image}"/>
            <h3>${item.name}</h3>
            <h2>${item.price}</h2>
            <button onclick="removeFromCart(${item.id})">Remove</button>
            `
            container.appendChild(cartDiv);
    
    
        })
    }
    
    function removeFromCart(productId){
        let cart = JSON.parse(localStorage.getItem("cart"))||[];
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem("cart",JSON.stringify(cart));
        alert("product is removed successfully");
        renderCart();
    }
    
    function renderSubtotal(cart){
        const subtotal = cart.reduce((total,item) => total + item.price,0);
        const subtotalContainer = document.getElementById("subtotal");
        if(cart.length > 0){
             subtotalContainer.innerHTML = `Subtotal : Rs. ${subtotal}`
        }else{
            subtotalContainer.innerHTML = `No items in the cart`
        }
       
    }
        function searchProducts(query){
            const filterProducts = products.filter(product =>
                product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )
    renderProducts(filterProducts,"productList");
        }
    
        document.getElementById("searchButton")?.addEventListener("click",() => {
            const query = document.getElementById("productSearch").value;
            searchProducts(query);
        })
    
    
    
    if(document.getElementById("productList"))renderProducts(products,"productList");
    if(document.getElementById("cartItems"))renderCart();
    
    
    