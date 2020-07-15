export default function Counter() {

    function countdown(minutes) {
        var seconds = 60;
        var mins = minutes
        function tick() { 
            var counter = ""
            var current_minutes = mins-1
            seconds--;
            counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
            if( seconds > 0 ) {
                setTimeout(tick, 1000);
            } else {
                if(mins > 1){
                    countdown(mins-1);           
                }
            }
        }
        tick();
    }
    //You can use this script with a call to onclick, onblur or any other attribute you would like to use. 
    
    return (
        countdown(5)
    )