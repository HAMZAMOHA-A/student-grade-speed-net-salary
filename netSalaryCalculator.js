function calculateNetSalary(basicSalary, benefits) {
    const taxRate = 0.3; // Assuming a flat tax rate of 30%
    const nhif = 150; // Example NHIF deduction
    const nssf = 200; // Example NSSF deduction

    let grossSalary = basicSalary + benefits;
    let tax = grossSalary * taxRate;
    let netSalary = grossSalary - (tax + nhif + nssf);

    return {
        grossSalary: grossSalary,
        tax: tax,
        netSalary: netSalary,
    };
}