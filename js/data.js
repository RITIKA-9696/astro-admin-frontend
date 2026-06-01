// Data Management Module

// Storage Keys
const STORAGE_KEYS = {
    LEADS: 'astro_leads',
    SERVICES: 'astro_services',
    TESTIMONIALS: 'astro_testimonials',
    CERTIFICATES: 'astro_certificates',
    COURSES: 'astro_courses',
    PRODUCTS: 'astro_products'
};

// Get data from localStorage
function getData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

// Save data to localStorage
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Initialize all sample data
function initSampleData() {
    // Sample Leads
    if (!localStorage.getItem(STORAGE_KEYS.LEADS)) {
        const sampleLeads = [
            { id: 1, name: 'Rahul Sharma', mobile: '9876543210', service: 'Numerology', status: 'New', date: '2024-01-15' },
            { id: 2, name: 'Priya Mehta', mobile: '9876543211', service: 'Tarot', status: 'Contacted', date: '2024-01-16' },
            { id: 3, name: 'Amit Kumar', mobile: '9876543212', service: 'Birth Chart', status: 'Session Done', date: '2024-01-17' },
            { id: 4, name: 'Sneha Patel', mobile: '9876543213', service: 'Crystal Healing', status: 'Follow-up', date: '2024-01-18' },
            { id: 5, name: 'Vikram Singh', mobile: '9876543214', service: 'Vastu', status: 'New', date: '2024-01-19' },
            { id: 6, name: 'Neha Gupta', mobile: '9876543215', service: 'Numerology', status: 'Contacted', date: '2024-01-20' },
            { id: 7, name: 'Rajesh Kumar', mobile: '9876543216', service: 'Past Life', status: 'New', date: '2024-01-21' }
        ];
        saveData(STORAGE_KEYS.LEADS, sampleLeads);
    }
    
    // Sample Services
    if (!localStorage.getItem(STORAGE_KEYS.SERVICES)) {
        const sampleServices = [
            { id: 1, name: 'Tarot Reading', description: 'Gain insight into present energies and future possibilities through the sacred language of the cards.', icon: '🔮', isActive: true, order: 1 },
            { id: 2, name: 'Numerology Consultation', description: 'Life path, destiny and name vibrations decoded through the ancient science of numbers.', icon: '🔢', isActive: true, order: 2 },
            { id: 3, name: 'Crystal Healing', description: 'Harmonise your energies with sacred stones and deep chakra balancing work.', icon: '💎', isActive: true, order: 3 },
            { id: 4, name: 'Birth Chart Analysis', description: 'A complete astrological reading of your natal chart — your cosmic blueprint decoded.', icon: '🌟', isActive: true, order: 4 },
            { id: 5, name: 'Vastu Consultation', description: 'Align the energy of your home or workspace with Vedic spatial principles.', icon: '🏠', isActive: true, order: 5 },
            { id: 6, name: 'Past Life Reading', description: 'Explore karmic patterns and soul contracts that shape your present circumstances.', icon: '🕉️', isActive: true, order: 6 }
        ];
        saveData(STORAGE_KEYS.SERVICES, sampleServices);
    }
    
    // Sample Testimonials
    if (!localStorage.getItem(STORAGE_KEYS.TESTIMONIALS)) {
        const sampleTestimonials = [
            { id: 1, clientName: 'Anjali K.', service: 'Numerology', review: 'I was at a complete crossroads in my career. The numerology consultation gave me shocking clarity — my business name change alone brought new opportunities within weeks. Grateful beyond words.', rating: 5, isApproved: true },
            { id: 2, clientName: 'Rohit S.', service: 'Tarot', review: 'The past life reading was profound. I finally understood why I kept repeating the same patterns in love. Healing has been real and gentle.', rating: 5, isApproved: true },
            { id: 3, clientName: 'Meera P.', service: 'Vastu', review: 'Vastu consultation changed the energy of my home completely. My family feels lighter and more connected. Thank you for your wisdom.', rating: 5, isApproved: true },
            { id: 4, clientName: 'Sunil Verma', service: 'Crystal Healing', review: 'The crystals have brought so much peace to my life. Highly recommended!', rating: 4, isApproved: false }
        ];
        saveData(STORAGE_KEYS.TESTIMONIALS, sampleTestimonials);
    }
    
    // Sample Certificates
    if (!localStorage.getItem(STORAGE_KEYS.CERTIFICATES)) {
        const sampleCertificates = [
            { id: 1, title: 'Best Spiritual Guide', issuer: 'Spiritual Excellence Awards', year: '2023', isVisible: true },
            { id: 2, title: 'Top Rated Service', issuer: 'Trusted Guidance Index', year: '2024', isVisible: true },
            { id: 3, title: 'Sacred Wisdom Award', issuer: 'International Astrology Congress', year: '2022', isVisible: true },
            { id: 4, title: "Client's Choice", issuer: 'Spiritual Seekers Union', year: '2024', isVisible: true }
        ];
        saveData(STORAGE_KEYS.CERTIFICATES, sampleCertificates);
    }
    
    // Sample Courses
    if (!localStorage.getItem(STORAGE_KEYS.COURSES)) {
        const sampleCourses = [
            { id: 1, name: 'Basic Numerology Course', price: '₹4,999', description: 'Learn the fundamentals of numerology including life path numbers, destiny numbers, and name vibrations. Perfect for beginners.', level: 'Beginner' },
            { id: 2, name: 'Professional Numerology Mastery', price: '₹14,999', description: 'Advanced numerology training covering professional consultation techniques, business name analysis, and client management.', level: 'Advanced' },
            { id: 3, name: 'Mobile Numerology Program', price: '₹7,999', description: 'Learn numerology on-the-go with our mobile-friendly course structure. Includes practical exercises and real case studies.', level: 'Intermediate' }
        ];
        saveData(STORAGE_KEYS.COURSES, sampleCourses);
    }
    
    // Sample Products
    if (!localStorage.getItem(STORAGE_KEYS.PRODUCTS)) {
        const sampleProducts = [
            { id: 1, name: 'Amethyst Crystal', price: '₹999', description: 'Purple crystal known for spiritual protection and intuition enhancement. Hand-selected and energetically cleansed.', inStock: true, collection: 'Amethyst', image: '💜' },
            { id: 2, name: 'Rose Quartz Bracelet', price: '₹1,499', description: 'Beautiful rose quartz bracelet for love, harmony, and emotional healing. Adjustable size.', inStock: true, collection: 'Rose Quartz', image: '💗' },
            { id: 3, name: 'Citrine Pendant', price: '₹1,299', description: 'Golden citrine crystal for abundance, prosperity, and success. Comes with a silver chain.', inStock: true, collection: 'Citrine', image: '💛' },
            { id: 4, name: 'Clear Quartz Point', price: '₹799', description: 'Master healer crystal for clarity and energy amplification. Natural point formation.', inStock: false, collection: 'Quartz', image: '🤍' }
        ];
        saveData(STORAGE_KEYS.PRODUCTS, sampleProducts);
    }
}

