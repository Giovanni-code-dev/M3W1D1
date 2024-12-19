    /* JS Exercises should go here */

        // EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.
       
        document.addEventListener('DOMContentLoaded', () => {
            // Seleziona tutti i link <a> all'interno della sezione "Altro"
            const links = document.querySelectorAll('.blog-sidebar div:nth-of-type(3) ol li a');
            
            links.forEach(link => {
                if (link.textContent.includes('Twitter')) {
                    link.parentElement.remove();
                }
            });
        });
        
        // EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".

        document.addEventListener('DOMContentLoaded', () => {
            // Seleziona tutti i link "Continua a leggere" presenti nel jumbotron e nei blog post
            const continuaALeggereLinks = document.querySelectorAll('.jumbotron a, .blog-post a, .row a');
        
            continuaALeggereLinks.forEach(link => {
                if (link.textContent.includes('Continua a leggere')) {
                    link.addEventListener('click', (event) => {
                        event.preventDefault();
                        // Trova il contenitore principale del link (jumbotron o blog post)
                        const parentElement = link.closest('.jumbotron, .row.no-gutters, .row.mb-2');
                        if (parentElement) {
                            parentElement.remove();
                        }
                    });
                }
            });
        });
        

        // EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.


        const authorLinks = document.querySelectorAll('.blog-post-meta a');
        
        authorLinks.forEach(authorLink => {
            authorLink.addEventListener('mouseover', () => {
                const authorName = authorLink.textContent; // Ottiene il testo (nome dell'autore) senza spazi
                alert(`Nome dell'autore: ${authorName}`); // Mostra un alert con il nome dell'autore
            });
        });