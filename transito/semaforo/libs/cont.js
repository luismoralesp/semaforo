var cont = {

    contar: () => {
        return function (next, done) {
            let pant = document.querySelector(".pantalla");
            let num = new Number(pant.textContent);
            num ++;
            pant.textContent = (num <= 9 ? "0" + num : num);
            next(done);
        }.bind(this)
    },
    descontar: () => {
        return (next, done) => {
            let pant = document.querySelector(".pantalla");
            let num = new Number(pant.textContent);
            num --;
            pant.textContent = (num <= 9 ? "0" + num : num);
            next(done);
        }
    },

    pantalla: (col) => {
        return (next, done) => {
            let pant = document.querySelector(".pantalla");
            for (let i = 1; i < pant.classList.length; i++){
                pant.classList.remove(pant.classList[i]);
            }
            
            pant.classList.add(col);
            next(done);
        }
    }
};

export {cont};