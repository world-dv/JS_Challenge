const clockTitle = document.querySelector(".js-clock");

function nowDates(year, month, day) {
  const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let nowDays = 0;
  let index;
  for (index = 1; index <= month; index++) {
    nowDays += days[index];
  }
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    nowDays += 1;
  }
  nowDays += day;
  return nowDays;
}

function christmasClock() {
  const now = new Date();
  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth() + 1;
  const nowDays = now.getDate();
  const Days = nowDates(nowYear, nowMonth, nowDays);
  const ChistmasDays = nowDates(nowYear, 12, 25);

  const nowHour = now.getHours();
  const nowMin = now.getMinutes();
  const nowSec = now.getSeconds();

  let lastDates = ChistmasDays - Days;
  clockTitle.innerText = `${lastDates}d ${String(24 - nowHour).padStart(
    2,
    "0"
  )}h ${String(60 - nowMin).padStart(2, "0")}m ${String(59 - nowSec).padStart(
    2,
    "0"
  )}s`;
}

christmasClock();
setInterval(christmasClock, 1000);
