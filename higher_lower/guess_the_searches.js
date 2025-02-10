//all the items
const items = [
    { name: 'Coffee', category:"food" ,  displayed_searches:"113 450 000" , searches: 113450000, image: "Photos/Coffee.jpg" },
    { name: 'iPhone', category:"brands" ,displayed_searches:"388 239 000" , searches: 388239000, image: 'Photos/iPhone.jpg' },
    { name: 'Android', category:"brands" , displayed_searches:"104 000 000" , searches: 104000000, image: 'Photos/Android.jpg' },
    { name: 'Keychron', category:"brands", displayed_searches:"1 259 000", searches: 1259000, image: 'Photos/Keychron.jpg' },
    { name: 'Xiaomi',category:"brands", displayed_searches:"49 400 000" , searches: 49400000, image: 'Photos/Xiaomi.jpg' },
    { name: 'Oxdog', category:"brands",displayed_searches:"57 500" , searches: 57500, image: 'Photos/Oxdog.jpg' },
    { name: 'Salming', category:"brands", displayed_searches:"77 200" , searches: 77200, image: 'Photos/Salming.jpg' },
    { name: 'Samsung', category:"brands", displayed_searches:"110 000 000" , searches: 110000000, image: 'Photos/Samsung.jpg' },
    { name: 'Nokia', category:"brands",  displayed_searches:"17 500 000" , searches: 17500000, image: 'Photos/Nokia.jpg' },
    { name: 'OnePlus', category:"brands" , displayed_searches:"40 250 000" , searches: 40250000, image: 'Photos/OnePlus.jpg' },
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
    { name: 'Walmart', category:"Brands" , displayed_searches:"71 000 000" , searches: 71000000, image: 'Photos/Walmart.jpg' },
    { name: 'Spotify', category:"Sites" , displayed_searches:"141 000 000" , searches: 141000000, image: 'Photos/Spotify.jpg' },
    { name: 'Apple Music', category:"Sites" , displayed_searches:"74 000 000" , searches: 74000000, image: 'Photos/AppleMusic.jpg' },
    { name: 'Google Pixel', category:"brands", displayed_searches:"36 000 000", searches:36000000, image: "Photos/GooglePixel.jpg" },
    { name: 'Google Home', category:"others", displayed_searches:"26 000 000", searches:26000000, image: "Photos/GoogleHome.jpg" },
    { name: 'Elton John' , category:"people" , displayed_searches:"6 200 000" , searches:6200000, image:"Photos/EltonJohn.jpg" },
    { name: 'Maroon 5' , category:"people" , displayed_searches:"7 700 000" , searches:7700000, image:"Photos/Maroon5.jpg" },
    { name: 'Drake'    , category:"people" , displayed_searches:"16 100 000" , searches:16100000, image:"Photos/Drake.jpg" },
    { name: 'The Weeknd' , category:"people" , displayed_searches:"21 900 000" , searches:21900000, image:"Photos/TheWeekend.jpg" },
    { name: 'Michael Jackson', category:"people" , displayed_searches:"11 800 000" , searches:11800000, image:"Photos/MichaelJackson.jpg" },
    { name: 'Eminem'    , category:"people" , displayed_searches:"10 600 000" , searches:10600000, image:"Photos/Eminem.jpg" },
    { name: 'Linkin Park' , category:"people" , displayed_searches:"7 500 000" , searches:7500000, image:"Photos/LinkinPark.jpg" },
    { name: 'Lady Gaga' , category:"people" , displayed_searches:" 19 700 000" , searches:19700000, image:"Photos/LadyGaga.jpg" },
    { name: 'Roblox' , category:"Sites" , displayed_searches:"391 000 000" , searches:391000000, image:"Photos/Roblox.jpg" },
    { name: 'Wikipedia' , category:"Sites" , displayed_searches:"159 200 000" , searches:159200000, image:"Photos/Wikipedia.jpg"},
    { name: 'Twitch' , category:"Sites" , displayed_searches:"161 100 000" , searches:161100000, image:"Photos/Twitch.jpg" },
    { name: 'Reddit' , category:"Sites" , displayed_searches:"113 300 000" , searches:113300000, image:"Photos/Reddit.jpg" },
    { name: 'Chat GPT' , category:"Sites" , displayed_searches:"231 400 000" , searches:231400000, image:"Photos/ChatGPT.jpg" },
    { name: 'Github' , category:"Sites" , displayed_searches:"142 300 000" , searches:142300000, image:"Photos/Github.jpg" },
    { name: 'Ebay' , category:"Sites" , displayed_searches:"108 000 000" , searches:108000000, image:"Photos/Ebay.jpg"},
    { name: 'Booking.com' , category:"Sites" , displayed_searches:"96 500 000" , searches:96500000, image:"Photos/Booking.jpg"},
    { name: 'ikea' , category:"Brands" , displayed_searches:"78 400 000" , searches:78400000, image:"Photos/Ikea.jpg"},
    { name: 'Zara' , category:"Brands" , displayed_searches:"43 900 000" , searches:43900000, image:"Photos/Zara.jpg"},
    { name: 'Etsy' , category:"Sites" , displayed_searches:"45 120 000" , searches:45120000, image:"Photos/Etsy.jpg"},
    { name: 'Nintendo' , category:"Brands" , displayed_searches:"71 700 000" , searches:71700000, image:"Photos/Nintendo.jpg"},
    { name: 'Sony' , category:"Brands" , displayed_searches:"56 100 000" , searches:56100000, image:"Photos/Sony.jpg"},
    


];


















let player1Score = 0;
let player2Score = 0;
let player1Wins = 0;
let player2Wins = 0;
let currentItem;

document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });
});


function loadNewItem() {
    currentItem = items[Math.floor(Math.random() * items.length)];
    document.getElementById('itemImage').src = currentItem.image;
    document.getElementById('itemName').textContent = currentItem.name;
    
}
//show number of searches on the last item with a kůl transition
function showDarkenedImageEffect() {
    // Darken the image
    itemImage.classList.add('dark');

    setTimeout(() => {
    textOverlay.style.opacity = 1;

    setTimeout(() => {
        // Reset image and overlay
        itemImage.classList.remove('dark');
        textOverlay.style.opacity = 0;

        loadNewItem();
    }, 3000);
    }, 500);
}

//show the number of searches for the last guessed item
function ShowPreviousSearches() {
    document.getElementById('textOverlay').textContent = currentItem.displayed_searches;
}
function submitGuesses() {
    const player1GuessInput = document.getElementById('player1Guess');
    const player2GuessInput = document.getElementById('player2Guess');
    const player1Guess = parseInt(player1GuessInput.value) || 0;
    const player2Guess = parseInt(player2GuessInput.value) || 0;
    const actualSearches = currentItem.searches;

    const diff1 = Math.abs(player1Guess - actualSearches);
    const diff2 = Math.abs(player2Guess - actualSearches);

    if (diff1 < diff2) {
        player1Score++;
    } else if (diff2 < diff1) {
        player2Score++;
    }
    
    showDarkenedImageEffect();

    updateScores();

    // Clear player inputs
    player1GuessInput.value = "";
    player2GuessInput.value = "";

    
    
    
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

    //show correct num of searches for last guess
    ShowPreviousSearches();

}

//initial item to guess
    loadNewItem();