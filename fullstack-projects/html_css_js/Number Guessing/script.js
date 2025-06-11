function guessingNumber() {
    const input = document.getElementById("guessing-input").value.trim();
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    const div = document.getElementById("guessing-result");
    div.innerHTML = ""; // clear previous result

    const h1 = document.createElement("h1");

    if (input == randomNumber) {
        h1.innerText = `🎉 Yay! You guessed the correct number: ${randomNumber}`;
        h1.style.color = "green";
    } else {
        h1.innerText = `❌ Wrong! Computer's number was: ${randomNumber}`;
        h1.style.color = "red";
    }

    div.appendChild(h1);
}
