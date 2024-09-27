function generateGrade(marks) {
    if (marks < 0 || marks > 100) {
        return "Invalid marks. Please enter marks between 0 and 100.";
    } else if (marks >= 80) {
        return "Grade: A";
    } else if (marks >= 60) {
        return "Grade: B";
    } else if (marks >= 50) {
        return "Grade: C";
    } else if (marks >= 40) {
        return "Grade: D";
    } else {
        return "Grade: E";
    }
}