
var luz = {
    VERDE: "verde",
    AMARILLO: "amarilla",
    ROJO: "roja",

    prender: (color) => {
        return (next, done) => {
            let luz = document.querySelector("." + color);
            luz.classList.add("encendida");
            next(done);
        }

    },

    apagar: (color) => {
        return (next, done) => {
            let luz = document.querySelector("." + color);
            luz.classList.remove("encendida");
            next(done);
        }
    }
    
};

export {luz};