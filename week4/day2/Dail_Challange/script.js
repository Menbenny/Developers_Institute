const input = prompt("enter words separated by commas: ")
const wordsArray = input.split(' ').map(word => word.trim());

let maxLength = 0;
for (const word of wordsArray) {
    if (word.length > maxLength) {
        maxLength = word.length;
    }
}

const border = '*'.repeat(maxLength + 4);

console.log(border);

for (const word of wordsArray) {
    const spaces = ' '.repeat(maxLength - word.length);
    console.log(`* ${word}${spaces}`);
}

console.log(border);