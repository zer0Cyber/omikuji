'use strict';

window.onload = function () {
  const box = document.getElementById('omikujiBox');
    
  box.addEventListener('click', () => {
      const music = new Audio('syakasyaka.mp3');
      music.play();
      box.classList.add('buruburu');
      setTimeout(omikuji, 2000);
      setTimeout(animete, 2000);
    })

    const animete = () => {
      box.classList.remove('buruburu');
    }

    
    const omikuji = () => {
      let list = ['大吉', '中吉', '小吉', '吉', '凶'];
      let daikichi = ['おもいがけないサプライズが！','宝くじを買ってみる？','ケーキ買って帰ろう♪'];
      let chukichi = ['ディズニーでスタンバイパスが取れるかも？', 'アノ人から電話がかかってくるよ',	'ふわふわの卵焼きが作れそう'];
      let shokichi = ['あしたは晴れるね','お年玉がもらえるかも？','早起きできそう！'];
      let kichi =  ['マスク忘れてない？', '今日できないことは明日にしよう', '身だしなみを整えたらいいことが…！？'];
      let kyo = ['あれ？ニキビできた？','マスクのひも切れた？',	'歯に青のりついてるよ？'];

    

      let rand = Math.floor(Math.random() * 100);
      const result = document.getElementById('view');

      


      if (rand <= 5) {
        result.textContent = list[0];
        result.classList.add('daikichi');
        result.innerHTML = daikichi[Math.floor(Math.random() * daikichi.length)];
      } else if (rand <= 25) {
        result.classList.remove('daikichi');
          result.textContent = chukichi[Math.floor(Math.random() * chukichi.length)];
        } else if (rand <= 45) {
        result.classList.remove('daikichi');
        result.textContent = shokichi[Math.floor(Math.random() * shokichi.length)];
      } else if (rand <= 80) {
        result.classList.remove('daikichi');
        result.textContent = kichi[Math.floor(Math.random() * kichi.length)];
      } else if (rand <= 100) {
        result.classList.remove('daikichi');
        result.textContent = kyo[Math.floor(Math.random() * kyo.length)];
      }
    }
  
  }
