const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const ResetButton = document.querySelector('#Reset');
const Points = document.querySelector('#towin');
const p1Display = document.querySelector('#p1display');
const p2Display = document.querySelector('#p2display');
let p1score = 0;
let p2score = 0;
let winningScore = 5;
let IsGameOver = false;
p1Button.addEventListener('click', function() {
    if (IsGameOver !== true) {
        p1score += 1;
        p1Display.textContent = p1score;
        if (Number(p1Display.textContent) === winningScore) {
            IsGameOver = true;
            p1Display.classList.add('has-text-success')
            p2Display.classList.add('has-text-danger')
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
    }
})
p2Button.addEventListener('click', function() {
    if (IsGameOver !== true) {
        p2score += 1;
        p2Display.textContent = p2score;
        if (Number(p2Display.textContent) === winningScore) {
            IsGameOver = true;
            p2Display.classList.add('has-text-success')
            p1Display.classList.add('has-text-danger')
            p1Button.disabled = true;
            p2Button.disabled = true;

        }
    }
})
Points.addEventListener('change', function() {
    winningScore = parseInt(this.value)
    IsGameOver = false;
    p1score = 0;
    p2score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p2Display.classList.remove('has-text-success', 'has-text-danger')
    p1Display.classList.remove('has-text-danger', 'has-text-success')
})


ResetButton.addEventListener('click', function() {
    IsGameOver = false;
    p1score = 0;
    p2score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p2Display.classList.remove('has-text-success', 'has-text-danger')
    p1Display.classList.remove('has-text-danger', 'has-text-success')
    p1Button.disabled = false;
    p2Button.disabled = false;
})