// CRUD Operations for Leads
function getLeads() { return getData(STORAGE_KEYS.LEADS); }
function saveLeads(leads) { saveData(STORAGE_KEYS.LEADS, leads); }

function addLead(lead) {
    const leads = getLeads();
    const newId = leads.length > 0 ? Math.max(...leads.map(l => l.id)) + 1 : 1;
    lead.id = newId;
    lead.date = new Date().toISOString().split('T')[0];
    leads.push(lead);
    saveLeads(leads);
    showAlert('Lead added successfully');
}

function updateLeadStatus(id, status) {
    const leads = getLeads();
    const lead = leads.find(l => l.id === id);
    if (lead) {
        lead.status = status;
        saveLeads(leads);
        showAlert('Lead status updated');
    }
}

function deleteLead(id) {
    if (confirm('Delete this lead?')) {
        let leads = getLeads();
        leads = leads.filter(l => l.id !== id);
        saveLeads(leads);
        showAlert('Lead deleted');
        return true;
    }
    return false;
}

// CRUD Operations for Services
function getServices() { return getData(STORAGE_KEYS.SERVICES); }
function saveServices(services) { saveData(STORAGE_KEYS.SERVICES, services); }

function toggleServiceStatus(id) {
    const services = getServices();
    const service = services.find(s => s.id === id);
    if (service) {
        service.isActive = !service.isActive;
        saveServices(services);
        showAlert(`Service ${service.isActive ? 'activated' : 'deactivated'}`);
    }
}

