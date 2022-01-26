function render_cart(obj) {
    $('.cart-table-body').append(`
        <tr id="${obj.id}">
        <td> - ${obj.name}</td>
        <td class="text-center">${obj.type}</td>
        <td class="text-center"><nobr>₸ ${obj.price}</nobr></td>
        <td class="text-right"><button onclick="remove_from_cart(${obj.id})" class="add-to-cart btn btn-sm btn-outline-dark mt-auto">Убрать</button></td>
        </tr>
    `);
}

function test() {
    fetch('http://127.0.0.1:8000/test/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify(cart)
    }).then(response => response.json())
        .then(data => {
            console.log(data)
        });
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
            .then(data => {
                render_cart(data);
            });
    }
    cart_empty()
}

function add_to_cart(product_id) {
    let product_container = document.getElementById(product_id.toString());

    if (cart[product_id] === undefined) {
        cart[product_id] = {'quantity': 1};

        document.cookie = 'cart=' + JSON.stringify(cart) + ";domain=;path=/";

        product_container.innerHTML = "Remove";
        product_container.className = "add-to-cart btn btn-outline-danger mt-auto";

    } else if (cart[product_id]['quantity'] === 1) {
        delete cart[product_id];

        document.cookie = 'cart=' + JSON.stringify(cart) + ";domain=;path=/";

        product_container.innerHTML = "Add";
        product_container.className = "add-to-cart btn btn-outline-dark mt-auto";

    }
    get_cart_total()
}

function remove_from_cart(product_id) {
    let product_container = document.getElementById(product_id.toString());

    if (cart[product_id] === undefined) {
        console.log("product does not exists or not in your cart");
    } else {
        delete cart[product_id];
        product_container.remove();
        document.cookie = 'cart=' + JSON.stringify(cart) + ";domain=;path=/";
        cart_empty()
    }
    get_cart_total()
}

function get_cart_total() {
    document.getElementById('cart-total').innerHTML = Object.keys(JSON.parse(getCookie('cart'))).length.toString();
}

function cart_empty() {
    if (Object.keys(JSON.parse(getCookie('cart'))).length === 0) {
        let message = document.getElementById('empty-cart');
        let cart_detail = document.getElementById('cart_detail');
        message.style.display = message.style.display === 'block' ? '' : 'block';
        cart_detail.style.display = cart_detail.style.display === 'none' ? '' : 'none';
    }
}

function order_cart() {
    let form = document.getElementById('order-form');
    form.style.display = form.style.display === 'block' ? '' : 'block';

}