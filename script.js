const cards = [
    {
        topText: "More than",
        statistic: "12,000,000",
        bottomText: "delighted guests",
        colour: "green"
    },
    {
        topText: "Find us in",
        statistic: "50",
        bottomText: "countries",
        colour: "pink"
    },
    {
        topText: "Over",
        statistic: "800,000,000",
        bottomText: "darts thrown",
        colour: "blue"
    }
];

const container = document.getElementById("featureCards");

cards.forEach(card => {

    const article = document.createElement("article");

    article.className = `card ${card.colour}`;

    article.innerHTML = `
  <p class="top-text">${card.topText}</p>
  <h2>${card.statistic}</h2>
  <p class="bottom-text">${card.bottomText}</p>
`;

    container.appendChild(article);
});