onmessage = function(event) {
    if (event.data === 'ButtonClicked') {
        function timer() {
            const date = new Date();
            postMessage(date);
        };
        timer();
        setInterval(timer,1000);
    };
};