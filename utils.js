export function countsAsYes(word) {
    let lowerCaseWord = word.toLowerCase();
    if (lowerCaseWord[0] === 'y') {
        return true;
    } else {
        return false;
    }
}