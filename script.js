function addcart(){
    let num= document.querySelector('.number');
    let val = Number(num.innerText);
    let txt = document.querySelector('.icon')
    if(txt.innerText === 'Add to cart'){
        txt.innerText='Remove'
        val+=1;
        
        
    }else{
        txt.innerHTML='<i class="fa-solid fa-cart-shopping"></i>Add to cart';
        val-=1;
        
    }
    num.innerHTML=val;
    };
