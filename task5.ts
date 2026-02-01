// Провести рефакторинг задачи так, чтобы код (toString().padStart(2, "0")) не повторялся, вынести его в отдельную функцию и использовать
// Саму задачу обернуть в отдельную функцию getDate, которая принимает в качестве параметра произвольную дату в формате '2026-10-22T22:10:15'
//* Проверить валидна ли дата в переданном параметре

//const now: Date = new Date();
function numberToStringFormatTwoDigits(format: number): string {
  return format.toString().padStart(2, "0");
}

function formatDateTime(newDateString: string): string {
  const newFormatDate = new Date(newDateString);
  const day = numberToStringFormatTwoDigits(newFormatDate.getDate());
  const month = numberToStringFormatTwoDigits(newFormatDate.getMonth() + 1);
  const year = newFormatDate.getFullYear();

  const hours = numberToStringFormatTwoDigits(newFormatDate.getHours());
  const minutes = numberToStringFormatTwoDigits(newFormatDate.getMinutes());
  const seconds = numberToStringFormatTwoDigits(newFormatDate.getSeconds());

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}
console.log(formatDateTime("2026-02-01T21:17:10"));
