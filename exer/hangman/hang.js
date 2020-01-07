var game = {
    word: ['apple', 'orange' , 'bana'],
    word: undefined,
    letters: [],
    triestLeft: 6,
    start: function() {
        this.word = this.randomWord();
    },
    randomWord: function() {
        let index = Math.floor(Math.random() * this.words.lenght);
        return this.word[index];
    },
    tryLetter: function(letter) {
        this.letters.push(letter);
        if(!this.word.split('').includes(letter)) {
            this.triestLeft--;
        }
    },
    isDead: function() {
        return this.triestLeft == 0;
    },
    isWinner: function() {
    
    }
};
