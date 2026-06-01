document.addEventListener('DOMContentLoaded', function() {
    loadLeadsTable();
});

function loadLeadsTable() {
    const leads = getData('leads');
    
    let tableHTML = `
        <div class="card">
            <div class="card-header">
                <h3>All Leads</h3>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="data-table">
                        <thead>
                            <tr><th>ID</th><th>Name</th><th>Mobile</th><th>Service</th><th>Status</th><th>Date</th><th>Actions</th></tr>
                        </thead>
                        <tbody>
    `;
    
    leads.forEach(lead => {
        tableHTML += `
            <tr>
                <td>${lead.id}</td>
                <td>${lead.name}</td>
                <td>${lead.mobile}</td>
                <td>${lead.service}</td>
                <td>${lead.status}</td>
                <td>${lead.date}</td>
                <td>
                    <button class="btn btn-sm btn-edit" onclick="editLead(${lead.id})">Edit</button>
                    <button class="btn btn-sm btn-delete" onclick="deleteLead(${lead.id})">Delete</button>
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

function deleteLead(id) {
    if (confirm('Are you sure?')) {
        let leads = getData('leads');
        leads = leads.filter(lead => lead.id !== id);
        saveData('leads', leads);
        location.reload();
        showAlert('Lead deleted successfully');
    }
}

function editLead(id) {
    // Implement edit functionality
    showAlert('Edit functionality coming soon', 'error');
}