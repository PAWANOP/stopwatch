const timer=()=>{
  let seconds=00;
  let tens = 00;

  let appendseconds=document.getElementById('seconds');
  let appendtens=document.getElementById('tens');
  let start=document.getElementById('button-start');
  let stop=document.getElementById('button-stop');
  let reset=document.getElementById('button-reset');
  let interval;


  start.addEventListener('click',()=>{
    clearInterval(interval);
    interval=setInterval(starttimer,100);
  });

  stop.addEventListener('click',()=>{
    clearInterval(interval);
  });

  reset.addEventListener('click',()=>{
    clearInterval(interval);
    tens="00";
    seconds="00";
    appendtens.innerHTML=tens;
    appendseconds.innerHTML=seconds;
  });

  const starttimer=()=>{
      tens++;
      if (tens < 9) {
        appendtens.innerHTML="0"+tens;
      }

      if (tens > 9) {
        appendtens.innerHTML=tens;
      }

      if (tens > 99) {
        console.log(seconds);
        seconds++;
        appendseconds.innerHTML='0'+seconds;
        tens = 0;
        appendtens.innerHTML="0"+ 0;
      }
  }
  
}

timer();