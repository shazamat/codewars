function twoHighest(arr) {
    let highest = 0;
    let secondHighest = 0;

    if (arr.length === 0) {
        return [];
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i];
        }
    }

    for ( let i = 0; i < arr.length; i++) {
        if (arr[i] > secondHighest && arr[i] < highest) {
            secondHighest = arr[i];
        }
    }
    return [secondHighest, highest];
}

console.log(twoHighest([4, 10, 10, 9]))