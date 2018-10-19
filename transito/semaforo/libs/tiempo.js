var timepo = {
    esperar: (ms) => {
        return (next, done) => {
            setTimeout(function(){
                next(done);
            }, ms);
            
        }
     }
};

export {timepo};