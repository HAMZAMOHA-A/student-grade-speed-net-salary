
function calculateNetSalary(basicSalary, benefits) {
    const payee = calculateTax(basicSalary + benefits);
    const NHIF = 150;
    const NSSF = 200; 
    const grossSalary = basicSalary + benefits;
    const netSalary = grossSalary - (payee + NHIF + NSSF);
    
    return {
        grossSalary,
        payee,
        NHIF,
        NSSF,
        netSalary,
    };
}

function calculateTax(amount) {
    // Simplified tax calculation based on given thresholds
    if (amount <= 24000) return amount * 0.1;
    if (amount <= 48000) return 2400 + (amount - 24000) * 0.2;
    return 8400 + (amount - 48000) * 0.3;
}


const basicSalary = prompt("Enter basic salary:");
const benefits = prompt("Enter benefits:");
console.log(calculateNetSalary(Number(basicSalary), Number(benefits)));
