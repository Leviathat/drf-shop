function add_to_cart(product_id) {
	let product_container = document.getElementById(product_id.toString());

    if (cart[product_id] === undefined) {
        cart[product_id] = {'quantity': 1};

    	document.cookie = 'cart=' + JSON.stringify(cart) + ";domain=;path=/";
        console.log("ADDED " + product_id.toString());
		console.log(document.cookie);

		product_container.innerHTML = "Remove";
		product_container.className = "add-to-cart btn btn-outline-danger mt-auto";
		get_cart_total()
    } else
    if (cart[product_id]['quantity'] === 1){
    	delete cart[product_id];

    	document.cookie = 'cart=' + JSON.stringify(cart) + ";domain=;path=/";
        console.log("REMOVED " + product_id.toString());

		product_container.innerHTML = "Add";
		product_container.className = "add-to-cart btn btn-outline-dark mt-auto";

		console.log(document.cookie);
		get_cart_total()
	}
}

function get_cart_total() {
	let total = Object.keys(JSON.parse(getCookie('cart'))).length;

	let cart_total = document.getElementById('cart-total').innerHTML = total.toString();
}
