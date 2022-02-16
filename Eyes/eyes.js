document.onmousemove = (event) => {
  const balls = document.getElementsByClassName('ball');
  const screenItems = document.getElementsByClassName('ball').length;
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';


  for (let i = 0; i < screenItems; i++) {
     balls[i].style.left = x;
     balls[i].style.top = y;
     balls[i].transform = 'translate(-' + x + ',-' + y + ')';

  }
 
};
