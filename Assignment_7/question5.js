function countCharactersAndWords() {
    var inputText = prompt("Enter a sentence or phrase:");

    var numOfCharacters = inputText.length;

    var numOfWords = inputText.trim().split(/\s+/).length;

    alert("Number of characters (including spaces): " + numOfCharacters);
    alert("Number of words: " + numOfWords);
}

countCharactersAndWords();
