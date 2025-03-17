const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");

const toggle = document.querySelector(".toggle");

let selected = card2;

console.log(card2 === selected);

card1.addEventListener("click", () => {
    selected.classList.toggle("selected");

    card1.classList.toggle("selected");
    selected = card1;
});

card2.addEventListener("click", () => {
    selected.classList.toggle("selected");
    card2.classList.toggle("selected");
    selected = card2;
});

card3.addEventListener("click", () => {
    selected.classList.toggle("selected");
    card3.classList.toggle("selected");
    selected = card3;
});

toggle.addEventListener("click", () => {
    toggle.classList.toggle("serious");

    if (toggle.classList.contains("serious")) {
        card1.innerHTML = `
            <h3>Serious Fact 1 </h3>
                <p>
                    I want to do cybersecurity
                </p>
                <ul>
                    <li>I have done programs.</li>
                    <li>It interests me.</li>
                    <li>
                        It does look hard, but I'm willing to learn.
                    </li>
                </ul>
        `;
        card2.innerHTML = `
            <h3>Serious Fact 2 </h3>
                <p>
                    I am a funny person
                </p>
                <ul>
                    <li>I like to make people laugh.</li>
                    <li>It's natural to me.</li>
                    <li>
                        My jokes are never serious.
                    </li>
                </ul>
        `;

        card3.innerHTML = `
        <h3>Serious Fact 3 </h3>
            <p>
                I am a competitive person
            </p>
            <ul>
                    <li>I HATE losing.</li>
                    <li>It tells a lot about me as a person.</li>
                    <li>
                        I would say it is a positive and negative trait.
                    </li>
                </ul>
    `;
    }

    if (!toggle.classList.contains("serious")) {
        card1.innerHTML = `
            <h3>Silly Fact 1</h3>
                <p>
                    I am extraordinarily talented at certain video games.
                </p>
                <ul>
                    <li>Fortnite</li>
                    <li>Rainbow Six Siege</li>
                    <li>
                        Clash Royale
                    </li>
                </ul>
        `;
        card2.innerHTML = `
            <h3>Silly Fact 2</h3>
                <p>
                    I have a crazy sweet tooth.
                </p>
                <ul>
                    <li>Soda is my most consumed sugar</li>
                    <li>Candy, my favorite being skittles</li>
                    <li>
                        Chocolate, like kitkats and snickers
                    </li>
                </ul>
        `;

        card3.innerHTML = `
        <h3>Silly Fact 3</h3>
                <p>
                    I love to play soccer.
                </p>
                <ul>
                    <li>I am a winger.</li>
                    <li>I play for highschool and club.</li>
                    <li>
                        I am fast.
                    </li>
                </ul>
    `;
    }
});
