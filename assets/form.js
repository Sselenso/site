document.addEventListener("DOMContentLoaded", function() {
  var showFormBtn = document.getElementById("show-form");
  var closeFormBtn = document.getElementById("close-form");
  var formPopup = document.getElementById("myForm");

  // Show the form when "Sign up" button is clicked
  showFormBtn.addEventListener("click", function() {
    formPopup.style.display = "block";
  });

  // Hide the form when "Cancel" button is clicked
  closeFormBtn.addEventListener("click", function() {
    formPopup.style.display = "none";
  });
});

function sendTelegramMessage(form) {
  const url = form.querySelector('input[name="url"]').value;
  const captain = form.querySelector('input[name="captain"]').value;
  const team = form.querySelector('textarea[name="team"]').value;

  const message = `New application:%0ACaptain: ${captain}%0ATeam: ${team}`;

  const telegramBotToken = '6233062235:AAHqGmnsqpQedV6OzKSd23xJYIVjRYey_fc';
  const telegramChatId = '742627429';

  const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${telegramChatId}&text=${encodeURIComponent(message)}`;
  fetch(telegramUrl)
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        // Если сообщение успешно отправлено, открываем чат
        window.open(url);
      } else {
        // Если произошла ошибка, выводим сообщение об ошибке
        alert('Ошибка при отправке сообщения в Telegram');
      }
    });
}