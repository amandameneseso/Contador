document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function() {
            // Remove a classe active de todos os links
            links.forEach(link => link.classList.remove('active'));
            
            // Adiciona a classe active ao link clicado
            this.classList.add('active');
        });

        // Verifica se a URL atual corresponde ao link e marca o link como ativo
        if (window.location.href.includes(link.href)) {
            link.classList.add('active');
        }
    });
});