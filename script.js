// Mendapatkan elemen-elemen form
const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');

// Menambahkan event listener saat form disubmit
form.addEventListener('submit', function(event) {
    // Reset pesan error
    errorMessage.textContent = '';

    // Validasi email
    const emailValue = emailInput.value;
    if (!validateEmail(emailValue)) {
        errorMessage.textContent = 'Email tidak valid!';
        event.preventDefault(); // Mencegah form dikirim jika email tidak valid
        return;
    }

    // Validasi password (misalnya minimal 6 karakter)
    const passwordValue = passwordInput.value;
    if (passwordValue.length < 6) {
        errorMessage.textContent = 'Password harus minimal 6 karakter!';
        event.preventDefault(); // Mencegah form dikirim jika password kurang panjang
        return;
    }

    // Jika tidak ada masalah, form akan dikirim ke PHP
});

// Fungsi validasi email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
