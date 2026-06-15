const cards = [
    {
        statistic: "98%",
        title: "Customer Satisfaction",
        colour: "blue"
    },
    {
        statistic: "10,000+",
        title: "Projects Completed",
        colour: "green"
    },
    {
        statistic: "24/7",
        title: "Support Available",
        colour: "orange"
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