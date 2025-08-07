// 1. Welcome List
for (let i = 1; i <= 10; i++) {
  console.log("User ID:", i);
}

// 2. Reverse Queue Announcement
for (let i = 10; i >= 1; i--) {
  console.log("Roll No:", i);
}

// 3. Even-numbered Coupons
for (let i = 2; i <= 20; i += 2) {
  console.log("Coupon:", i);
}

// 4. Odd Seat Numbers
for (let i = 1; i <= 20; i += 2) {
  console.log("Seat:", i);
}

// 5. Divisible by 5 Offer Codes
for (let i = 5; i <= 50; i += 5) {
  console.log("Offer Code:", i);
}

// 6. Basic Salary Bonus Calculation
let bonus = 0;
for (let i = 1; i <= 10; i++) {
  bonus += 1;
}
console.log("Total Bonus: ₹" + bonus);

// 7. Multiplication Poster (5 times table)
for (let i = 1; i <= 10; i++) {
  console.log("5 × " + i + " = " + (5 * i));
}

// 8. Star Pattern on ID Card
let stars = "";
for (let i = 1; i <= 5; i++) {
  stars += "*";
}
console.log(stars);

// 9. Daily Task Reminder
for (let i = 1; i <= 5; i++) {
  console.log("Day " + i + " Task");
}

// 10. Rocket Launch Countdown
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
console.log("Launch!");

// 11. Even-Day Work Bonus
let evenBonus = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    evenBonus += 10;
  }
}
console.log("Even Day Bonus: ₹" + evenBonus);

// 12. Night Shift Allowance
let nightBonus = 0;
for (let i = 50; i <= 100; i++) {
  if (i % 2 !== 0) {
    nightBonus += 1;
  }
}
console.log("Night Shift Allowance: ₹" + nightBonus);

// 13. Math Club Challenge
let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 9 === 0) {
    count++;
  }
}
console.log("Divisible by 9:", count);

// 14. Right-Aligned Tree
let tree = "";
for (let i = 1; i <= 5; i++) {
  tree = " ".repeat(5 - i) + "*".repeat(i);
  console.log(tree);
}

// 15. Custom Table for a Kid (7 times)
for (let i = 1; i <= 10; i++) {
  console.log("7 × " + i + " = " + (7 * i));
}

// 16. Odd or Even Day Checker
for (let i = 1; i <= 30; i++) {
  let type = (i % 2 === 0) ? "Even" : "Odd";
  console.log("Day " + i + ": " + type);
}

// 17. Skip Certain Dates
for (let i = 1; i <= 50; i++) {
  if (i === 5 || i === 13) continue;
  console.log("Day", i);
}

// 18. Fizz Days
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

// 19. Buzz Days
for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

