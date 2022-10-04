function countWordString(string) {
    let words = string.split(" ");
    let result = {};

    for (let i = 0; i < words.length; i++) {
        let currentWordCount = result[words[i]];
        let count = currentWordCount ? currentWordCount : 0;
        result[words[i]] = count + 1;
    }
    return result;
}

module.exports = countWordString