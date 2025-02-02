// Script for Buy Now and Add to Cart buttons (dummy functionality)
document.addEventListener('DOMContentLoaded', function() {
    const buyNowButtons = document.querySelectorAll('.buy-now-btn');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    buyNowButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Product added to cart and redirected to checkout!');
            // Here you would implement actual buy now functionality
        });
    });

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Product added to cart!');
            // Here you would implement actual add to cart functionality
        });
    });
});
