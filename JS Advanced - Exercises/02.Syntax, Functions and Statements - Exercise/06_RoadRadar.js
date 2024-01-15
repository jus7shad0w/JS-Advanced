function radar(speed, area) {
    if (area == 'motorway') {
        let speedLimit = 130;
        let speedDifference = speed - speedLimit;
        let status = "";
        if ((speed - speedLimit) <= 20) {
            status = "speeding";
        } else if ((speed - speedLimit) <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving"
        }
        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        } else if (speed > speedLimit) {
            console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
    } else if (area == 'interstate') {
        let speedLimit = 90;
        let speedDifference = speed - speedLimit;
        let status = "";
        if ((speed - speedLimit) <= 20) {
            status = "speeding";
        } else if ((speed - speedLimit) <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving"
        }
        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        } else if (speed > speedLimit) {
            console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
    } else if (area == 'city') {
        let speedLimit = 50;
        let speedDifference = speed - speedLimit;
        let status = "";
        if ((speed - speedLimit) <= 20) {
            status = "speeding";
        } else if ((speed - speedLimit) <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving"
        }
        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        } else if (speed > speedLimit) {
            console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
    } else if (area == 'residential') {
        let speedLimit = 20;
        let speedDifference = speed - speedLimit;
        let status = "";
        if ((speed - speedLimit) <= 20) {
            status = "speeding";
        } else if ((speed - speedLimit) <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving"
        }
        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        } else if (speed > speedLimit) {
            console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
    }
}
radar(40, 'city')
radar(21, 'residential')
radar(120, 'interstate')
radar(200, 'motorway')
