// 2. Write a JS function and ask for user DOB ex: 10/June/1998 and if
// user age is between 18 to 44 then this link should be open
// automatically in browser “https://selfregistration.cowin.gov.in”.

let DOB = new Date(prompt("Enter your DOB")).getTime();
const today = new Date().getTime();

let diff = Math.floor(today - DOB);
diff /= 60 * 60 * 24 * 1000;
let years = Math.abs(Math.round(diff / 365.25));

if (years >= 18 && years <= 44)
  window.open("https://selfregistration.cowin.gov.in");
else alert("No need to register you are underage");
