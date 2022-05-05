function range(start, end, step) {
    let result = [];
    if (start > end || step <= 0) {
        return [];
    }
    if (start === undefined || end === undefined || step === undefined) {
        return [];
    }
    for (let i = start; i <= end; i += step) {
        result.push(i);
    }
    return result;
}
console.log(range(0, 10, 2));

console.log(range(10, 30, 5));

console.log(range(-5, 2, 3));

////////////////////////////////////////////////////////////////////////////////////////////////

const lastIndexOf = (arr, number) => {
    if (arr.length === 0) {
        return -1;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === number) {
            return i;
        }
    }
    return -1;
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1))

console.log(lastIndexOf([0, 1, 4, 1, 2], 3))

////////////////////////////////////////////////////////////////////////////////////////////////

function loopyLighthouse(range, multiples, words) {
    for (let i = range[0]; i <= range[1]; i++) {
        if (i % multiples[0] === 0 && i % multiples[1] === 0) {
            console.log(words.join(''));
            continue;
        };
        if (i % multiples[0] === 0) {
            console.log(words[0]);
            continue;
        };
        if (i % multiples[1] === 0) {
            console.log(words[1]);
            continue;
        }
        console.log(i);
    }
}
// loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
////////////////////////////////////////////////////////////////////////////////////////////////

const merge = (arr1, arr2) => {
    arr2.map(item => arr1.push(item))
    return arr1.sort((a, b) => { if (a > b) { return 1 }; if (a < b) { return -1 } });
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]));

////////////////////////////////////////////////////////////////////////////////////////////////

const smartGarbage = (trash, bins) => {
    for (item in bins)
        if (trash === item)
            bins[item]++;
    return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));

////////////////////////////////////////////////////////////////////////////////////////////////

const carPassing = (cars, speed) => {
    let obj = {
        time: Date.now(),
        speed: speed
    }
    cars.push(obj);
    return cars;
}

const cars = [
    {
        time: 1568329654807,
        speed: 40,
    },
    {
        time: 1568329821632,
        speed: 42,
    },
    {
        time: 1568331115463,
        speed: 35
    }
]

const speed = 38

console.log(carPassing(cars, speed));

////////////////////////////////////////////////////////////////////////////////////////////////

const judgeVegetable = (vegetables, metric) => {
    vegetables.sort((a, b) => {
        if (a[metric] < b[metric]) {
            return 1
        }
        if (a[metric] > b[metric]) {
            return -1
        }
    })
    return vegetables[0].submitter
}

const vegetables = [
    {
        submitter: 'Old Man Franklin',
        redness: 10,
        plumpness: 5
    },
    {
        submitter: 'Sally Tomato-Grower',
        redness: 2,
        plumpness: 8
    },
    {
        submitter: 'Hamid Hamidson',
        redness: 4,
        plumpness: 3
    }
]

const metric = 'redness'
console.log(judgeVegetable(vegetables, metric))

////////////////////////////////////////////////////////////////////////////////////////////////

const instructorWithLongestName = function (instructors) {
    let sorted = instructors.sort((a, b) => {
        if (a.name.length > b.name.length) {
            return 1
        }
        if (a.name.length < b.name.length) {
            return -1
        }
    })
    return sorted[(instructors.length - 1)]
};

console.log(instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" }
]));

////////////////////////////////////////////////////////////////////////////////////////////////

const calculateChange = (total, cash) => {
    let result = {};
    let change = cash - total;
    let twenty = Math.floor(change / 2000);
    if (twenty >= 1) {
        change = change - 2000 * twenty;
        result.twentyDollar = twenty;
    }
    let ten = Math.floor(change / 1000);
    if (ten >= 1) {
        change = change - 1000 * ten;
        result.tenDollar = ten;
    }
    let five = Math.floor(change / 500);
    if (five >= 1) {
        change = change - 500 * five;
        result.fiveDollar = five;
    }
    let two = Math.floor(change / 200);
    if (two >= 1) {
        change = change - 200 * two;
        result.twoDollar = two;
    }
    let one = Math.floor(change / 100);
    if (one >= 1) {
        change = change - 100 * one;
        result.oneDollar = one;
    }
    let quarter = Math.floor(change / 25);
    if (quarter >= 1) {
        change = change - 25 * quarter;
        result.quarter = quarter;
    }
    let dime = Math.floor(change / 10);
    if (dime >= 1) {
        change = change - 10 * dime;
        result.dime = dime;
    }
    let nickel = Math.floor(change / 5);
    if (nickel >= 1) {
        change = change - 25 * nickel;
        result.nickel = nickel;
    }
    let penny = change;
    result.penny = penny;

    return result;
};



