let gameBoard = document.getElementById("game-board")
let letterBlocks = []
let rowIndex = 0;
let inputIndex = 0;
let playerWon = false

let categoryText = document.getElementById("category").childNodes[0]
let verdictText = document.getElementById("verdict").childNodes[0]

let playAgainBtn = document.getElementById("try-again-btn")
playAgainBtn.addEventListener('click', playAgain)

playAgainBtn.style.display = "none";

const moviesTVWords = [
    "Inception", "Titanic", "Avatar", "Gladiator", "Matrix",
    "Interstellar", "Rocky", "Alien", "Psycho", "Godfather",
    "Scarface", "Parasite", "Whiplash", "Amelie", "Jaws",
    "BreakingBad", "Friends", "Seinfeld", "Dexter", "Sherlock",
    "Narcos", "Dark", "TheOffice", "Westworld", "Sopranos",
    "MadMen", "Fargo", "House", "Vikings", "Batman",
    "Superman", "IronMan", "Deadpool", "Joker", "LoganFilm",
    "Watchmen", "Dune", "Tenet", "Chernobyl", "PeakyShow",
    "TheBoys", "Arcane", "Wednesday", "Invincible",
    "Andor", "Loki", "Lost", "Ozark",
    "Mindhunter"
  ];
  const moviesTVHints = [
    "Dreams within dreams",
    "Tragic ship romance",
    "Blue aliens on Pandora",
    "Roman revenge epic",
    "Reality is simulated",
    "Journey beyond space",
    "Underdog boxing story",
    "Deadly space creature",
    "Psychological horror",
    "Powerful crime family",
    "Rise of a gangster",
    "Class warfare thriller",
    "Obsessive jazz drummer",
    "French romantic comedy",
    "Killer shark terror",
    "Teacher turns criminal",
    "Six friends in NYC",
    "A show about nothing",
    "Killer with a code",
    "Modern detective series",
    "Drug cartel drama",
    "German time mystery",
    "Office mockumentary",
    "Futuristic theme park",
    "Mob boss therapy",
    "1960s ad agency",
    "Snowy crime stories",
    "Genius rude doctor",
    "Norse warriors",
    "Dark knight hero",
    "Man of steel",
    "Armored billionaire",
    "Sarcastic antihero",
    "Villain origin tale",
    "Broken mutant hero",
    "Masked vigilantes",
    "Desert sci-fi epic",
    "Time inversion thriller",
    "Nuclear disaster drama",
    "British crime family",
    "Corrupt superheroes",
    "Animated fantasy series",
    "Addams family daughter",
    "Violent animated hero",
    "Star Wars rebellion",
    "Trickster god series",
    "Island survivors",
    "Money laundering drama",
    "Serial killer profiling"
  ];
  
  
  const videoGameWords = [
    "Minecraft", "Fortnite", "Skyrim", "EldenRing", "DarkSouls",
    "Bloodborne", "Overwatch", "Valorant", "Apex", "Halo",
    "Doom", "Cyberpunk", "Witcher", "Fallout", "Starfield",
    "Zelda", "Mario", "Metroid", "Pokemon", "AnimalCross",
    "Terraria", "StardewValley", "Undertale", "Hades", "Celeste",
    "DeadCells", "Cuphead", "Sekiro", "GhostOfTsushima", "GodOfWar",
    "RedDeadRedemption", "GrandTheftAuto", "MaxPayne", "Control", "AlanWake",
    "MassEffect", "DragonAge", "Diablo", "PathOfExile", "Destiny",
    "Warframe", "LeagueOfLegends", "Dota", "CounterStrike",
    "Rust", "Subnautica", "NoMansSky", "OuterWilds",
    "HollowKnight"
  ];
  const videoGameHints = [
    "Blocky sandbox survival",
    "Battle royale hit",
    "Open fantasy RPG",
    "Brutal open world",
    "Punishing combat RPG",
    "Gothic cosmic horror",
    "Team hero shooter",
    "Tactical FPS",
    "Fast battle royale",
    "Sci-fi soldiers",
    "Demonic shooter",
    "Futuristic city RPG",
    "Monster hunter saga",
    "Post-nuclear wasteland",
    "Space exploration RPG",
    "Legendary adventure",
    "Famous plumber",
    "Space bounty hunter",
    "Creature collecting",
    "Peaceful life sim",
    "2D sandbox adventure",
    "Farming and friendships",
    "Story-driven indie",
    "Greek roguelike",
    "Precision platformer",
    "Roguelike action",
    "Cartoon boss fights",
    "Shinobi revenge",
    "Samurai open world",
    "Norse mythology brawler",
    "Wild west epic",
    "Crime sandbox chaos",
    "Bullet-time noir",
    "Supernatural shooter",
    "Psychological horror",
    "Galaxy-saving RPG",
    "Fantasy party RPG",
    "Demon-slaying loot",
    "Complex action RPG",
    "Sci-fi looter shooter",
    "Space ninja action",
    "Popular MOBA",
    "Classic MOBA rival",
    "Competitive FPS",
    "Harsh survival",
    "Ocean survival mystery",
    "Infinite universe",
    "Time-loop mystery",
    "Dark insect kingdom"
  ];
  

  const sportsWords = [
    "Soccer", "Football", "Basketball", "Baseball", "Hockey",
    "Tennis", "Cricket", "Rugby", "GolfGame", "Boxing",
    "MMASport", "Wrestling", "Fencing", "Archery", "Cycling",
    "Swimming", "Running", "Marathon", "Triathlon", "Skiing",
    "Snowboard", "Skating", "Surfing", "Climbing", "Rowing",
    "FormulaOne", "NASCAR", "MotoGP", "IndyCar", "RallyRace",
    "Olympics", "WorldCup", "SuperBowl", "NBAFinals",
    "Wimbledon", "UFCFight", "FIFAOrg", "LaLiga",
    "PremierLg", "SerieA", "Bundesliga", "MLBLeague",
    "NFLLeague", "NBALeague", "NHLLeague", "Esports",
    "ChessGame", "PokerGame", "Badminton"
  ];
  const sportsHints = [
    "World’s most popular sport",
    "American gridiron",
    "Hoop-based team sport",
    "Bat and ball game",
    "Ice team sport",
    "Racket court sport",
    "Wicket bat sport",
    "Physical team sport",
    "Precision club game",
    "Punching combat sport",
    "Mixed martial arts",
    "Scripted combat sport",
    "Sword dueling",
    "Bow and target",
    "Two-wheel endurance",
    "Racing in water",
    "Track running",
    "Long distance race",
    "Three-sport event",
    "Winter slope sport",
    "Extreme snow sport",
    "Ice blade sport",
    "Wave riding",
    "Rock scaling",
    "Water team race",
    "Elite car racing",
    "Stock car racing",
    "Motorcycle racing",
    "Open-wheel racing",
    "Off-road racing",
    "Global sports event",
    "International football",
    "NFL championship",
    "Basketball finals",
    "Grand slam tennis",
    "Ultimate fighting",
    "Football authority",
    "Spanish football league",
    "English football league",
    "Italian football league",
    "German football league",
    "Baseball league",
    "Football league",
    "Basketball league",
    "Hockey league",
    "Competitive gaming",
    "Strategy board game",
    "Card gambling",
    "Fast racket sport"
  ];
  

  const animalWords = [
    "Elephant", "Giraffe", "Dolphin", "Kangaroo", "Alligator",
    "Cheetah", "Leopard", "Panther", "Rhinoceros", "Hippopotam",
    "Crocodile", "Chimpanzee", "Gorilla", "Orangutan", "Baboon",
    "Meerkat", "Warthog", "Hyena", "Jackal", "Antelope",
    "Buffalo", "Bison", "Moose", "Caribou", "Reindeer",
    "PolarBear", "Grizzly", "BlackBear", "Koala", "Panda",
    "RedPanda", "Armadillo", "Porcupine", "Hedgehog", "Platypus",
    "Penguin", "Flamingo", "Peacock", "Ostrich", "Cassowary",
    "Albatross", "Seagull", "Pelican", "Octopus", "Squid",
    "Starfish", "Seahorse", "Manatee", "Narwhal"
  ];
  const animalHints = [
    "Largest land animal",
    "Tallest land animal",
    "Highly intelligent marine mammal",
    "Marsupial that hops",
    "Large reptile with powerful jaws",
    "Fastest land animal",
    "Spotted big cat",
    "Stealthy black cat",
    "Horned giant herbivore",
    "Massive semi-aquatic mammal",
    "Large river reptile",
    "Highly intelligent primate",
    "Powerful great ape",
    "Red-haired great ape",
    "Primate with long snout",
    "Small desert mongoose",
    "Wild pig with tusks",
    "Laughing scavenger",
    "Cunning wild canine",
    "Graceful grazing animal",
    "Large horned grazer",
    "Shaggy wild cattle",
    "Largest deer species",
    "Northern deer species",
    "Cold-region deer",
    "White Arctic bear",
    "Large brown bear",
    "North American bear",
    "Tree-dwelling marsupial",
    "Black and white bear",
    "Smaller bamboo eater",
    "Armored digging mammal",
    "Spiny rodent",
    "Small spiny mammal",
    "Egg-laying mammal",
    "Flightless Antarctic bird",
    "Pink long-legged bird",
    "Colorful display bird",
    "Fast running bird",
    "Dangerous flightless bird",
    "Large ocean bird",
    "Common coastal bird",
    "Fish-eating seabird",
    "Eight-armed sea creature",
    "Ten-armed sea creature",
    "Sea star animal",
    "Tiny horse-shaped fish",
    "Gentle sea cow",
    "Unicorn of the sea"
  ];

  
