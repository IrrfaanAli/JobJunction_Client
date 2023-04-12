import { getShoppingCart } from "../../public/fakedb";

const cartProductsLoader = async() =>{

     const loadedProducts = await fetch('/jobs.json');
     const products = await loadedProducts.json();

     const storedCart = getShoppingCart();
       console.log(storedCart)
        const saveCart = []
         for (const id in storedCart){
            const saveProduct = products.find(product => product.id === id);
                   
            if(saveProduct){
            const quantity = storedCart[id];
            saveProduct.quantity = quantity;
            saveCart.push(saveProduct);
            
     }
       
    
  
    

}
return saveCart;
}

export default cartProductsLoader;