console.log(calculateChange(1787, 2000)); // $20
console.log(calculateChange(2623, 4000)); // $40
console.log(calculateChange(501, 1000)); // $10

/* 
Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)

*/

////////////////////////////////////////////////////////////////////////////////////////////////

const urlEncode = text => {
    const splited = text.trim('').split(' ');
    const joined = splited.join('%20');
    return joined;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

////////////////////////////////////////////////////////////////////////////////////////////////

const camelCase = function (input) {
    const splitedInput = input.split(' ');
    let helper = [splitedInput[0]]
    for (let i = 1; i < splitedInput.length; i++) {
        let splitedWord = splitedInput[i].split('');
        let firstChar = splitedWord[0].toUpperCase();
        splitedWord[0] = firstChar;
        let joinedWord = splitedWord.join('');
        helper.push(joinedWord);
    }
    const result = helper.join('')
    return result;
};



console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

////////////////////////////////////////////////////////////////////////////////////////////////

const whereCanIPark = function (spots, vehicle) {
    const x = spots.length;
    const y = spots[0].length;
    for (let i = 0; i < x; i++) {

        for (let j = 0; j < y; j++) {
            if (vehicle === 'regular') {
                if (spots[i][j] === 'R') {
                    return [j, i]
                }
            }
            if (vehicle === 'small') {
                if (spots[i][j] === 'S' || spots[i][j] === 'R') {
                    return [j, i]
                }
            }
            if (vehicle === 'motorcycle') {
                if (spots[i][j] === 'S' || spots[i][j] === 'R' || spots[i][j] === 'M') {
                    return [j, i]
                }
            }
        }
    }
    return false;
};

console.log(whereCanIPark(
    [
        // COLUMNS ARE X
        // 0    1    2    3    4    5
        ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
        ['s', 'M', 's', 'S', 'r', 'M'], // 1
        ['s', 'M', 's', 'S', 'r', 'm'], // 2
        ['S', 'r', 's', 'm', 'r', 'M'], // 3
        ['S', 'r', 's', 'm', 'r', 'M'], // 4
        ['S', 'r', 'S', 'M', 'M', 'S']  // 5
    ],
    'regular'
));

console.log(whereCanIPark(
    [
        ['M', 'M', 'M', 'M'],
        ['M', 's', 'M', 'M'],
        ['M', 'M', 'M', 'M'],
        ['M', 'M', 'r', 'M']
    ],
    'small'
));

console.log(whereCanIPark(
    [
        ['s', 's', 's', 's', 's', 's'],
        ['s', 'm', 's', 'S', 'r', 's'],
        ['s', 'm', 's', 'S', 'r', 's'],
        ['S', 'r', 's', 'm', 'r', 's'],
        ['S', 'r', 's', 'm', 'R', 's'],
        ['S', 'r', 'S', 'M', 'm', 'S']
    ],
    'motorcycle'
))

////////////////////////////////////////////////////////////////////////////////////////////////

const multiplicationTable = function (maxValue) {

    let result = new Array(maxValue).fill(0).map(() => new Array(maxValue).fill(0));
    for (let i = 1; i <= maxValue; i++) {
        for (let j = 1; j <= maxValue; j++) {
            result[i - 1][j - 1] = i * j
        }
    }
    return result;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));

////////////////////////////////////////////////////////////////////////////////////////////////

const checkAir = (samples, threshold) => {
    const totalSample = samples.length;
    let dirtySample = 0;
    for (const item of samples) {
        if (item === 'dirty') {
            dirtySample++
        }
    }
    return dirtySample / totalSample < threshold ? 'Clean' : 'Polluted'
};

console.log(checkAir(
    ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
    0.3
));

console.log(checkAir(
    ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
    0.25
));

console.log(checkAir(
    ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
    0.9
))

////////////////////////////////////////////////////////////////////////////////////////////////

