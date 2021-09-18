function timeToWalk(steps, footprint, speed) {
    let distance = steps * footprint;

    let delay = Math.floor(distance / 500);

    let speedInMeters = speed * 1000;
    let timeInHours = distance / speedInMeters;

    let hour = String(Math.trunc(timeInHours)).padStart(2, "0");
    let minute = String(Math.trunc(timeInHours * 60) + delay).padStart(2, "0");
    let seconds = String(Math.round(timeInHours * 60 * 60) % 60).padStart(2, "0");
    
    console.log(`${hour}:${minute}:${(seconds)}`);
}

timeToWalk(10000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);