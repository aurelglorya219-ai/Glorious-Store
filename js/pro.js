    confirmBtn.addEventListener('click', function () {
    const userConfirmed = confirm('ini adalah confirm box!');
    if (userConfirmed) {
        // Jika setuju, redirect ke link
        window.location.href = 'https://wa.me//628787705725';
    } else {
        // Jika tidak setuju, tampilkan alert
        alert('kamu tidak setuju');
    }}