const makeCase = function (input, caseStyleInput) {
    const splitedInput = input.split(' ');
    let caseStyleArr
    if (typeof caseStyleInput === 'string') {
        caseStyleArr = [caseStyleInput.split()][0];
    } else {
        caseStyleArr = caseStyleInput
    }
    let result;
    let helper = []
    for (var i = 0; i < caseStyleArr.length; i++) {
        caseStyle = caseStyleArr[i]
        let resultSplittedByWord;
        if (result) {
            resultSplittedByWord = result.split(' ');
        }
        if (caseStyle === 'camel') {
            let helper = [splitedInput[0]]
            for (let i = 1; i < splitedInput.length; i++) {
                let splitedWord = splitedInput[i].split('');
                let firstChar = splitedWord[0].toUpperCase();
                splitedWord[0] = firstChar;
                let joinedWord = splitedWord.join('');
                helper.push(joinedWord);
            }
            result = helper.join('')
            continue
        }
        if (caseStyle === 'pascal') {
            for (let i = 0; i < splitedInput.length; i++) {
                let splitedWord = splitedInput[i].split('');
                let firstChar = splitedWord[0].toUpperCase();
                splitedWord[0] = firstChar;
                let joinedWord = splitedWord.join('');
                helper.push(joinedWord);
            }
            result = helper.join('')
            continue
        }
        if (caseStyle === 'snake') {
            if (result) {
                result = resultSplittedByWord.join('_')
            } else {
                result = splitedInput.join('_');
            }
            continue
        }
        if (caseStyle === 'kebab') {
            if (result) {
                result = resultSplittedByWord.join('-')
            } else {
                result = splitedInput.join('-');
            }
            continue
        }
        if (caseStyle === 'title') {
            let helper = []
            for (let i = 0; i < splitedInput.length; i++) {
                let splitedWord = splitedInput[i].split('');
                let firstChar = splitedWord[0].toUpperCase();
                splitedWord[0] = firstChar;
                let joinedWord = splitedWord.join('');
                helper.push(joinedWord);
            }
            result = helper.join(' ')
            continue
        }
        if (caseStyle === 'vowel') {
            let helper = []
            let allChars = input.split('');
            for (let char of allChars) {
                if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
                    upperChar = char.toUpperCase();
                    helper.push(upperChar);
                } else {
                    helper.push(char);
                }
            }
            result = helper.join('')
            continue
        }
        if (caseStyle === 'consonant') {
            let helper = []
            let allChars = input.split('');
            for (let char of allChars) {
                if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
                    helper.push(char);
                } else {
                    upperChar = char.toUpperCase();
                    helper.push(upperChar);
                }
            }
            result = helper.join('')
            continue
        }
        if (caseStyle === 'upper') {
            let allChars = input.split('');
            for (let char of allChars) {
                helper.push(char.toUpperCase());
            }
            result = helper.join('');
            continue;
        }
    }
    return result;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

////////////////////////////////////////////////////////////////////////////////////////////////

