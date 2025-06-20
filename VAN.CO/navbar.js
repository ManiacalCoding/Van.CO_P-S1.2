// const h2 = document.getElementById("myH2");
// let html = navbar.txt;
// h2.insertAdjacentHTML("afterend", html);

import { appendFile } from '/fs';
appendFile('navbar.html', "<h1>HI</h1>", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Data appended successfully!');
})
console.log("Successfuly fired.");