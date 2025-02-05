function calculate() {
    const grade1 = parseFloat(document.getElementById('grade1').value);
    const grade2 = parseFloat(document.getElementById('grade2').value);
    const grade3 = parseFloat(document.getElementById('grade3').value);
    const grade4 = parseFloat(document.getElementById('grade4').value);
    const grade5 = parseFloat(document.getElementById('grade5').value);

    if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3) || isNaN(grade4) || isNaN(grade5)) {
        alert("Please enter all grades.");
        return;
    }
    if (grade1>100 || grade2>100 || grade3>100 || grade4>100 || grade5>100) {
        alert("Please enter the correct values.");
        return;
    }

    const total = grade1 + grade2 + grade3 + grade4 + grade5;
    const average = total / 5;
    const percentage = (total / 500) * 100;

    document.getElementById('total').textContent = "Total: " + total;
    document.getElementById('average').textContent = "Average: " + average.toFixed(2);
    document.getElementById('percentage').textContent = "Percentage: " + percentage.toFixed(2) + "%";
}
