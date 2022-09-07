const c = console.log.bind(document);

let birth, dateNow, birthD, dateDiff, years, months, days, hours, minutes, seconds, fullAge;

document.querySelector("#age").addEventListener("input", e => {

  birth = document.querySelector("#birth").value;
  dateNow = new Date();
  birthD = new Date(birth);
  dateDiff = dateNow - birthD;

  years = Math.floor(dateDiff / 1000 / 60 / 60 / 24 / 365.25);
  months = Math.floor(dateDiff % (1000 * 60 * 60 * 24 * 365.25) / (1000 * 60 * 60 * 24 * 30.4375));
  days = Math.floor(dateDiff % (1000 * 60 * 60 * 24 * 30.4375) / (1000 * 60 * 60 * 24));
  hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
  seconds = Math.floor(dateDiff % (1000 * 60) / (1000));

  //  fullAge = `Your Full Age: ${years} Years | ${months} Months | ${days} Days | ${hours} Hours | ${minutes} Minutes | ${seconds} Seconds`;
  fullAge = `
  <h2>Your Full Age: </h2>
  <h4>Years: ${years}</h4>
  <h4>Months: ${months}</h4>
  <h4>Days: ${days}</h4>
  <h4>Hours: ${hours}</h4>
  <h4>Minutes: ${minutes}</h4>
  <h4>Seconds: ${seconds}</h4>
  `;

  document.querySelector("#date").innerHTML = fullAge;

  // document.querySelector("#absolute").innerHTML = `
  // <hr />
  // <h2>Your Age In Absolute Values: </h2>
  // <h4 id="years">You Have: ${Math.floor(dateDiff / 1000 / 60 / 60 / 24 / 365)} Years</h4>
  // <h4 id="months">You Have: ${Math.floor(dateDiff / 1000 / 60 / 60 / 24 / 30)} Months</h4>
  // <h4 id="days">You Have: ${Math.floor(dateDiff / 1000 / 60 / 60)} Hours</h4>
  // <h4 id="hours">You Have: ${Math.floor(dateDiff / 1000 / 60 / 60 / 24)} Days</h4>
  // <h4 id="minutes">You Have: ${Math.floor(dateDiff / 1000 / 60)} Minutes</h4>
  // <h4 id="seconds">You Have: ${Math.floor(dateDiff / 1000)} Seconds</h4>
  // `;

  document.querySelector("#absolute").innerHTML = "Your Age In Absolute Values: ";
  document.querySelector("#years").innerHTML = `You Have: ${Math.floor(dateDiff / 1000 / 60 / 60 / 24 / 365)} Years`;
  document.querySelector("#months").innerHTML = `You Have: ${Math.floor(dateDiff / 1000 / 60 / 60 / 24 / 30)} Months`;
  document.querySelector("#days").innerHTML = `You Have: ${Math.floor(dateDiff / 1000 / 60 / 60 / 24)} Days`;
  document.querySelector("#hours").innerHTML = `You Have: ${Math.floor(dateDiff / 1000 / 60 / 60)} Hours`;
  document.querySelector("#minutes").innerHTML = `You Have: ${Math.floor(dateDiff / 1000 / 60)} Minutes`;
  document.querySelector("#seconds").innerHTML = `You Have: ${Math.floor(dateDiff / 1000)} Seconds`;

  // Update Full Age
  setInterval(() => {
    dateNow = new Date();
    dateDiff = dateNow - birthD;
    years = Math.floor(dateDiff / 1000 / 60 / 60 / 24 / 365.25);
    months = Math.floor(dateDiff % (1000 * 60 * 60 * 24 * 365.25) / (1000 * 60 * 60 * 24 * 30.4375));
    days = Math.floor(dateDiff % (1000 * 60 * 60 * 24 * 30.4375) / (1000 * 60 * 60 * 24));
    hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
    seconds = Math.floor(dateDiff % (1000 * 60) / (1000));
    fullAge = `
    <h2>You Full Age: </h2>
    <h4>Years: ${years}</h4>
    <h4>Months: ${months}</h4>
    <h4>Days: ${days}</h4>
    <h4>Hours: ${hours}</h4>
    <h4>Minutes: ${minutes}</h4>
    <h4>Seconds: ${seconds}</h4>
    `;
    document.querySelector("#date").innerHTML = fullAge;
    document.querySelector("#years").innerHTML = `You Have: ${Math.floor(dateDiff / 1000 / 60 / 60 / 24 / 365.25)} Years`;
    document.querySelector("#months").innerHTML = `You Have: ${Math.floor(dateDiff / 1000 / 60 / 60 / 24 / 30.4375)} Months`;
    document.querySelector("#days").innerHTML = `You Have: ${Math.floor(dateDiff / 1000 / 60 / 60 / 24)} Days`;
    document.querySelector("#hours").innerHTML = `You Have: ${Math.floor(dateDiff / 1000 / 60 / 60)} Hours`;
    document.querySelector("#minutes").innerHTML = `You Have: ${Math.floor(dateDiff / 1000 / 60)} Minutes`;
    document.querySelector("#seconds").innerHTML = `You Have: ${Math.floor(dateDiff / 1000)} Seconds`;
  }, 1000);
})

let pass, password;
document.querySelector("#pass_generator").addEventListener("input", e => {
  const ALPHABET = "qwertyuioplkjhgfdsazxcvbnm";
  const NUMBERS = "123456789";
  const SIGNS = "!@#$%^&*_.";
  password = "";
  pass = "";
  if (document.querySelector("#characters").checked) {
    pass += ALPHABET;
  }
  if (document.querySelector("#numbers").checked) {
    pass += NUMBERS;
  }
  if (document.querySelector("#signs").checked) {
    pass += SIGNS;
  }
  // pass = pass.split("");
  if (pass.length === 0) {
    document.querySelector("#pass_generator output").innerHTML = "";
    return;
  }
  passwordLength = +document.querySelector("#length").value;
  // let password = "";
  // c("#".repeat(20));
  for (i = 0; i < passwordLength; i++) {
    password += pass[Math.floor(Math.random() * pass.length)];
  }
  document.querySelector("#pass_generator output").innerHTML = password;
})

document.querySelector("#pass_generator output").addEventListener("click", e => {
  copyPassword();
})

document.querySelector("#pass_generator button").addEventListener("click", e => {
  copyPassword();
})

function copyPassword() {
  document.querySelector("#pass_generator h5").innerHTML = "Copied Successfully";
  setTimeout(() => {
    document.querySelector("#pass_generator h5").innerHTML = "";
  }, 3000);
  navigator.clipboard.writeText(password);
}