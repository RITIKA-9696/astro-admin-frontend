document.addEventListener('DOMContentLoaded', function() {
    loadCoursesTable();
});

function loadCoursesTable() {
    const courses = getData('courses');
    
    let tableHTML = `
        <div class="card">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
                <h3>Numerology Courses</h3>
                <button class="btn btn-success" onclick="addCourse()">+ Add Course</button>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="data-table">
                        <thead><tr><th>Name</th><th>Price</th><th>Description</th><th>Enroll Link</th><th>Actions</th></tr></thead>
                        <tbody>
    `;
    
    courses.forEach(course => {
        tableHTML += `
            <tr>
                <td>${course.name}</td>
                <td>${course.price}</td>
                <td>${course.description.substring(0, 50)}...</td>
                <td><a href="${course.enrollLink}" target="_blank">WhatsApp</a></td>
                <td>
                    <button class="btn btn-sm btn-edit" onclick="editCourse(${course.id})">Edit</button>
                    <button class="btn btn-sm btn-delete" onclick="deleteCourse(${course.id})">Delete</button>
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

function deleteCourse(id) {
    if (confirm('Delete this course?')) {
        let courses = getData('courses');
        courses = courses.filter(c => c.id !== id);
        saveData('courses', courses);
        location.reload();
        showAlert('Course deleted');
    }
}

function editCourse(id) {
    showAlert('Edit course form coming soon', 'error');
}

function addCourse() {
    showAlert('Add course form coming soon', 'error');
}