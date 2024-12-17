// EXTRA 1: Rimuovere il link "Twitter" sotto la sezione "Altro" nell'elemento "aside" al caricamento della pagina
window.addEventListener('DOMContentLoaded', () => {
    const twitterLink = document.querySelector(".blog-sidebar .p-4 ol li a[href*='twitter']");
    if (twitterLink) {
        twitterLink.parentElement.remove(); // Rimuove l'intero elemento <li> che contiene il link
    }

    // EXTRA 2: Rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere"
    const readMoreLinks = document.querySelectorAll("a.font-weight-bold, a.stretched-link");
    readMoreLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Evita il comportamento predefinito del link
            const parentPost = link.closest('.blog-post, .col-md-6'); // Seleziona il contenitore padre
            if (parentPost) {
                parentPost.remove(); // Rimuove l'intero contenitore del post
            }
        });
    });

    // EXTRA 3: Creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post
    const authorLinks = document.querySelectorAll(".blog-post-meta a");
    authorLinks.forEach(authorLink => {
        authorLink.addEventListener('mouseover', () => {
            const authorName = authorLink.textContent.trim(); // Ottiene il nome dell'autore
            alert(`Nome dell'autore: ${authorName}`);
        });
    });
});
