export function playHangman ()
{
    $('html').css('font-size', '62.5%');
    const wordElement = document.querySelector('#word');
    const attemptElement = document.querySelector('#attempts-remaining');
    const revealWordElement = document.querySelector('.reveal-word');
    const resetElement = document.querySelector('.reset');
    const hangmanElement = document.querySelector('#hamgman-img');
    const wordsList = [
        'vielfraß', 'kampftrinker', 'codegott', 'fifazocker', 'lieblingskollege'
    ];
    let index = 0
    let choosedWord = '';
    let chances = 6;

    function createAlphabetButtons() {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZßÄÖÜ";
        const lettersContainer = document.querySelector('.alphabet-ctn');

        for (const letter of alphabet) {
            createLetterStyle(lettersContainer, letter);
        };
    };

    function createLetterStyle(lettersContainer, letter) {
        const button = document.createElement('button');
        button.classList.add('letter');
        button.textContent = letter;
        lettersContainer.appendChild(button);

        button.addEventListener('mousedown', function () {
            guessLetter(letter, button);
        });
    };

    function displayWord() {
        if (index >= wordsList.length )
        {
        index = 0
        }
        
        const randomWord = wordsList[index];
        const wordLength = randomWord.length;
        let formattedWord = "";

        choosedWord = randomWord;

        for (let i = 0; i < wordLength; i++) {
            formattedWord += "_ ";
        };

        attemptElement.innerHTML = chances;
        wordElement.innerHTML = formattedWord.trim();
        index++
    };

    function guessLetter(letter, button) {
        const randomWord = choosedWord;
        const lowerCaseLetter = letter.toLocaleLowerCase();
        const formattedWord = wordElement.textContent;

        if (randomWord.includes(lowerCaseLetter)) {
            const wordArray = formattedWord.split(' ');
            checkLetterInWord(randomWord, wordArray, lowerCaseLetter);
        } else {
            chances -= 1;
            attemptElement.innerHTML = chances;
            button.disabled = true;
            updateHangmanImage(chances);
            endOfGame(randomWord, chances);
        };

        button.classList.add('btn-clicked');
    };

    function checkLetterInWord(randomWord, wordArray, lowerCaseLetter) {
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === lowerCaseLetter) {
                wordArray[i] = lowerCaseLetter;
            };
        };

        wordElement.textContent = wordArray.join(' ');

        if (wordElement.textContent.replace(/\s/g, '') === randomWord) {
            //TODO Won the game
            revealWordElement.innerHTML = `Your code is: 99`
            revealWordElement.classList.add('active');
            stopAlphabetEvent();
        };
    };

    function stopAlphabetEvent() {
        const alphabetButtons = document.querySelectorAll('.letter');

        alphabetButtons.forEach(function (button) {
            button.disabled = true;
        });
    };

    function updateHangmanImage(chances) {
        const hangmanImg = document.querySelector('#hangman-img');
        hangmanImg.src = `https://raw.githubusercontent.com/ruthinunes/hangman/main/images/${6 - chances}.png`;
    };

    function endOfGame(randomWord, chances) {

        if (chances == 0) {
            revealWordElement.innerHTML = `Loser!`
            revealWordElement.classList.add('active');
            stopAlphabetEvent();
        setTimeout(() =>
        {
            resetGame()
        }, 5000)
        
        };
    };

    function resetGame() {
        const alphabetButtons = document.querySelectorAll('.letter');
        alphabetButtons.forEach(function (button) {
            button.disabled = false;
            button.classList.remove('btn-clicked');
        });
        choosedWord = '';
        chances = 6;
        wordElement.textContent = '';
        attemptElement.textContent = '';
        revealWordElement.classList.remove('active');
        revealWordElement.textContent = '';
        updateHangmanImage(chances);
        displayWord();
    };
  
    setTimeout(() => {
        createAlphabetButtons();
        displayWord();
    }, 100)

    setTimeout(() => {
        $('#nest-six .nest-six-wrapper').removeClass('-hidden');
    }, 200)
}