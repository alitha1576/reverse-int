module.exports = function reverse (n) {
    let arr = Array.from(n.toString());
    let newNumber = '';
    while (arr.length > 0) {
        let lastElement = arr.pop();
        newNumber += lastElement;
    }
    return parseInt(newNumber);
}