let words = null
let hints = null

let categoryIndex = Math.floor(Math.random() * 4)
let categoryName = ""

switch (categoryIndex) {
    case 0:
        categoryName = "Movies & TV-Shows"
        words = moviesTVWords
        hints = moviesTVHints
        break;
    case 1:
        categoryName = "Video Games"
        words = videoGameWords
        hints = videoGameHints
        break;
    case 2:
        categoryName = "Sports"
        words = sportsWords
        hints = sportsHints
        break;
    case 3:
        categoryName = "Animals"
        words = animalWords
        hints = animalHints
        break;
    default:
        break;
}

categoryText.textContent = categoryName

let index = Math.floor(Math.random() * words.length)
let guessWord = words[index]
let hint = hints[index]
guessWord = guessWord.toUpperCase()

document.documentElement.style.setProperty("--word-length", guessWord.length)

createBoard()

//Events
document.addEventListener('keydown', (event) =>{
    if(playerWon){
        return
    }

    const isLetter = /^[a-zA-Z]$/.test(event.key)
    const allowedKeys = ['Backspace']
    
    if(!isLetter && !allowedKeys.includes(event.key)){
        event.preventDefault()
        return
    }

    handleInput(event.key)
});

//Funcitons
function handleInput(key){
    if(rowIndex >= letterBlocks.length){
        return
    }

    if(key == "Backspace"){
        inputIndex--
        if(inputIndex < 0){
            inputIndex = 0
        }
        pop(letterBlocks[rowIndex][inputIndex])
        letterBlocks[Math.min(rowIndex, 5)][inputIndex].childNodes[0].innerHTML = ""

        return
    }
    if(rowIndex >= letterBlocks.length){
        return
    }

    letterBlocks[rowIndex][inputIndex].childNodes[0].innerHTML = key.toUpperCase()
    pop(letterBlocks[rowIndex][inputIndex])
    inputIndex++

    if(inputIndex >= guessWord.length){
        if(rowIndex < letterBlocks.length){
            rowIndex++
            inputIndex = 0
        }
        
        checkWinCondition()
    }
}

