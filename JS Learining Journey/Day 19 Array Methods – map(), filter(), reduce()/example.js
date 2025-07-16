let scores = [45, 76, 89, 90, 50];

// 1. Use map to add 5 bonus points to each score
let bonusScores = scores.map(score => score + 5);
console.log("Bonus Scores:", bonusScores);

// 2. Use filter to find scores above 80
let topScores = scores.filter(score => score > 80);
console.log("Top Scores:", topScores);

// 3. Use reduce to calculate the total score
let totalScore = scores.reduce((sum, score) => sum + score, 0);
console.log("Total Score:", totalScore);
