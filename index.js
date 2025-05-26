const hero = document.querySelector(".hero");
const text = document.querySelector("h1");
const walk = 200; //px

function shadow(e) {
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;
  // const { offsetWidth: width, offsetHeight: height } = hero;
  let x = e.offsetX;
  let y = e.offsetY;
  // let { offsetX: x, offsetY: y};

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = x = e.target.offsetRight;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2); // 100 is the value but the range is -50 to 50
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgb(174, 0, 255), ${
    xWalk * -1
  }px ${yWalk}px 0 rgb(0, 200, 255), ${yWalk}px ${
    xWalk * -1
  }px 0 rgb(0, 221, 59), ${yWalk * -1}px ${xWalk}px 0 rgb(255, 0, 166)`;

  console.table(xWalk, yWalk);
}

hero.addEventListener("mousemove", shadow);