function checkWinCondition(){
    let checkRow = rowIndex - 1;
    playerWon = true

    for(let i = 0; i < guessWord.length; i++){
        let letterBlock = letterBlocks[checkRow][i]
        let letter = letterBlocks[checkRow][i].childNodes[0].innerHTML
        setTimeout(() => {
            letterBlock.childNodes[0].classList.add("flip")
            letterBlock.classList.add("flip")

            setTimeout(() => {
                letterBlock.childNodes[0].classList.add("flip")
                if(guessWord[i] == letter){
                    letterBlock.classList.add("correct")
                }
                else if(guessWord.includes(letter)){
                    letterBlock.classList.add("wrong-pos")
                    playerWon = false
                }
                else{
                    letterBlock.classList.add("wrong")
                    playerWon = false
                }

                if(rowIndex > 3 && !playerWon){
                    verdictText.textContent = hint
                }

                if(i == guessWord.length - 1 && (rowIndex == 6 || playerWon)){
                    playAgainBtn.style.display = "inline";
                    verdictText.textContent = playerWon ? "Congrats, you won!" : "The word was: " + guessWord
                }

            }, 200)
        }, i * 200)
    }
}

function createBoard(){
    for (let i = 0; i < 6; i++) {
        letterBlocks.push([])
        for (let j = 0; j < guessWord.length; j++) {
            const letterBlock = document.createElement("div")
            const letter = document.createElement("p")
            letterBlock.appendChild(letter)
            letterBlock.className = "letter-block";
            letter.className = "letter"
            gameBoard.appendChild(letterBlock)
            letterBlocks[i].push(letterBlock);
        }
    }
}

function playAgain(){
    location.reload()
}

//Animations
function pop(element){
    element.classList.remove("pop")
    element.offsetWidth
    element.classList.add("pop")
}