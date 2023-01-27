'use strict';
{

    class omikuji {
        constructor (){
            // const main = document.createElement('main');
            const section = document.createElement('section');
            // section.classList.add('panel');

            this.h1 = document.createElement('h1');
            this.h1.textContent = '今日の運勢は？';

            this.p = document.createElement('p');
            this.p.textContent = '?';
            this.p.setAttribute('id', 'result');

            section.appendChild(this.h1);
            section.appendChild(this.p);

            const main = document.querySelector('main');
            main.appendChild(section);
            // this.button = document.createElement('button');
            // this.button.textContent = 'ひけぃ！';
            // this.button.setAttribute('id', 'btn');

            // main.appendChild(section);
            // main.appendChild(this.button);
        }
    }

    const omikujes = new omikuji();

    const btn =document.getElementById('btn');
    const result = document.getElementById('result');


    btn.addEventListener('click',() => {
        const results = ['大吉','中吉','小吉','凶']
        const n = Math.floor(Math.random()* results.length);

        result.textContent = results[n]
        //result.textContent= n;

        // switch(n) {
        //     case 0:
        //         result.textContent='大吉';
        //         break;
        //     case 1:
        //         result.textContent= '中吉';
        //         break;
        //     case 2:
        //         result.textContent= '小吉'
        //         break;
        // }
    });

}