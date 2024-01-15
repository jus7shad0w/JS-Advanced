function walk(steps, footprintLength, speed) {
    let footprintLengthKm = footprintLength / 1000;
    let totalDistanceKm = steps * footprintLengthKm;
    let breaks = Math.floor(totalDistanceKm / 0.5);
    let totalHours = totalDistanceKm / speed;
    let totalMinutes = totalHours * 60 + breaks;
    let hours = Math.floor(totalMinutes / 60);
    let minutes = Math.floor(totalMinutes % 60);
    let seconds = Math.ceil((totalMinutes * 60) % 60);

    console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
}
walk(4000, 0.60, 5)
walk(2564, 0.70, 5.5)