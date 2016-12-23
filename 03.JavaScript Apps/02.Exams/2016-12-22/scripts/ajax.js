function viewShop() {
    $('#shopProducts').empty();
    showView('viewShop');
    let recipient = sessionStorage.getItem('userName');
    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + '/products',
        headers: getKinveyUserAuthHeaders(),
        success: loadShopSuccess,
        error: handleAjaxError
    });

    function loadShopSuccess(products) {
        let productTable = $('<table>')
            .append($('<thead>')
                .append($('<tr>').append(
                    $('<th>').text("Product"),
                    $('<th>').text("Description"),
                    $('<th>').text("Price"),
                    $('<th>').text("Actions"))))
            .append($('<tbody>'));
        if (products.length > 0) {
            for (let product of products) {
                appendShopProductRow(product, productTable);
            }
        }
        $('#shopProducts').append(productTable);
    }

    function appendShopProductRow(product, productsTable) {
        productsTable.find('tbody').append($('<tr>').append(
            $('<td>').text(product.name),
            $('<td>').text(product.description),
            $('<td>').text(product.price.toFixed(2)),
            $('<td>').append($('<button>').text('Purchase').click(function () {
                purchaseProduct(product._id)
            }))));
    }
}

function purchaseProduct(product) {
    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "user/" + kinveyAppKey + '/' + sessionStorage.getItem('userId'),
        headers: getKinveyUserAuthHeaders(),
        success: loadCartToUpdateSuccess,
        error: handleAjaxError
    });

    function loadCartToUpdateSuccess(user) {
        let cart = user.cart;
        if (cart !== undefined && cart.hasOwnProperty(product)) {
            let quantity = cart[product].quantity;
            quantity++;
            cart[product].quantity = quantity;
            updateCartAfterPurchase(cart);
        } else {
            $.ajax({
                method: "GET",
                url: kinveyBaseUrl + "appdata/" + kinveyAppKey + '/products/' + product,
                headers: getKinveyUserAuthHeaders(),
                success: getProductDetails,
                error: handleAjaxError
            });
            function getProductDetails(productToAdd) {
                let toAdd = {
                    quantity: 1,
                    product: {
                        name: productToAdd.name,
                        description: productToAdd.description,
                        price: productToAdd.price
                    }
                }
                if (cart === undefined) {
                    cart = {};
                }
                cart[product] = toAdd;
                updateCartAfterPurchase(cart);
            }
        }
    }
}

function updateCartAfterPurchase(cart) {
    let cartToUpdate = {
        username: sessionStorage.getItem('userName'),
        name: sessionStorage.getItem('name'),
        cart: cart
    }
    $.ajax({
        method: "PUT",
        url: kinveyBaseUrl + "user/" + kinveyAppKey + '/' + sessionStorage.getItem('userId'),
        headers: getKinveyUserAuthHeaders(),
        data: cartToUpdate,
        success: addedToCartSuccess,
        error: handleAjaxError
    });
    function addedToCartSuccess() {
        viewCart();
        showInfo('Product purchased.');
    }
}

function viewCart() {
    $('#cartProducts').empty();
    showView('viewCart');
    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "user/" + kinveyAppKey + '/' + sessionStorage.getItem('userId'),
        headers: getKinveyUserAuthHeaders(),
        success: loadCartSuccess,
        error: handleAjaxError
    });

    function loadCartSuccess(user) {
        let productTable = $('<table>')
            .append($('<thead>')
                .append($('<tr>').append(
                    $('<th>').text("Product"),
                    $('<th>').text("Description"),
                    $('<th>').text("Quantity"),
                    $('<th>').text("Total Price"),
                    $('<th>').text("Actions"))))
            .append($('<tbody>'));
        if (user.cart !== "") {
            for (let product in user.cart) {
                appendCartProductRow(product, user.cart[product], productTable);
            }
        }
        $('#cartProducts').append(productTable);
    }

    function appendCartProductRow(id, product, productTable) {
        productTable.find('tbody').append($('<tr>').append(
            $('<td>').text(product.product.name),
            $('<td>').text(product.product.description),
            $('<td>').text(product.quantity),
            $('<td>').text((product.quantity * parseFloat(product.product.price)).toFixed(2)),
            $('<td>').append($('<button>').text('Discard').click(function () {
                discardProduct(id)
            }))));
    }
}

function discardProduct(product) {
    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "user/" + kinveyAppKey + '/' + sessionStorage.getItem('userId'),
        headers: getKinveyUserAuthHeaders(),
        success: loadCartToDiscardProductsFromSuccess,
        error: handleAjaxError
    });

    function loadCartToDiscardProductsFromSuccess(user) {
        let cart = user.cart;
        delete cart[product];
        updateCartAfterDiscard(cart);
    }
}

function updateCartAfterDiscard(cart) {
    let cartToUpdate = {
        username: sessionStorage.getItem('userName'),
        name: sessionStorage.getItem('name'),
        cart: cart
    }
    $.ajax({
        method: "PUT",
        url: kinveyBaseUrl + "user/" + kinveyAppKey + '/' + sessionStorage.getItem('userId'),
        headers: getKinveyUserAuthHeaders(),
        data: cartToUpdate,
        success: addedToCartSuccess,
        error: handleAjaxError
    });
    function addedToCartSuccess() {
        viewCart();
        showInfo('Product discarded.');
    }
}