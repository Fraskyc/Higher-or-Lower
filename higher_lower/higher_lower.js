const items = [
    { name: 'Coffe', category:"food" ,  displayed_searches:"113 450 000" , searches: 113450000, image: "Photos/Coffee.jpg" },
    { name: 'iPhone', category:"brands" ,displayed_searches:"388 239 000" , searches: 388239000, image: 'Photos/iPhone.jpg' },

];

let currentIndex = 0;
let score = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function initializeGame() {
    shuffleArray(items);
    currentIndex = 0;
    score = 0;
    updateScore();
    displayItems();
}

function updateScore() {
    document.getElementById('score').textContent = score;
}

function displayItems() {
    const item1 = items[currentIndex];
    const item2 = items[currentIndex + 1];

    document.getElementById('item1-name').textContent = item1.name;
    document.getElementById('item1-searches').textContent = `Searches: ${item1.searches}`;
    document.getElementById('item1').style.backgroundImage = `url(${item1.image})`;

    if (item2) {
        document.getElementById('item2-name').textContent = item2.name;
        document.getElementById('item2').style.backgroundImage = `url(${item2.image})`;
    } else {
        document.getElementById('item2-name').textContent = 'No more items';
    }
}

function guessHigher() {
    const item1 = items[currentIndex];
    const item2 = items[currentIndex + 1];

    if (!item2) return;

    if (item2.searches > item1.searches) {
        currentIndex++;
        score++;
        updateScore();
        displayItems();
    } else {
        alert('Wrong guess! Game over.');
        initializeGame();
    }
}

function guessLower() {
    const item1 = items[currentIndex];
    const item2 = items[currentIndex + 1];

    if (!item2) return;

    if (item2.searches < item1.searches) {
        currentIndex++;
        score++;
        updateScore();
        displayItems();
    } else {
        alert('Wrong guess! Game over.');
        initializeGame();
    }
}

initializeGame();
