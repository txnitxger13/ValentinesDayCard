$(document).ready(function() {
    var envelope = $("#envelope");
    var btnOpen = $("#open");
    var btnReset = $("#reset");
    var soundBite = new Audio("loveSounds.mp3");

    envelope.click(function() {
        open();
    });

    btnOpen.click(function() {
        open();
    });

    btnReset.click(function() {
        close();
    });


    function open () {
        playAudio();
        envelope.addClass("open")
        .removeClass("close");
        
    }

    function close () {
        stopAudio();
        envelope.addClass("close")
        .removeClass("open");
    }

    function playAudio(){
        soundBite.load();
        soundBite.play();
    }

    function stopAudio(){
        soundBite.pause();
    }

})