const squareCode = function (message) {
    let trimedMessage = message.replace(/\s+/g, '');
    let chars = trimedMessage.split('');
    let trimedMessageLength = trimedMessage.length;
    let rowAndCol = Math.ceil(Math.sqrt(trimedMessageLength))
    let result = new Array(rowAndCol).fill('').map(() => new Array(rowAndCol).fill(''));
    let i = 0;
    for (let j = 0; j < rowAndCol; j++) {
        for (let k = 0; k < rowAndCol; k++) {
            result[j][k] = chars[i]
            i++
        }
    }
    return result;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

////////////////////////////////////////////////////////////////////////////////////////////////

const generateBoard = (white, black) => {
    let board = new Array(8).fill(0).map(() => new Array(8).fill(0));
    board[white[0]][white[1]] = 1;
    board[black[0]][black[1]] = 1;
    return board;
}

const queenThreat = board => {
    const rowAndCol = board.length;

    let queens = [];
    for (let i = 0; i < rowAndCol; i++) {
        for (let j = 0; j < rowAndCol; j++) {
            if (board[i][j] === 1) {
                queens.push([i, j])
            }
        }
    }
    let [white, black] = queens;
    console.log(white);
    console.log(black);
    let [blackY, blackX] = black;
    let [whiteY, whiteX] = white;

    if (blackX === whiteX || blackY === whiteY) {
        return true
    }
    if (blackX < whiteX) {
        return blackX + blackY === whiteX + whiteY;
    }
    if (blackX > whiteX) {
        return blackX - blackY === whiteX - whiteY;
    }
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

let whiteQueen1 = [0, 2];
let blackQueen1 = [5, 7];
let generatedBoard1 = generateBoard(whiteQueen1, blackQueen1);
console.log(generatedBoard1);
console.log(queenThreat(generatedBoard1));

////////////////////////////////////////////////////////////////////////////////////////////////

const PI = 3.14159;

const sphereVolume = function (radius) {
    return 4 * PI * Math.pow(radius, 3) / 3;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
    return PI * Math.pow(radius, 2) * height / 3;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
    return height * width * depth;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
    let result = 0;
    for (var item of solids) {
        if (item.type === 'sphere') {
            result += sphereVolume(item.radius)
        }
        if (item.type === 'cone') {
            result += coneVolume(item.radius, item.height)
        }
        if (item.type === 'prism') {
            result += prismVolume(item.height, item.width, item.depth)
        }
    }
    return result;
}

const largeSphere = {
    type: 'sphere',
    radius: 40
}

const smallSphere = {
    type: 'sphere',
    radius: 10
}

const cone = {
    type: 'cone',
    radius: 3,
    height: 5
}

const duck = [
    largeSphere,
    smallSphere,
    cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);

////////////////////////////////////////////////////////////////////////////////////////////////

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
    for (var item of recipes) {
        if (bakeryA.includes(item.ingredients[0]) && bakeryB.includes(item.ingredients[1])) {
            return item;
        }
        if (bakeryA.includes(item.ingredients[1]) && bakeryB.includes(item.ingredients[0])) {
            return item;
        }
    }
}

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

////////////////////////////////////////////////////////////////////////////////////////////////

const organizeInstructors = function (instructors) {
    let result = {}
    for (var item of instructors) {
        let course = item.course;
        let name = item.name;
        if (!result[course]) {
            result[course] = [name];
            console.log(result)
            continue
        }

        if (result[course]) {
            result[course].push(item.name);
        }
    }
    return result;
};

console.log(organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" }
]));

////////////////////////////////////////////////////////////////////////////////////////////////

const urlDecode = function (text) {
    let splitByAnd = text.split('&');
    let result = {};
    for (let word of splitByAnd) {
        let keyValuePair = word.split('=');
        let key = keyValuePair[0];
        let value = keyValuePair[1].split('%20').join(' ');
        result[key] = value;
    }
    return result
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

////////////////////////////////////////////////////////////////////////////////////////////////

const blocksAway = function (directions) {
    let result = { east: 0, north: 0 };
    let counter = 0;
    for (let i = 0; i < directions.length; i += 2) {
        j = i + 1;
        // odd step, can only go east or west
        if (counter % 2 === 0) {
            if (counter > 0) {
                if (directions[i - 2] === 'right') {
                    if (directions[i] === 'right') {
                        result.east += directions[j];
                    }
                    if (directions[i] === 'left') {
                        result.east -= directions[j];
                    }
                }
                // at step one
                if (directions[i - 2] === 'left') {
                    if (directions[i] === 'right') {
                        result.east += directions[j];
                    }
                    if (directions[i] === 'left') {
                        result.east -= directions[j];
                    }
                }
                counter++;
                continue
            } else {
                if (directions[i] === 'right') {
                    result.east += directions[j];
                }
                if (directions[i] === 'left') {
                    result.east -= directions[j];
                }
                counter++;
                continue
            }
        }
        // even step, can only go north or south
        if (counter % 2 !== 0) {
            if (directions[i - 2] === 'right') {
                if (directions[i] === 'right') {
                    result.north -= directions[j];
                }
                if (directions[i] === 'left') {
                    result.north += directions[j];
                }
            }
            if (directions[i - 2] === 'left') {
                if (directions[i] === 'right') {
                    result.north += directions[j];
                }
                if (directions[i] === 'left') {
                    result.north -= directions[j];
                }
            }
            counter++;
            continue
        }
    }
    return result;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
