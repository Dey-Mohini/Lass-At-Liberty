





let take = document.getElementById('typewritercontent');

let typewriter = new Typewriter(take, {
  loop: true,
  delay: 75,
});
let arr = ['Bold','Brave','Independent','HeadStrong'];
for(let i=0;i<arr.length;i++){
    let s = arr[i];
    s.toString();

    typewriter
  .pauseFor(800)
  .typeString(s)
  .pauseFor(2500)
  .deleteChars(15)
  .pauseFor(800)
  .start();

}
