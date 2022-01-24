function get_products() {

    fetch('/api/product', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
    })
        .then(response => response.json())
        .then((data) => {
            $.each(data, function (key, obj) {
                render(obj);
            });
        });
    return 1
}

function render(obj) {
    $('.product-list').append(`
    <div class="col mb-5 col-12">
                        <div class="card h-100">
                            <!-- Sale badge-->
                            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                            <!-- Product image-->
                            <img class="card-img-top" src="${obj.image}" width="100px" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${obj.name}</h5>
                                    <!-- Product reviews-->
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    <!-- Product price-->
                                    <span class="text-muted">$ ${obj.price} </span>
                                </div>
                                <!-- Product actions-->
                                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div class="text-center"><button onclick="add_to_cart(${obj.id})" id="${obj.id}" class="add-to-cart btn btn-outline-dark mt-auto"> Add</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
    `);
    if (cart.hasOwnProperty(obj.id.toString())) {
	    let product_container = document.getElementById(obj.id.toString());
		product_container.innerHTML = "Remove";
		product_container.className = "add-to-cart btn btn-outline-danger mt-auto";
    }
}
