import {foodItem} from './food_items.js';

console.log(foodItem)

function displayItems(){
    var chinese= document.getElementById('chinese');
    var italian= document.getElementById('italian');
    var southIndian= document.getElementById('south-indian');
    var northIndian= document.getElementById('north-indian');
    var beverages= document.getElementById('beverages');
    var desserts= document.getElementById('desserts');
    var miscellaneous= document.getElementById('miscellaneous');

    const chineseData= foodItem.filter((item)=>item.category=='chinese');
    console.log(chineseData);
    const italianData= foodItem.filter((item)=>item.category=='italian');
    console.log(italianData);
    const southIndianData= foodItem.filter((item)=>item.category=='south-indian');
    console.log(southIndianData);
    const northIndianData= foodItem.filter((item)=>item.category=='north-indian');
    console.log(northIndianData);
    const beveragesData= foodItem.filter((item)=>item.category=='beverages');
    console.log(beveragesData);
    const dessertsData= foodItem.filter((item)=>item.category=='desserts');
    console.log(dessertsData);
    const miscellaneousData= foodItem.filter((item)=>item.category=='miscellaneous');
    console.log(miscellaneousData);

    chineseData.map(item=>{

        var itemCard=document.createElement('div')
        itemCard.setAttribute('id','item-card');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : Rs. ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        chinese.appendChild(itemCard);
    })

    italianData.map(item=>{

        var itemCard=document.createElement('div')
        itemCard.setAttribute('id','item-card');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : Rs. ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        italian.appendChild(itemCard);
    })

    southIndianData.map(item=>{

        var itemCard=document.createElement('div')
        itemCard.setAttribute('id','item-card');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : Rs. ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        southIndian.appendChild(itemCard);
    })

    northIndianData.map(item=>{

        var itemCard=document.createElement('div')
        itemCard.setAttribute('id','item-card');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : Rs. ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        northIndian.appendChild(itemCard);
    })

    beveragesData.map(item=>{

        var itemCard=document.createElement('div')
        itemCard.setAttribute('id','item-card');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : Rs. ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        beverages.appendChild(itemCard);
    })

    dessertsData.map(item=>{

        var itemCard=document.createElement('div')
        itemCard.setAttribute('id','item-card');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : Rs. ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        desserts.appendChild(itemCard);
    })

    miscellaneousData.map(item=>{

        var itemCard=document.createElement('div')
        itemCard.setAttribute('id','item-card');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : Rs. ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        miscellaneous.appendChild(itemCard);
    })
}   

displayItems(); 


const categoryListData= [...new Map(foodItem.map(item=> [item['category'],item])).values()];
console.log(categoryListData);

function categoryLists(){
    var categoryList=document.getElementById('category-list');

    categoryListData.map(item=> {
        var listCard=document.createElement('div');
        listCard.setAttribute('class','list-card');

        var listImg=document.createElement('img');
        listImg.src=item.img;

        var listName=document.createElement('a');
        listName.setAttribute('class','list-name');
        listName.innerText=item.category;
        listName.setAttribute('href','#' +item.category);

        listCard.appendChild(listImg);
        listCard.appendChild(listName);

        var cloneListCard=listCard.cloneNode(true);
        categoryList.appendChild(listCard);
    })
}

categoryLists();

document.querySelectorAll('.add-to-cart').forEach(item=>{
    item.addEventListener('click',addToCart);
})

var cartData=[];

function addToCart(){
    //console.log(this.parentNode.nextSibling.nextSibling);
    var itemToAdd=this.parentNode.nextSibling.nextSibling.innerText;
    var itemObj=foodItem.find(element=>element.name==itemToAdd);

    console.log(itemObj);

    var index=cartData.indexOf(itemObj);
    if(index==-1){
        document.getElementById(itemObj.id).classList.add('toggle-heart');
        cartData=[...cartData,itemObj];
        //console.log(cartData);
    }
    else if(index> -1){
        alert('Added to Cart!');
    }

    document.getElementById('cart-plus').innerText=
    ' ' + cartData.length + ' Items';
    totalAmount();
    cartItems();
}


