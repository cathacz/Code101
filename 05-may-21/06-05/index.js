// Blocking vs Non-Blocking code
// Blocking code
// blocking code(loops, console.log, loading files )
// Non-blocking code
window.setTimeout(() => {
  console.log("hej you");
}, 100);
console.log("me first");
// Promises
// Promises are very similar to callbacks but they are a little bit clean on writing
// Promises are the best solution if you want to do something that takes a long time to be done and you don't want your app to wait for it to be done, so it will work on the background, Like downloading an image or a video from another server

const checkPromise = new Promise((resolve, reject) => {
  let x = false;
  if (x) {
    resolve(`everything fetzt`);
  } else {
    reject(`nothing fetzt`);
  }
});

checkPromise
  .then((message) => {
    console.log(`${message} totally`);
  })
  .catch((message) => {
    console.log(`${message} sadly`);
  });

// Promisify setTimeout
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
let ms = 3000;
function doSomething() {
  let text = document.querySelector(".text");
  text.innerHTML = `it took me ${ms}ms to be loaded`;
}

delay(ms).then(doSomething);
