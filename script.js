const userInput = document.querySelector("#date");
const result = document.querySelector(".result");
const reSet = document.querySelector(".reset");

userInput.max = new Date().toISOString().split("T")[0]; // Prevent future dates

function calcAge() {
    const birthDate = new Date(userInput.value);
    const today = new Date();

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let y3 = y2 - y1;
    let m3 = m2 - m1;
    let d3 = d2 - d1;

    // Adjust days and months
    if (d3 < 0) {
        m3--;
        d3 += getDaysInMonth(y2, m2 - 1); // Borrow days from previous month
    }

    if (m3 < 0) {
        y3--;
        m3 += 12;
    }

    result.innerText = `Your age is ${y3} years, ${m3} months, ${d3} days.`;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate(); // Get days in previous month
}

reSet.addEventListener("click", () => {
    userInput.value = "";
    result.innerText = "";
    result.style.backgroundColor = "lightblue"; // Fixed the style line
});
