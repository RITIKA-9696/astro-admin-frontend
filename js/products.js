document.addEventListener('DOMContentLoaded', function() {
    loadProductsTable();
});

function loadProductsTable() {
    const products = getData('products');
    
    let tableHTML = `
        <div class="card">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
                <h3>Sacred Products</h3>
                <button class="btn btn-success" onclick="addProduct()">+ Add Product</button>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="data-table">
                        <thead><tr><th>Name</th><th>Price</th><th>Description</th><th>Collection</th><th>Stock</th><th>Actions</th></tr></thead>
                        <tbody>
    `;
    
    products.forEach(product => {
        tableHTML += `
            <tr>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.description.substring(0, 50)}...</td>
                <td>${product.collection}</td>
                <td>${product.stock ? '✅ In Stock' : '❌ Out of Stock'}</td>
                <td>
                    <button class="btn btn-sm btn-edit" onclick="toggleStock(${product.id})">Toggle Stock</button>
                    <button class="btn btn-sm btn-delete" onclick="deleteProduct(${product.id})">Delete</button>
                </td>
            </tr>
        `;
    });
    
    tableHTML += `</tbody></table></div></div></div>`;
    
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.insertAdjacentHTML('beforeend', tableHTML);
    }
}

function toggleStock(id) {
    let products = getData('products');
    const product = products.find(p => p.id === id);
    if (product) {
        product.stock = !product.stock;
        saveData('products', products);
        location.reload();
        showAlert('Stock status updated');
    }
}

function deleteProduct(id) {
    if (confirm('Delete this product?')) {
        let products = getData('products');
        products = products.filter(p => p.id !== id);
        saveData('products', products);
        location.reload();
        showAlert('Product deleted');
    }
}

function addProduct() {
    showAlert('Add product form coming soon', 'error');
}