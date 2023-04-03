function TurnonOff() {
    var Lamp = document.getElementById('img');
    
    if(Lamp.src.match('lampadaoff')) {
        Lamp.src = 'img/lampadaon.jpg';
    } else {
        Lamp.src = 'img/lampadaoff.jpg';

    }
}