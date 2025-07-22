document.addEventListener('DOMContentLoaded', function() {
    // Cari semua node yang memiliki anak (yaitu <span> yang punya saudara <ul>)
    const nodesWithChildren = document.querySelectorAll('.org-chart .node');

    nodesWithChildren.forEach(node => {
        // Cek apakah node ini punya elemen <ul> sebagai saudaranya
        if (node.nextElementSibling && node.nextElementSibling.tagName === 'UL') {
            
            // Tambahkan kelas khusus untuk styling
            node.classList.add('has-children');
            
            // Tambahkan event listener untuk klik
            node.addEventListener('click', function(event) {
                // Toggle class 'active' pada elemen <li> induknya
                event.target.parentElement.classList.toggle('active');
            });
        }
    });
});