function deleteService(id) {
    if (confirm('Delete this service?')) {
        let services = getServices();
        services = services.filter(s => s.id !== id);
        saveServices(services);
        showAlert('Service deleted');
    }
}

// CRUD Operations for Testimonials
function getTestimonials() { return getData(STORAGE_KEYS.TESTIMONIALS); }
function saveTestimonials(testimonials) { saveData(STORAGE_KEYS.TESTIMONIALS, testimonials); }

function toggleTestimonialApproval(id) {
    const testimonials = getTestimonials();
    const testimonial = testimonials.find(t => t.id === id);
    if (testimonial) {
        testimonial.isApproved = !testimonial.isApproved;
        saveTestimonials(testimonials);
        showAlert(`Testimonial ${testimonial.isApproved ? 'approved' : 'unapproved'}`);
    }
}

function deleteTestimonial(id) {
    if (confirm('Delete this testimonial?')) {
        let testimonials = getTestimonials();
        testimonials = testimonials.filter(t => t.id !== id);
        saveTestimonials(testimonials);
        showAlert('Testimonial deleted');
    }
}

// CRUD Operations for Certificates
function getCertificates() { return getData(STORAGE_KEYS.CERTIFICATES); }
function saveCertificates(certificates) { saveData(STORAGE_KEYS.CERTIFICATES, certificates); }

function toggleCertificateVisibility(id) {
    const certificates = getCertificates();
    const cert = certificates.find(c => c.id === id);
    if (cert) {
        cert.isVisible = !cert.isVisible;
        saveCertificates(certificates);
        showAlert(`Certificate ${cert.isVisible ? 'visible' : 'hidden'}`);
    }
}

function deleteCertificate(id) {
    if (confirm('Delete this certificate?')) {
        let certificates = getCertificates();
        certificates = certificates.filter(c => c.id !== id);
        saveCertificates(certificates);
        showAlert('Certificate deleted');
    }
}

// CRUD Operations for Courses
function getCourses() { return getData(STORAGE_KEYS.COURSES); }
function saveCourses(courses) { saveData(STORAGE_KEYS.COURSES, courses); }

function deleteCourse(id) {
    if (confirm('Delete this course?')) {
        let courses = getCourses();
        courses = courses.filter(c => c.id !== id);
        saveCourses(courses);
        showAlert('Course deleted');
    }
}

// CRUD Operations for Products
function getProducts() { return getData(STORAGE_KEYS.PRODUCTS); }
function saveProducts(products) { saveData(STORAGE_KEYS.PRODUCTS, products); }

function toggleProductStock(id) {
    const products = getProducts();
    const product = products.find(p => p.id === id);
    if (product) {
        product.inStock = !product.inStock;
        saveProducts(products);
        showAlert(`Product ${product.inStock ? 'in stock' : 'out of stock'}`);
    }
}

function deleteProduct(id) {
    if (confirm('Delete this product?')) {
        let products = getProducts();
        products = products.filter(p => p.id !== id);
        saveProducts(products);
        showAlert('Product deleted');
    }
}

// Helper Functions
function getStatusBadge(status) {
    const badges = {
        'New': '<span class="status-badge status-new">New</span>',
        'Contacted': '<span class="status-badge status-contacted">Contacted</span>',
        'Session Done': '<span class="status-badge status-session-done">Session Done</span>',
        'Follow-up': '<span class="status-badge status-follow-up">Follow-up</span>'
    };
    return badges[status] || badges['New'];
}