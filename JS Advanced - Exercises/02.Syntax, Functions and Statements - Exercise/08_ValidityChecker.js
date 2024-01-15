function validityChecker(x1, y1, x2, y2) {
    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    function isInteger(value) {
        return Number.isInteger(value);
    }

    const distance1 = calculateDistance(x1, y1, 0, 0);
    const distance2 = calculateDistance(x2, y2, 0, 0);
    const distance3 = calculateDistance(x1, y1, x2, y2);
    if (isInteger(distance1) && isInteger(distance2) && isInteger(distance3)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1)
//not ok