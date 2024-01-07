/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WorkOrWeekend {
  Weekend,
  Workday,
}

function isWeekend(dayStatus: WorkOrWeekend): boolean {
  return dayStatus === WorkOrWeekend.Weekend;
}
