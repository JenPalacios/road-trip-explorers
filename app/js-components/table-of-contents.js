function setIdsOnElements(elements) {
    if(elements.length > 0) {
        for (let title of elements) {
            const titleText = title.innerHTML;
            const preparedText = titleText.split(' ').join('-').toLowerCase();
            title.setAttribute('id', preparedText);
        }
    }
}

export function initTableOfContents() {
    const toc = document.getElementById('js-rte-table-of-contents');

    if (toc) {
        const h2Titles = document.getElementsByTagName('h2');
        const h3Titles = document.getElementsByTagName('h3');
        setIdsOnElements(h2Titles);
        setIdsOnElements(h3Titles);
    }

    tocbot.init({
        orderedList: false,
        scrollSmooth: false,
        scrollSmoothDuration: 0,
        headingsOffset: 10,
        tocSelector: '.rte-toc',
        contentSelector: '.article-content',
        headingSelector: 'h2',
    });
}