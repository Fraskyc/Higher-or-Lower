const items = [
    { name: 'Coffe', category:"food" ,  displayed_searches:"113 450 000" , searches: 113450000, image: "Photos/Coffee.jpg" },
    { name: 'iPhone', category:"brands" ,displayed_searches:"388 239 000" , searches: 388239000, image: 'Photos/iPhone.jpg' },
    { name: 'Android', category:"brands" , displayed_searches:"104 000 000" , searches: 104000000, image: 'Photos/Android.jpg' },
    { name: 'Keychron', category:"brands", displayed_searches:"1 259 000", searches: 1259000, image: 'Photos/Keychron.jpg' },
    { name: 'Xiaomi',category:"brands", displayed_searches:"49 400 000" , searches: 49400000, image: 'Photos/Xiaomi.jpg' },
    { name: 'Oxdog', category:"brands",displayed_searches:"57 500" , searches: 57500, image: 'Photos/Oxdog.jpg' },
    { name: 'Salming', category:"brands", displayed_searches:"77 200" , searches: 77200, image: 'Photos/Salming.jpg' },
    { name: 'Samsung', category:"brands", displayed_searches:"110 000 000" , searches: 110000000, image: 'Photos/Samsung.jpg' },
    { name: 'Nokia', category:"brands",  displayed_searches:"17 500 000" , searches: 17500000, image: 'Photos/Nokia.jpg' },
    { name: 'OnePlus', category:"brands" , displayed_searches:"6 250 000" , searches: 6250000, image: 'Photos/OnePlus.jpg' },
    { name: 'Windows', category:"brands" , displayed_searches:"102 000 000" , searches: 102000000, image: 'Photos/Windows.jpg' },
    { name: 'Mac', category:"brands" , displayed_searches:"63 000 000" , searches: 63000000, image: 'Photos/Mac.jpg' },
    { name: 'Linux', category:"brands" , displayed_searches:"42 300 000" , searches: 42300000, image: 'Photos/Linux.jpg' },
    { name: 'Facebook', category:"Sites" , displayed_searches:"280 000 000" , searches: 280000000, image: 'Photos/Facebook.jpg' },
    { name: 'Instagram', category:"Sites" , displayed_searches:"222 000 000" , searches: 222000000, image: 'Photos/Instagram.jpg' },
    { name: 'Twitter', category:"Sites" , displayed_searches:"188 000 000" , searches: 188000000, image: 'Photos/Twitter.jpg' },
    { name: 'Snapchat', category:"Sites" , displayed_searches:"108 000 000" , searches: 108000000, image: 'Photos/Snapchat.jpg' },
    { name: 'Pinterest', category:"Sites" , displayed_searches:"126 000 000" , searches: 126000000, image: 'Photos/Pinterest.jpg' },
    { name: 'LinkedIn', category:"Sites" , displayed_searches:"194 000 000" , searches: 194000000, image: 'Photos/LinkedIn.jpg' },
    { name: 'YouTube', category:"Sites" , displayed_searches:"438 000 000" , searches: 438000000, image: 'Photos/YouTube.jpg' },
    { name: 'Netflix', category:"Sites" , displayed_searches:"237 000 000" , searches: 237000000, image: 'Photos/Netflix.jpg' },
    { name: 'Hulu', category:"Sites" , displayed_searches:"135 000 000" , searches: 135000000, image: 'Photos/Hulu.jpg' },
    { name: 'Disney+', category:"Sites" , displayed_searches:"131 000 000" , searches: 131000000, image: 'Photos/Disney+.jpg' },
    { name: 'Amazon', category:"Sites" , displayed_searches:"245 000 000" , searches: 245000000, image: 'Photos/Amazon.jpg' },
    { name: 'Walmart', category:"Brands" , displayed_searches:"131 000 000" , searches: 131000000, image: 'Photos/Walmart.jpg' },
    


];

let player1Score = 0;
let player2Score = 0;
let player1Wins = 0;
let player2Wins = 0;
let currentItem;

function loadNewItem() {
    currentItem = items[Math.floor(Math.random() * items.length)];
    document.getElementById('itemImage').src = currentItem.image;
    document.getElementById('itemName').textContent = currentItem.name;
}

function submitGuesses() {
    const player1Guess = parseInt(document.getElementById('player1Guess').value) || 0;
    const player2Guess = parseInt(document.getElementById('player2Guess').value) || 0;
    const actualSearches = currentItem.searches;

    const diff1 = Math.abs(player1Guess - actualSearches);
    const diff2 = Math.abs(player2Guess - actualSearches);

    if (diff1 < diff2) {
        player1Score++;
    } else if (diff2 < diff1) {
        player2Score++;
    }

    updateScores();
}

function updateScores() {
    document.getElementById('player1Score').textContent = player1Score;
    document.getElementById('player2Score').textContent = player2Score;

    if (player1Score === 5) {
        player1Wins++;
        player1Score = 0;
        player2Score = 0;
    } else if (player2Score === 5) {
        player2Wins++;
        player1Score = 0;
        player2Score = 0;
    }

    document.getElementById('player1Wins').textContent = player1Wins;
    document.getElementById('player2Wins').textContent = player2Wins;
    loadNewItem();
}

loadNewItem();
