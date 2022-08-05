let clock = () => {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();

  let period = "AM";
  if (hrs === 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

  hrs = hrs < 10 ? `0${hrs}` : hrs;
  mins = mins < 10 ? `0${mins}` : mins;
  secs = secs < 10 ? `0${secs}` : secs;

  let point = ":";
  let time = `${hrs} ${point} ${mins} ${point} ${secs} ${period}`;
  const myTime = document.getElementById("clock");
  myTime.innerHTML = time;

  setTimeout(() => {
    clock();
    if(secs %2 == 0){
        
    }else{
        
    }
  }, 1000);
};
clock();

// ----------------------------------------------------------------------------------------------

let date = () => {
  let month = new Date().getMonth();

  switch (month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }

  console.log(month);
  const myMonth = document.getElementById("date");
  myMonth.style.textTransform = "uppercase";
  myMonth.innerHTML = month;
};
date();

// ----------------------------------------------------------------------------------------------

const date2 = () => {
  let week = new Date().getDay();

  switch (week) {
    case 0:
      week = "Sunday";
      break;
    case 1:
      week = "Monday";
      break;
    case 2:
      week = "Tuesday";
      break;
    case 3:
      week = "Wednesday";
      break;
    case 4:
      week = "Thursday";
      break;
    case 5:
      week = "Friday";
      break;
    case 6:
      week = "Saturday";
  }
  console.log(week);
  const myWeek = document.getElementById("week");
  myWeek.style.textTransform = "uppercase";
  myWeek.innerHTML = week;
};

date2();

// ----------------------------------------------------------------------------------------------

const date3 = () => {
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let date = new Date().getDate();
    
    month = month < 10 ? `0${month}` : month;
    date = date < 10 ? `0${date}` : date;

    let fullTime = `${month} / ${date} / ${year}`;

    console.log(fullTime);
    const date_month_year = document.getElementById("year");
    date_month_year.innerHTML = fullTime;
}

date3()