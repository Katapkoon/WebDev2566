var colorsBack = [
    "#c327b7",
    "#fb8e3a",
    "#0c6c3e",
    "#e14428",
    "#834f6a",
    "#2285d0"
];
var colorsText = [
    "#a57b30",
    "#4d579b",
    "#be7e22",
    "#3e915c",
    "#ca4826",
    "#5a3071"
];
onmessage = function(event) {
    let i = event.data[1] 
    if (event.data[0] === 'ButtonClicked') {
        function timer() {
            const date = new Date();
            postMessage([date,colorsBack[i],colorsText[i],i]);
            if (i >= 5){
                i = 0;
            } else {
                i += 1;
            }
            
        };
        timer();
        setInterval(timer,1000);
    } else if (event.data == 'Btn') {
        postMessage('Reset');
    };
};
