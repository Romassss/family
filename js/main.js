let feliratok = ["Irházi-Család", "Леха купи биткоин", "Apa", "Iza", "Zsombi"];

function getImgTitle(a) {
    let c = document.getElementById("felirat");
    let ctx = c.getContext("2d");
    ctx.font = "41px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.fillText(feliratok[a], 40, 80);
}

let b;

function delayedFelirat() {
    getImgTitle(b);
}

function clearFelirat() {
    let c = document.getElementById("felirat");
    let ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
}

$('#csaladGomb').click(function () {
    $("#change-image").fadeOut(1200, function () {
        $('#change-image').attr('src', "img/csalad.jpg");
        $("#change-image").fadeIn(1200);
    });
    b = 0;
    clearFelirat();
    setTimeout(delayedFelirat, 2500);
}
);

$('#anyaGomb').click(function () {
    $("#change-image").fadeOut(1200, function () {
        $('#change-image').attr('src', "img/Anya.jpg");
        $("#change-image").fadeIn(1200);
    });
    b = 1;
    clearFelirat();
    setTimeout(delayedFelirat, 2500);
}
);

$('#apaGomb').click(function () {
    $("#change-image").fadeOut(1200, function () {
        $('#change-image').attr('src', "img/Apa.jpg");
        $("#change-image").fadeIn(1200);
    });
    b = 2;
    clearFelirat();
    setTimeout(delayedFelirat, 2500);
}
);

$('#izaGomb').click(function () {
    $("#change-image").fadeOut(1200, function () {
        $('#change-image').attr('src', "img/Iza.jpeg");
        $("#change-image").fadeIn(1200);
    });
    b = 3;
    clearFelirat();
    setTimeout(delayedFelirat, 2500);
}
);

$('#zsombiGomb').click(function () {
    $("#change-image").fadeOut(1200, function () {
        $('#change-image').attr('src', "img/Zsombi.jpg");
        $("#change-image").fadeIn(1200);
    });
    b = 4;
    clearFelirat();
    setTimeout(delayedFelirat, 2500);
}
);


