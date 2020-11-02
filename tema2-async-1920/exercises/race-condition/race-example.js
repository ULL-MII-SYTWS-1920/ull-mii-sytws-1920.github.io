// https://medium.com/@ubershmekel/yes-there-are-race-conditions-in-javascript-ba044571a914
// An example race condition in JavaScript
// When you run this script using Node or in a browser, it
// does not print "Ended with 0", but a random number.
// Even though the functions running
// simply loop 100 iterations of adding and subtracting.
// The reason the end result is random is because the
// sleeps are of random duration and the time between the read
// of the variable causes the eventual write to be incorrect
// when `adder` and `subber` interleave.
// This problem is similar to:
// https://en.wikipedia.org/wiki/Time-of-check_to_time-of-use

let number = 0;
const times = 100;

function sleep() { 
  return new Promise(
    (resolve) => setTimeout(resolve, Math.random() * 5));
}

async function adder() {
  for (let i = 0; i < times; i++) {
    await sleep();

      let read = number; 
      read = read + 1;

    await sleep(); // This task is interrupted here giving opportunity for 'subber' to take the processor

    number = read; // But there is a chance 'read' is obsolete. 
                   // It is a sort of "manual" co-routine race cndition: not atomic anymore
  }
}

async function subber() {
  for (let i = 0; i < times; i++) {
    await sleep();
      let read = number;
      read = read - 1;
    await sleep();

    number = read;
  }
}

async function main() {
  console.log("Started with", number);

  await Promise.all([
    adder(),
    subber(),
  ]);
  /*
  await adder().then(subber)
  */

  console.log("Ended with", number);
}

main()
  .then(() => console.log("All done"))
  .catch((err) => console.error(err));
