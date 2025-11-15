// Ждём инициализации Telegram WebApp
Telegram.WebApp.ready();

const user = Telegram.WebApp.initDataUnsafe.user;
const username = user?.username || user?.first_name || "Гость";
document.getElementById("username").textContent = username;

// Кнопка: показать данные
document.getElementById("dataBtn").addEventListener("click", () => {
  const data = Telegram.WebApp.initDataUnsafe;
  document.getElementById("output").textContent = JSON.stringify(data, null, 2);
});

// Кнопка: закрыть
document.getElementById("closeBtn").addEventListener("click", () => {
  Telegram.WebApp.close();
});

// Адаптация под тему
if (Telegram.WebApp.colorScheme === 'dark') {
  document.body.style.background = '#000';
}
