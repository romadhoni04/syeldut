document.addEventListener("DOMContentLoaded", () => {
  const elephant = document.getElementById("elephant");
  const sparkle = document.getElementById("sparkle");
  const message = document.getElementById("love-message");

  elephant.addEventListener("click", () => {
    sparkle.style.display = "block";
    message.style.display = "block";

    message.innerText = `"Kalau aku bisa jadi boneka gajah ini, aku pasti peluk kamu tiap detik. Tapi karena nggak bisa, ini gajah virtual dulu ya... Lucu, gemoy, dan penuh cinta dari Roma Dhoni buat Syella Maudia 💖🐘"`;

    setTimeout(() => {
      sparkle.style.display = "none";
    }, 2000);
  });
});
