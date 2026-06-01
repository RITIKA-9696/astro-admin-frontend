document.addEventListener('DOMContentLoaded', function() {
    loadTestimonialsTable();
});

function loadTestimonialsTable() {
    const testimonials = getData('testimonials');
    
    let tableHTML = `
        <div class="card">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
                <h3>Testimonials</h3>
                <button class="btn btn-success" onclick="addTestimonial()">+ Add Testimonial</button>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="data-table">
                        <thead><tr><th>Client</th><th>Service</th><th>Review</th><th>Rating</th><th>Status</th><th>Actions</th></tr></thead>
                        <tbody>
    `;
    
    testimonials.forEach(testimonial => {
        tableHTML += `
            <tr>
                <td>${testimonial.clientName}</td>
                <td>${testimonial.service}</td>
                <td>${testimonial.review.substring(0, 50)}...</td>
                <td>${'⭐'.repeat(testimonial.rating)}</td>
                <td>${testimonial.isApproved ? '✅ Approved' : '⏳ Pending'}</td>
                <td>
                    <button class="btn btn-sm btn-edit" onclick="toggleApproval(${testimonial.id})">Toggle Approval</button>
                    <button class="btn btn-sm btn-delete" onclick="deleteTestimonial(${testimonial.id})">Delete</button>
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

function toggleApproval(id) {
    let testimonials = getData('testimonials');
    const testimonial = testimonials.find(t => t.id === id);
    if (testimonial) {
        testimonial.isApproved = !testimonial.isApproved;
        saveData('testimonials', testimonials);
        location.reload();
        showAlert('Testimonial status updated');
    }
}

function deleteTestimonial(id) {
    if (confirm('Delete this testimonial?')) {
        let testimonials = getData('testimonials');
        testimonials = testimonials.filter(t => t.id !== id);
        saveData('testimonials', testimonials);
        location.reload();
        showAlert('Testimonial deleted');
    }
}

function addTestimonial() {
    showAlert('Add testimonial form coming soon', 'error');
}