document.addEventListener("DOMContentLoaded", function() {
  var showFormBtn = document.getElementById("show-form");
  var closeFormBtn = document.getElementById("close-form");
  var formPopup = document.getElementById("myForm");

  // Показываем форму при нажатии кнопки "Записаться"
  showFormBtn.addEventListener("click", function() {
    formPopup.style.display = "block";
  });

  // Скрываем форму при нажатии кнопки "Отмена"
  closeFormBtn.addEventListener("click", function() {
    formPopup.style.display = "none";
  });
});


// Получаем элементы формы
const form = document.querySelector('.form-container');
const captainInput = form.querySelector('input[name="captain"]');
const teamInput = form.querySelector('textarea[name="team"]"');

// Обработчик отправки формы
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Формируем сообщение для отправки в Telegram
  const message = `Новая заявка на участие:\n\nКапитан: ${captainInput.value}\nСостав команды: ${teamInput.value}`;
  
  // Формируем ссылку для открытия чата в Telegram
  const telegramLink = `tg://msg?text=${encodeURIComponent(message)}&to=Sselsno`;
  
  // Открываем ссылку в Telegram
  window.location.href = telegramLink;
});
