// Провести рефакторинг задачи так, чтобы код (toString().padStart(2, "0")) не повторялся, вынести его в отдельную функцию и использовать
// Саму задачу обернуть в отдельную функцию getDate, которая принимает в качестве параметра произвольную дату в формате '2026-10-22T22:10:15'
//* Проверить валидна ли дата в переданном параметре

const now: Date = new Date();
function numberToStringFormatTwoDigits(format: number): string {
  return format.toString().padStart(2, "0");
}
const day = numberToStringFormatTwoDigits(now.getDate());
const month = numberToStringFormatTwoDigits(now.getMonth() + 1);
const year = now.getFullYear();

const hours = numberToStringFormatTwoDigits(now.getHours());
const minutes = numberToStringFormatTwoDigits(now.getMinutes());
const seconds = numberToStringFormatTwoDigits(now.getSeconds());

const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

console.log(formattedDate);

