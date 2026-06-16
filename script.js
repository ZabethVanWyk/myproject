const cards = [
    {
        topText: "More than",
        statistic: "12,000,000",
        bottomText: "delighted guests",
        colour: "green",
        image: "images/hand.svg",
        alt: "Raised hand illustration"
    },
    {
        topText: "Find us in",
        statistic: "50",
        bottomText: "countries",
        colour: "pink",
        image: "images/earth.svg",
        alt: "line drawing of the earth illustration"
    },
    {
        topText: "Over",
        statistic: "800,000,000",
        bottomText: "darts thrown",
        colour: "blue",
        image: "images/dart.svg",
        alt: "dart illustration"
    }
];

const container = document.getElementById("featureCards");

cards.forEach(card => {

    const article = document.createElement("article");

    article.className = `card ${card.colour}`;

    article.innerHTML = `
    <div class="card-content">
        <p class="top-text">${card.topText}</p>
        <h2>${card.statistic}</h2>
        <p class="bottom-text">${card.bottomText}</p>
    </div>
    <img src="${card.image}" alt="${card.alt}" class="card-image">
`;

    container.appendChild(article);
});