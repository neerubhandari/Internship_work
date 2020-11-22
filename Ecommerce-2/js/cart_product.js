
/****************cart******** */
const cartBtn=document.querySelector("li.cart");
const cartDOM=document.querySelector(".cart-pop");
const cartOverlay=document.querySelector(".cart-overlay");
const cartItems=document.querySelector(".cart-items");
const cartTotal=document.querySelector(".cart-footer");
const cartContent=document.querySelector(".cart-content");
const cartAmount=document.querySelector(".item-amount");
const productsDOM=document.querySelector(".winter-collection-buttom");

//cart 
const cartpop = document.querySelector('.cart-pop');
const cartButton = document.querySelector('.cart');
cartButton.addEventListener('click', openCart);
// Open
function openCart() {
  if(cartpop.style.display === 'block'){
    cartpop.style.display='none';
  }
  else{
    cartpop.style.display = 'block';
  }
}
a='./products.json';


//cart
let cart=[];
//buttons
let buttonsDOM=[];
//getting the products
class Products{
    async getProducts(){
    try{
    let result = await fetch(a);
    let data = await result.json();
    let products=data.items;
    products=products.map(item=>{
      const{title,price} =item.fields;
      const{id}=item.sys;
      const image =item.fields.image.fields.file.url;
      return {title,price,id,image}
    })
    return products;
  
    }catch (error){
        console.log(error);
        }
    }
}

//displaying the products
class UI{
displayProducts(products){
  let result ='';
  products.forEach(product => {
    result += `
    <div class="winter-column">
                <img src=${product.image} alt="">
                <div class="middle">
                    <div class="bag-btn" data-id=${product.id}>
                        <i class="fa fa-shopping-cart">AddtoCart</i>
                    </div>
                  </div>
                <p>${product.title}</p>
                <p class="active">$${product.price}</p>
            </div>
    `;
  });
  productsDOM.innerHTML=result;
}
getBagButtons(){
  const buttons=[...document.querySelectorAll(".bag-btn")];
  buttonsDOM=buttons;
  buttons.forEach(button=>{
    let id=button.dataset.id;
    let inCart =cart.find(item=>item.id===id);
    if(inCart){
      button.innerText="In Cart";
      button.disabled=true;
      }
        button.addEventListener('click',(event)=>{
          event.target.innerText="In Cart";
          event.target.disabled=true;
          //get product from products
          let cartItem={...Storage.getProduct(id),amount:1};
          //add product to the cart
          cart =[...cart,cartItem];
          //save cart in local storage
          Storage.saveCart(cart);
          //set cart values
          this.setCartValues(cart);
          //display cart item
          this.addCartItem(cartItem);
          this.cartLogic();
      })
  });

}
setCartValues(cart){
  let tempTotal=0;
  let itemsTotal=0;
  cart.map(item=>{
    tempTotal+=item.price*item.amount;
    itemsTotal += item.amount;
  })
  cartTotal.innerText=parseFloat(tempTotal.toFixed(2));
  cartItems.innerText=itemsTotal;
}
addCartItem(item){
const div =document.createElement('div');
div.classList.add('cart-item');
div.innerHTML=`
  <div>
  <h4>${item.title}</h3>
  <p>Price:$${item.price}</p>
  </div>
  <div class="sign">
   <i class="fas fa-chevron-up" data-id=${item.id}></i>
   <p class="item-amount">${item.amount}<p>
   <i class="fas fa-chevron-down"${item.id}></i>
  </div>
 `
  cartContent.appendChild(div);
}

  setupAPP(){
    cart=Storage.getCart();
    console.log(cart);
    this.setCartValues(cart); 
    this.populateCart(cart);
  }
  populateCart(cart){
    cart.forEach(item=>this.addCartItem(item));
  }
  cartLogic(){
    cartContent.addEventListener('click',event=>{
      if(event.target.classList.contains("fa-chevron-up")){
        let addAmount=event.target;
        let id=addAmount.dataset.id;
        let tempItem=cart.find(item=>item.id===id);
        tempItem.amount=tempItem.amount+1;
        Storage.saveCart(cart);
        this.setCartValues(cart);
        addAmount.nextElementSibling.innerText=tempItem.amount;
          }
         else if (event.target.classList.contains("fa-chevron-down")){
            let lowerAmount=event.target;
            let id=lowerAmount.dataset.id;
            let tempItem=cart.find(item=>item.id===id);
            console.log(tempItem);
            tempItem.amount=tempItem.amount-0.5;
              if (tempItem.amount >0){
                Storage.saveCart(cart);
                this.setCartValues(cart);
                lowerAmount.previousElementSibling.innerText=tempItem;
              }
              else{
                cartContent.removeChild(lowerAmount.parentElement);
              }
          }
    })
  }
}


//local storage
class Storage{
  static saveProducts(products){
  localStorage.setItem("products",JSON.stringify(products));
  }
  static getProduct(id){
    let products =JSON.parse(localStorage.getItem('products'));
    return products.find(product=>product.id===id)
  }
  static saveCart(cart){
    localStorage.setItem("cart",JSON.stringify(cart));
  }
  static getCart(){
    return localStorage.getItem("cart")?JSON.parse(localStorage.getItem('cart')):[]
  }
}
document.addEventListener("DOMContentLoaded",()=>{
  const ui= new UI();
  const  products =new Products();

  //get all products
products.getProducts().then(products=>{ui.displayProducts(products)
Storage.saveProducts(products);
}).then(()=>{
  ui.getBagButtons();
});
});


