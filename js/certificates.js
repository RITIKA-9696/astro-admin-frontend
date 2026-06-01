document.addEventListener('DOMContentLoaded', function() {
    loadCertificatesTable();
});

function loadCertificatesTable() {
    const certificates = getData('certificates');
    
    let tableHTML = `
        <div class="card">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
                <h3>Certificates & Awards</h3>
                <button class="btn btn-success" onclick="addCertificate()">+ Add Certificate</button>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="data-table">
                        <thead><tr><th>Title</th><th>Issuer</th><th>Year</th><th>Status</th><th>Actions</th></tr></thead>
                        <tbody>
    `;
    
    certificates.forEach(cert => {
        tableHTML += `
            <tr>
                <td>${cert.title}</td>
                <td>${cert.issuer}</td>
                <td>${cert.year}</td>
                <td>${cert.isVisible ? '✅ Visible' : '❌ Hidden'}</td>
                <td>
                    <button class="btn btn-sm btn-edit" onclick="toggleVisibility(${cert.id})">Toggle</button>
                    <button class="btn btn-sm btn-delete" onclick="deleteCertificate(${cert.id})">Delete</button>
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

function toggleVisibility(id) {
    let certificates = getData('certificates');
    const cert = certificates.find(c => c.id === id);
    if (cert) {
        cert.isVisible = !cert.isVisible;
        saveData('certificates', certificates);
        location.reload();
        showAlert('Certificate visibility updated');
    }
}

function deleteCertificate(id) {
    if (confirm('Delete this certificate?')) {
        let certificates = getData('certificates');
        certificates = certificates.filter(c => c.id !== id);
        saveData('certificates', certificates);
        location.reload();
        showAlert('Certificate deleted');
    }
}

function addCertificate() {
    showAlert('Add certificate form coming soon', 'error');
}