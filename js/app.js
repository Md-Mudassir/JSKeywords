window.addEventListener("load", init);

let time = 5;
let score = 0;
let isPlaying;

const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

//keywords array
const words = [
  "abstract",
  "arguments",
  "await",
  "boolean",
  "break",
  "byte",
  "case",
  "catch",
  "char",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "double",
  "else",
  "enum",
  "eval",
  "export",
  "extends",
  "false",
  "final",
  "finally",
  "float",
  "for",
  "function",
  "goto",
  "if",
  "implements",
  "import",
  "in",
  "instanceof",
  "int",
  "interface",
  "let",
  "long",
  "native",
  "new",
  "null",
  "package",
  "private",
  "protected",
  "public",
  "return",
  "short",
  "static",
  "super",
  "switch",
  "synchronized",
  "this",
  "throw",
  "throws",
  "transient",
  "true",
  "try",
  "typeof",
  "var",
  "void",
  "volatile",
  "while",
  "with",
  "yield"
];

// initialization
function init() {
  seconds.innerHTML = 5;
  showWord(words);
  wordInput.addEventListener("input", startMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}

startMatch = () => {
  if (matchWords()) {
    isPlaying = true;
    time = 5 + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }

  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
};

// function to match the input word
matchWords = () => {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
};

showWord = () => {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
};

// displays the remaining time
countdown = () => {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
};

checkStatus = () => {
  if (!isPlaying && time === 0) {
    message.innerHTML = "You Lose!";
    score = -1;
  }
};
