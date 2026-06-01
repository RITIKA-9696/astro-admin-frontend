document.addEventListener('DOMContentLoaded', function() {
    loadServicesTable();
});

function loadServicesTable() {
    const services = getData('services');
    
    let tableHTML = `
        <div class="card">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
                <h3>Services List</h3>
                <button class="btn btn-success" onclick="addService()">+ Add Service</button>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="data-table">
                        <thead><tr><th>ID</th><th>Icon</th><th>Name</th><th>Description</th><th>Status</th><th>Actions</th></tr></thead>
                        <tbody>
    `;
    
    services.forEach(service => {
        tableHTML += `
            <tr>
                <td>${service.id}</td>
                <td>${service.icon}</td>
                <td>${service.name}</td>
                <td>${service.description}</td>
                <td>${service.isActive ? '✅ Active' : '❌ Inactive'}</td>
                <td>
                    <button class="btn btn-sm btn-edit" onclick="toggleServiceStatus(${service.id})">Toggle</button>
                    <button class="btn btn-sm btn-delete" onclick="deleteService(${service.id})">Delete</button>
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

function toggleServiceStatus(id) {
    let services = getData('services');
    const service = services.find(s => s.id === id);
    if (service) {
        service.isActive = !service.isActive;
        saveData('services', services);
        location.reload();
        showAlert('Service status updated');
    }
}

function deleteService(id) {
    if (confirm('Delete this service?')) {
        let services = getData('services');
        services = services.filter(s => s.id !== id);
        saveData('services', services);
        location.reload();
        showAlert('Service deleted');
    }
}

function addService() {
    showAlert('Add service form coming soon', 'error');
}