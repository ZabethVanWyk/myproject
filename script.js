const cards = [
    {
        title: "More than",
        statistic: "12,000,000",
        title: "delighted guests",
        colour: "green"
    },
    {
        statistic: "50",
        title: "countries",
        colour: "pink"
    },
    {
        statistic: "800,000,000",
        title: "darts thrown",
        colour: "blue"
    }
];

const container = document.getElementById("featureCards");

cards.forEach(card => {

    const article = document.createElement("article");

    article.className = `card ${card.colour}`;

    article.innerHTML = `
        <h2>${card.statistic}</h2>
        <p>${card.title}</p>
    `;

    container.appendChild(article);
});