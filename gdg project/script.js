document.addEventListener('DOMContentLoaded', () => {
    const loginPage = document.getElementById('login-page');
    const studentDashboard = document.getElementById('student-dashboard');
    const teacherDashboard = document.getElementById('teacher-dashboard');
    
    const roleSelect = document.getElementById('role');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('login-btn');
    
    const closeStudentDashboard = document.getElementById('close-student-dashboard');
    const closeTeacherDashboard = document.getElementById('close-teacher-dashboard');

    loginBtn.addEventListener('click', () => {
        const role = roleSelect.value;
        const email = emailInput.value;
        const password = passwordInput.value;

        // Simple validation (you'd want more robust validation in a real app)
        if (email && password) {
            loginPage.classList.add('hidden');
            
            if (role === 'student') {
                studentDashboard.classList.remove('hidden');
            } else {
                teacherDashboard.classList.remove('hidden');
            }
        } else {
            alert('Please enter email and password');
        }
    });

    closeStudentDashboard.addEventListener('click', () => {
        studentDashboard.classList.add('hidden');
        loginPage.classList.remove('hidden');
    });

    closeTeacherDashboard.addEventListener('click', () => {
        teacherDashboard.classList.add('hidden');
        loginPage.classList.remove('hidden');
    });

    // Optional: Add click handlers for dashboard cards if needed
    const dashboardCards = document.querySelectorAll('.dashboard-card');
    dashboardCards.forEach(card => {
        card.addEventListener('click', () => {
            alert(`You clicked on: ${card.textContent}`);
        });
    });
});