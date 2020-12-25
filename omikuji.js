'use strict';

window.onload = function () {
    const btn = document.querySelector('#omikuji_btn');
    btn.onclick = () => {
      let list1 = ['大吉', '中吉', '小吉', '末吉', '吉','凶'];
      let rand = Math.floor(Math.random() * 100);
      const result = document.getElementById('view');
      if (rand <= 5) {
        result.textContent = list1[0];
        result.classList.add('daikichi');
        result.innerHTML
      } else if (rand <= 25) {
        result.classList.remove('daikichi');
        result.textContent = list1[1];
      } else if (rand <= 45) {
        result.classList.remove('daikichi');
        result.textContent = list1[2];
      } else if (rand <= 80) {
        result.classList.remove('daikichi');
        result.textContent = list1[3];
      } else if (rand <= 100) {
        result.classList.remove('daikichi');
        result.textContent = list1[4];
      }
    }
  }
