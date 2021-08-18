function productUpdate(input,total,price,isIncrise) {
    const addProduct = document.getElementById(input);
    let updateInput = addProduct.value;
    // const productPrice = document.getElementById('total-product-price');
    // let totalPriceCase = productPrice.innerText;
    if (isIncrise === true) {
        updateInput = parseInt(updateInput) + 1;
        const phoneTotal = updateInput * 1219;
        const caseTotal = updateInput * 59;
        const subTotal = phoneTotal + caseTotal;
        const tax = subTotal / 10;
        const totalPrice = subTotal + tax;
        document.getElementById('sub-total').innerText = subTotal;
        document.getElementById('tax-amount').innerText = tax;
        document.getElementById('total-price').innerText = totalPrice;
    }
    else if (updateInput > 0) {
        updateInput = parseInt(updateInput) - 1;
        const phoneTotal = updateInput * 1219;
        const caseTotal = updateInput * 59;
        const subTotal = phoneTotal + caseTotal;
        const tax = subTotal / 10;
        const totalPrice = subTotal + tax;
        document.getElementById('sub-total').innerText = subTotal;
        document.getElementById('tax-amount').innerText = tax;
        document.getElementById('total-price').innerText = totalPrice;
    }
    addProduct.value = updateInput;

    const productPriceTotal = document.getElementById(total);
    productPriceTotal.innerText = price * updateInput;

    // update on the html
 /*    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice; */

    
}

/* function calculateTotal(input) {
    console.log(input);
    const phoneTotal = input * 1219;
    const caseTotal = input * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}
 */

document.getElementById('add-case-product').addEventListener('click', function () {
    productUpdate('product-input','total-case-price',59,true);
})
document.getElementById('remove-case-product').addEventListener('click', function () {

    productUpdate('product-input','total-case-price',59,false);
})


document.getElementById('add-phone-product').addEventListener('click', function () {
    productUpdate('phone-input','total-phone-price', 1219, true);
})
document.getElementById('remove-phone-product').addEventListener('click', function () {
    productUpdate('phone-input','total-phone-price', 1219, false);
})