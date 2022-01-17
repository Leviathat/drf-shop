let add_to_cart_btns = document.getElementsByClassName('add-to-cart');

function add_to_cart(product_id) {
    console.log(product_id);

    if (cart[product_id] === undefined){
		cart[product_id] = {'quantity':1}

		}else{
			cart[product_id]['quantity'] = 0
		}
}