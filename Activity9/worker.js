
onmessage = function(event) {
    if (event.data === 'ButtonClicked') {
        function timer() {
            const date = new Date();
            var seconds = date.getSeconds()
            postMessage([date,seconds]);
            
        };
        timer();
        setInterval(timer,1000);
    } else if (event.data == 'Btn') {
        postMessage('Reset');
    };
};
