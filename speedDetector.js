
function checkSpeed(speed) {
    const speedLimit = 70;
    if (speed < speedLimit) {
        return "Ok";
    }
    const demeritPoints = Math.floor((speed - speedLimit) / 5);
    if (demeritPoints > 12) {
        return "License suspended";
    }
    return `Points: ${demeritPoints}`;
}


const speed = prompt("Enter car speed:");
console.log(checkSpeed(Number(speed)));

}
