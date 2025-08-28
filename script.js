// Part 1: Variable declarations and conditionals
let userName = "Student";
let isLoggedIn = true;

if (isLoggedIn) {
  console.log(`Welcome back, ${userName}!`);
} else {
  console.log("Please log in.");
}

// Part 2: Custom functions
function greetUser(name) {
  return `Hello, ${name}! Ready to code?`;
}

function doubleNumber(num) {
  return num * 2;
}

// Part 3: Loop examples
function generateNumbers() {
  let numbers = [];
  for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}
  return numbers;
}

function showCountdown() {
  for (let i = 5; i> 0; i--) {
    console.log(`Countdown: ${i}`);
}
}

// Part 4: DOM interactions
document.getElementById("actionBtn").addEventListener("click", () => {
  // Interaction 1: Change text
  document.getElementById("description").textContent = greetUser(userName);

  // Interaction 2: Add list items
  const list = document.getElementById("outputList");
  list.innerHTML = ""; // Clear previous items
  const nums = generateNumbers();
  nums.forEach((num) => {
    const li = document.createElement("li");
    li.textContent = `Number: ${doubleNumber(num)}`;
    list.appendChild(li);
});

  // Interaction 3: Log countdown to console
  showCountdown();
});