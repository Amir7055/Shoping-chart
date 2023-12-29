

class Shopelist{
         constructor(product,price){
            
             this.product=product;
             this.price=price;
         }
}

class productList{
    

    static addproductlist(e){
        let taBle=document.querySelector("#product-store");
        let tableRow=document.createElement("tr"); 
        tableRow.innerHTML=`
     <td>${e.product}</td>
     <td>${e.price}</td>
     <td><a href="#">X</a></td>`
     
        
     taBle.appendChild(tableRow)
     
    }


    static removeproduct(target){
        if(target.hasAttribute("href")){
            target.parentElement.parentElement.remove()
            storoge.removeItem(target.parentElement.previousElementSibling.textContent.trim());
            
        }

    }
}

class storoge{
    static getProduct(){
        // let getProductItem =JSON.parse(localStorage.getItem('products'))??[];
        let getProductItem;
        if(localStorage.getItem('products')===null){
            getProductItem=[];

        }else{
            getProductItem= JSON.parse(localStorage.getItem('products'))
        }
        return getProductItem;
    }

    static addProduct(product){

        let productItem=storoge.getProduct();
        productItem.push(product)
        localStorage.setItem('products',JSON.stringify(productItem))
    }

    static displayProduct(){
        let displayItem=storoge.getProduct()
        displayItem.forEach(product=> {
            
            productList.addproductlist(product);
        }); 
        
    }

    static removeItem(price){
        let productItem=storoge.getProduct();
         productItem.forEach((product,index)=>{
            if(product.price===price){
                productItem.splice(index,1)
            }
         })
         
         localStorage.setItem('products',JSON.stringify(productItem))
         

        
    }
}

// call list

let len = document.querySelectorAll("button").length
for(let i=0;i<len;i++){
    let chartlistbtn = document.querySelectorAll("button")[i]
    chartlistbtn.addEventListener('click', addshopeList)
    
}
let shopingList=document.querySelector('#product-store');
    shopingList.addEventListener("click",removeShopelist)

document.addEventListener('DOMContentLoaded',storoge.displayProduct())


function addshopeList(e){
    
    let produtTarget=e.target.parentElement;
    let list=produtTarget.querySelector("h4").innerText;
    let list2 = produtTarget.querySelector("h5").innerText;    
    let listAll = new Shopelist(list,list2)
    productList.addproductlist(listAll)
    storoge.addProduct(listAll)
    e.preventDefault()
 }
    


function removeShopelist (list){
    productList.removeproduct(list.target)
    
    // e.preventDefault()

}












































// // let product =document.querySelectorAll(".product");
// // let productName = document.querySelectorAll("h4")
// // // let productPrice=product.querySelectorAll("h5")
// // let productPrice = document.querySelectorAll("h5")
// let len = document.querySelectorAll("button").length

//  window.onload=()=>{
//     main()
//  }
// class Shopelist{
//     constructor(product,price){
//         this.product=product;
//         this.price=price;
//     }
// }

// const main=()=>{
//     for(let i=0;i<len;i++){
//         let chartlistbtn = document.querySelectorAll("button")[i]
//     chartlistbtn.addEventListener('submit',addshopeList)

//     }
    
// }

// const addshopeList =(e)=>{
//     // for(let x=0;i>len;i++){
//     //     let ProductName=document.querySelector("h4").value[i],
//     //     PriceList=document.querySelector("h5").value[i]
//     // }
    
//     // let ProductList =new Shopelist(product,price)
//     // console.log(ProductList)
//  console.log("submit");

//     e.preventDefault()
// }

// const displayProducList=(e)=>{

//     let tablelist= document.querySelector(".product-store")
//     let list=""
//     tablelist.forEach(element,index => {
//         list+=`
//     <td>${this.index}</td>
//     <td>${productName}</td>
//     <td>${productPrice}</td>
//     <td><a href="#" id="remove">X</a></td>`
//     tablelist.appendChild(list)
    
//     });
    
// }


