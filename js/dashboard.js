document.addEventListener('DOMContentLoaded', function() {
    loadDashboardStats();
});

function loadDashboardStats() {
    const stats = {
        totalLeads: getData('leads').length,
        totalServices: getData('services').length,
        totalTestimonials: getData('testimonials').filter(t => t.isApproved).length,
        totalProducts: getData('products').length
    };
    
    const statsHTML = `
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-number">${stats.totalLeads}</div>
                <div class="stat-label">Total Leads</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${stats.totalServices}</div>
                <div class="stat-label">Active Services</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${stats.totalTestimonials}</div>
                <div class="stat-label">Approved Reviews</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${stats.totalProducts}</div>
                <div class="stat-label">Products</div>
            </div>
        </div>
    `;
    
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.insertAdjacentHTML('beforeend', statsHTML);
    }
}