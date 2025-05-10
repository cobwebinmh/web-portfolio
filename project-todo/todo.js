const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Обработка отправки формы
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Отменяем стандартное поведение

  const taskText = input.value.trim(); // Убираем пробелы

  if (taskText !== '') {
    addTask(taskText); // Добавляем задачу
    input.value = ''; // Очищаем поле ввода
  }
});

// Функция добавления задачи
function addTask(text) {
  const li = document.createElement('li'); // Создаём элемент списка
  li.textContent = text;

  // Кнопка удаления
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✕';
  deleteBtn.addEventListener('click', function () {
    li.remove(); // Удаляем задачу
  });

  // Завершение задачи по клику
  li.addEventListener('click', function () {
    li.classList.toggle('completed'); // Переключаем класс
  });

  li.appendChild(deleteBtn); // Добавляем кнопку в задачу
  list.appendChild(li); // Добавляем задачу в список
}