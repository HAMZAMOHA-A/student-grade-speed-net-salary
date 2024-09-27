
function getGrade(marks) {
    if (marks < 0 || marks > 100) {
        return "Invalid marks. Please enter a number between 0 and 100.";
    }
    if (marks >= 80) return 'A';
    if (marks >= 60) return 'B';
    if (marks >= 50) return 'C';
    if (marks >= 40) return 'D';
    return 'E';
}


const marks = prompt("Enter student marks (0-100):");
console.log(getGrade(Number(marks)));
