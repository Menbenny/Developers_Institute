function bottlesOfBeer(num) {
    for (let i = num; i >= 0; i --) {
        const bottelsText = i === 1 ? 'bottle' : 'bottles';
        const nextBottles = i - 1 === 1 ? 'bottle' : 'bottles';

        console.log(`${i} ${bottelsText} of beer on the wall`);
        console.log(`${i} ${bottlesText} of beer`);

        if (i > 0) {
            const take = i === 1 ? 'it' : 'them';
            console.log(`Take ${i === 1 ? 'it' : i} down, pass ${take} around`);
            console.log(`${i - 1} ${nextBottles} of beer on the wall`);
            console.log('');
        } else {
            console.log('No more bottles on the wall.');
        }
    }
}

const startingBottles = prompt("ENter the starting number of bottles: ");
bottlesOfBeer(parseInt(startingBottles));