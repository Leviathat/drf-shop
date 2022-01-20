function render_cart(obj, n) {
    $('.cart-table-body').append(`
        <tr id="${obj.id}">
        <th scope="row">${n}</th>
        <td>${obj.name}</td>
        <td>${obj.type}</td>
        <td>$ ${obj.price}</td>
        <td><button onclick="remove_from_cart(${obj.id})" class="add-to-cart btn btn-outline-dark mt-auto">Remove</button></td>
        </tr>
    `)
}

function get_cart_products() {
    let cookie_cart = Object.keys(cart);

    for (let i = 0; i < cookie_cart.length; i++) {
        fetch('/api/product/$id'.replace('$id', cookie_cart[i]), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
        })
            .then(response => response.json())
            .then((data) => {
                render_cart(data, i+1)
            });
        console.log(cookie_cart[i])
    }
}

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
    } else if (cart[product_id]['quantity'] === 1) {
        delete cart[product_id];

        document.cookie = 'cart=' + JSON.stringify(cart) + ";domain=;path=/";
        console.log("REMOVED " + product_id.toString());

        product_container.innerHTML = "Add";
        product_container.className = "add-to-cart btn btn-outline-dark mt-auto";

        console.log(document.cookie);
        get_cart_total()
    }
}
function remove_from_cart(product_id) {
    let product_container = document.getElementById(product_id.toString());

    if (cart[product_id] === undefined) {
        console.log("product does not exists or not in your cart");
        get_cart_total()
    } else {
        confirm("Are you sure?");
        delete cart[product_id];
        product_container.remove();
        document.cookie = 'cart=' + JSON.stringify(cart) + ";domain=;path=/";
        get_cart_total()
    }
}
function get_cart_total() {
    let total = Object.keys(JSON.parse(getCookie('cart'))).length;

    let cart_total = document.getElementById('cart-total').innerHTML = total.toString();
}
