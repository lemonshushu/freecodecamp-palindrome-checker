function palindrome(str) {
    const strArr = str.split("");
    let arr = [];
    strArr.forEach(letter => {
        if (('a' <= letter && letter <= 'z') || ('0'<=letter&&letter<='9')) {
            arr.push(letter);
        } else if ('A' <= letter && letter <= 'Z') {
            arr.push(letter.toLowerCase());
        }
    });
    // console.log(strArr);
    // console.log(arr);
    const len = arr.length;
    for (let i = 0 ; i < Math.floor(len/2) ; i++) {
        if (arr[i] !== arr[len-i-1]) return false;
    }
    return true;
}

const words = ['eye', 'racecar', 'RaceCar', 'race CAR', '2A3*3a2', '2A3 3a2', '2_A3*3#A2'];

words.forEach(word => {
    console.log(`palindrome(${word}) = ${palindrome(word)}`);
});