document.getElementById('year').textContent = new Date().getFullYear();

// Untuk halaman contact
const contactForm = document.getElementById('simulation-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('sim-name').value;
        const email = document.getElementById('sim-email').value;
        const message = document.getElementById('sim-message').value;
        
        // Simulasi pengiriman
        console.log('=== SIMULASI PENGIRIMAN EMAIL ===');
        console.log('Kepada: apri.cahyadi77@gmail.com');
        console.log('Dari:', name, `<${email}>`);
        console.log('Pesan:', message);
        console.log('=================================');
        
        alert(`Simulasi berhasil!\n\nData telah "dikirim" ke apri.cahyadi77@gmail.com.`);
        
        // Reset form
        this.reset();
        
        // Tampilkan pesan sukses
        const successMsg = document.createElement('div');
        successMsg.innerHTML = '<p style="color: green; margin-top: 10px;">✓ Data telah disimulasikan untuk dikirim ke apri.cahyadi77@gmail.com</p>';
        successMsg.id = 'success-msg';
        
        // Hapus pesan sebelumnya jika ada
        const oldMsg = document.getElementById('success-msg');
        if (oldMsg) oldMsg.remove();
        
        this.appendChild(successMsg);
        
        // Hapus setelah 5 detik
        setTimeout(() => {
            const msg = document.getElementById('success-msg');
            if (msg) msg.remove();
        }, 5000);
    });
}