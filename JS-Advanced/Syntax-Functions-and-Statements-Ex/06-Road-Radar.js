function roadRadar(speed, place) {
    let speedLimit;
    let status;
    let isWithin = true;

    switch (place) {
        case "motorway":
            speedLimit = 130;
            break;
        case "interstate":
            speedLimit = 90;
            break;
        case "city":
            speedLimit = 50;
            break;
        case "residential":
            speedLimit = 20;
            break;
    }

    let difference = speed - speedLimit;

    if (difference > 0) {
        isWithin = false;
        if (difference <= 20) {
            status = "speeding";
        } else if (difference > 20 && difference <= 40) {
            status = "excessive speeding";
        } else if (difference > 40) {
            status = "reckless driving";
        }
    }

    if (isWithin) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}

roadRadar(200, 'motorway');