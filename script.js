// 1️⃣ Rimuove automaticamente il link "Twitter" sotto la sezione "Altro" al caricamento della pagina
document.addEventListener('DOMContentLoaded', () => {
    // Seleziona il link "Twitter" all'interno dell'elemento aside
    const twitterLink = document.querySelector('.blog-sidebar ol.list-unstyled li a[href*="Twitter"]');
    if (twitterLink) {
        twitterLink.parentElement.remove(); // Rimuove il padre <li> per eliminare l'intero elemento
    }
});

// 2️⃣ Rimuove il padre del link "Continua a leggere" quando viene cliccato
const continuaALeggereLinks = document.querySelectorAll('.jumbotron p > a.font-weight-bold, .blog-main .blog-post a.stretched-link');

continuaALeggereLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Impedisce il comportamento predefinito del link
        const parentElement = link.closest('.blog-post, .jumbotron'); // Seleziona il contenitore padre più vicino (blog-post o jumbotron)
        if (parentElement) {
            parentElement.remove(); // Rimuove l'intero contenitore del post o del jumbotron
        }
    });
});

// 3️⃣ Mostra un alert con il nome dell'autore quando il cursore passa sopra il nome
const authorLinks = document.querySelectorAll('.blog-post-meta a');

authorLinks.forEach(authorLink => {
    authorLink.addEventListener('mouseover', () => {
        const authorName = authorLink.textContent.trim(); // Ottiene il testo (nome dell'autore) senza spazi
        alert(`Nome dell'autore: ${authorName}`); // Mostra un alert con il nome dell'autore
    });
});
