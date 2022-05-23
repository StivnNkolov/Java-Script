function getArticleGenerator(articles) {
    let contentDivElement = document.querySelector('#content');
    function arcticleCreator() {
        let currentArticleText = articles.shift();

        if (currentArticleText) {
            let newArticleElement = document.createElement('article');
            newArticleElement.textContent = currentArticleText;
            contentDivElement.appendChild(newArticleElement);
        }
    }

    return arcticleCreator;
}
