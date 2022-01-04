//Building the sun
const sunX = (window.innerWidth / 2) - 25;
const sunY = (window.innerHeight / 2 ) - 25;
const sun = document.querySelector('.sun');
sun.style.left = `${sunX}px`;
sun.style.top = `${sunY}px`;

//Mercury data
const mercuryData = {
  speed: 0.10,
  theta: 0,
  radius: 85,
  el: document.querySelector('.p1')

}

//Mercury data
const venusData = {
  speed: 0.08,
  theta: 0,
  radius: 100,
  el: document.querySelector('.p2')

}

//Earth data
const earthData= {
  speed: 0.07,
  theta: 0,
  radius: 140,
  el: document.querySelector('.p3')

}


//Mars data
const marsData= {
  speed: 0.06,
  theta: 0,
  radius: 170,
  el: document.querySelector('.p4')

}

//Asteriod fields
const asteroidFields = {};
for (let i = 0; i < 200; i++) {
  asteroidFields.el = document.querySelector('.p5')
}


//Jupiter data
const jupiterData= {
  speed: 0.05,
  theta: 0,
  radius: 280,
  el: document.querySelector('.p6')

}

//Saturn data
const saturnData= {
  speed: 0.04,
  theta: 0,
  radius: 370,
  el: document.querySelector('.p7')

}

//Uranus data
const uranusData= {
  speed: 0.03,
  theta: 0,
  radius: 440,
  el: document.querySelector('.p8')

}

//Neptune data
const neptuneData= {
  speed: 0.02,
  theta: 0,
  radius: 490,
  el: document.querySelector('.p9')

}


//Pluto data
const plutoData= {
  speed: 0.01,
  theta: 0,
  radius: 550,
  el: document.querySelector('.p10')

}






//Planet spinning function over Sun rotation
function update (planet) {
  planet.theta += planet.speed;
  planet.el.style.left = `${Math.cos(planet.theta) * planet.radius + sunX + 25}px`;
  planet.el.style.top = `${Math.sin(planet.theta) * planet.radius + sunY + 25}px`;

}



setInterval(() => {
  update(mercuryData)
  update(venusData)
  update(earthData)
  update(marsData)
  update(asteroidFields)
  update(jupiterData)
  update(saturnData)
  update(uranusData)
  update(neptuneData)
  update(plutoData)

}, 30);