function cartItems(){
    var tableBody= document.getElementById('table-body');
    tableBody.innerHTML='';

    cartData.map(item=>{
        var tableRow=document.createElement('tr');

        var rowData1=document.createElement('td');
        var img=document.createElement('img');
        img.src=item.img;
        rowData1.appendChild(img);

        var rowData2=document.createElement('td');
        rowData2.innerText=item.name;

        var rowData3=document.createElement('td');
        var btn1=document.createElement('button');
        btn1.setAttribute('class','decrease-item');
        btn1.innerText='-';
        var span=document.createElement('span');
        span.innerText=item.quantity;
        var btn2=document.createElement('button');
        btn2.setAttribute('class','increase-item');
        btn2.innerText='+';

        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);

        var rowData4=document.createElement('td');
        rowData4.innerText=item.price;

        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);

        tableBody.appendChild(tableRow);

    })
    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',incrementItem);
    })

    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click', decrementItem);
    })
}

var currPrice=0;

function incrementItem(){
    let itemToInc=this.parentNode.previousSibling.innerText;
    console.log(itemToInc);

    var incObj=cartData.find(element=>element.name==itemToInc);
    incObj.quantity+=1;

    currPrice=(incObj.price*incObj.quantity - incObj.price*(incObj.quantity-1))/(incObj.quantity-1);
    incObj.price=currPrice*incObj.quantity;
    totalAmount();
    cartItems();

}

var flag=false;

function decrementItem(){
    let itemToDec=this.parentNode.previousSibling.innerText;
    let decObj=cartData.find(element=> element.name==itemToDec);
    let ind=cartData.indexOf(decObj);
    if( decObj.quantity > 1){
        currPrice=(decObj.price*decObj.quantity - decObj.price*(decObj.quantity-1))/(decObj.quantity);
        decObj.quantity-=1;
        decObj.price= currPrice*decObj.quantity;
    }
    else{
        document.getElementById(decObj.id).classList.remove('toggle-heart');
        cartData.splice(ind,1);
        document.getElementById('cart-plus').innerText=' '+ cartData.length + 'Items';

        if(cartData.length <1 && flag){
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            document.getElementById('category-header').classList.toggle('toggle-category');
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag=false;
            alert("Currently no item in i cart");
            console.log(flag);
        }
    }
    totalAmount();
    cartItems();
}

function totalAmount(){
    var sum=0;
    cartData.map(item=>{
        sum+= item.price;
    })
    document.getElementById('total-items').innerText = 'Total Item : '+ cartData.length;
    document.getElementById('total-price').innerText = 'Total Price : Rs '+ sum;
}    
    
document.getElementById('cart-plus').addEventListener('click',cartToggle);

function cartToggle(){
    if (cartData.length > 0){
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        document.getElementById('checkout').classList.toggle('cart-toggle');
        flag=true;
        //console.log(flag);
    }
    else{
        alert("Currently no items in the cart");
    }
}

document.getElementById('add-address').addEventListener('click',addAddress);

function addAddress(){
    var address=prompt('Enter your Address');
    if(address){
        document.getElementById('add-address').innerText=' ' + address;
    }
    else{
        document.getElementById('add-address').innerText='Your Address';
        alert ("Address not added");
    }
}

document.getElementById("cart-btn").addEventListener("click", message);
function message(){
    alert('Thankyou for ordering with "To Your Door".Your order has been placed,we will deliver it shortly.Enjoy your meal!');
}

var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("my-function").addEventListener("click", myfunction);
function myfunction(){
    alert('Your have log in successfully,now place your order');
}

const some_offers = ["Free delivery above Rs.1200", "\n" , "Buy 3 get 1 free", "\n" , 
"20% off on south-indian food", "\n", "Free delivery on every 5th order",];

document.getElementById("offer").addEventListener("click", offer);
function offer(){
    alert(some_offers);
}
