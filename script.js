const startBtn = document.getElementById("startBtn");
const audio = document.getElementById("rosaryAudio");
const mysteryText = document.getElementById("mysteryToday");

const mysteries = {
  0: { name: "Glorious", file: "glorious.mp3" },   // Sunday
  1: { name: "Joyful", file: "joyful.mp3" },       // Monday
  2: { name: "Sorrowful", file: "sorrowful.mp3" }, // Tuesday
  3: { name: "Glorious", file: "glorious.mp3" },   // Wednesday
  4: { name: "Luminous", file: "luminous.mp3" },   // Thursday
  5: { name: "Sorrowful", file: "sorrowful.mp3" }, // Friday
  6: { name: "Joyful", file: "joyful.mp3" }        // Saturday
};

startBtn.addEventListener("click", () => {
  const today = new Date().getDay();
  const mystery = mysteries[today];

  audio.src = `audio/${mystery.file}`;
  audio.hidden = false;
  audio.play();
  mysteryText.textContent = `Today is the ${mystery.name} Mystery.`;
});
