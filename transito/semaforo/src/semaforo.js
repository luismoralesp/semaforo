import('../libs/index.js').then(({luz, timepo, cont})=> {
    let fn = (prender, apagar, ROJO, VERDE, AMARILLO, esperar, contar, descontar, pantalla, colocar ) => {
        
        if (!getCookie("code")){
            setCookie("code", "\
                prender(VERDE).\
                pantalla(VERDE).\
                esperar(2500).\
                prender(AMARILLO).\
                contar().\
                esperar(1000).\
                apagar(VERDE).\
                apagar(AMARILLO).\
                prender(ROJO).\
                pantalla(ROJO).\
                esperar(1500).\
                apagar(ROJO).\
            ");
        }
        let code = getCookie("code");
        code = code.replace(/\./g, ',');
        code = code.replace(/\s/g, '');
        let seq = eval("[" + code + "]");
        
        let resolving = (index = 0) => {
            if (index < seq.length - 1){
                return (done) => {
                    seq[index](resolving(index + 1), done)
                }
            } else {
                return (done) => {
                    seq[index](done);
                }
            }
            
        }

        let loop = () => {
            resolving()(loop)
        }
        
        loop();
    };

    fn(
        luz.prender, 
        luz.apagar, 
        luz.ROJO,
        luz.VERDE,
        luz.AMARILLO,
        timepo.esperar,
        cont.contar,
        cont.descontar,
        cont.pantalla,
        cont.colocar
    )
    
});

function setCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 *1000));
        var expires = "; expires=" + date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
