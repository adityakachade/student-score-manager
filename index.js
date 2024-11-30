let scores = [35, 50, 92, 75, 40, 20, 89, 60, 100, 45];
let passedCount = 0;
for (let i = 0; i < scores.length; i++) {
    
    if (scores[i] < 40) {
        scores[i] += 20;
    }
   else if (scores[i] > 90) {
        scores[i] = 90;
    }
    else if (scores[i] >= 50) {
        passedCount++;
    }
}

console.log("Students passed:", passedCount);
console.log("Adjusted scores:", scores);

