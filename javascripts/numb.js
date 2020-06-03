
function numb(value) {
    document.getElementById("mainDisplay").innerHTML += value;
    let x = document.getElementById("mainDisplay").innerHTML;
}

//limit inputting / and * without inputting numb first

function funct(value) {
    let x = document.getElementById("mainDisplay").innerHTML;
    let y = document.getElementById("minorDisplay").innerHTML;
    switch (value) {
        case '%':
            x /= 100;
            document.getElementById("mainDisplay").innerHTML = x;
            break;
        case 'inverse':
            x = 1/x;
            document.getElementById("mainDisplay").innerHTML = x;
            break;
        case 'sqr':
            x = x*x;
            document.getElementById("mainDisplay").innerHTML = x;
            break;
        case 'sqrt':
            x = Math.sqrt(x);
            document.getElementById("mainDisplay").innerHTML = x;
            break;
       
        case '/': {
            document.getElementById("mainDisplay").innerHTML = eval(x);
            document.getElementById("mainDisplay").innerHTML +='/';
            break;
        }
        case 'mult': {
            document.getElementById("mainDisplay").innerHTML = eval(x);
            document.getElementById("mainDisplay").innerHTML += '*';
            break;
        }
        case 'minus': {
            document.getElementById("mainDisplay").innerHTML = eval(x);
            document.getElementById("mainDisplay").innerHTML += '-';
            break;
        }
        case 'plus': {
            document.getElementById("mainDisplay").innerHTML = eval(x);
            document.getElementById("mainDisplay").innerHTML += '+';
            break;
        }
        default:
            document.getElementById("mainDisplay").innerHTML = 'Hello';
    }
}

function negate() {
    let x = document.getElementById("mainDisplay").innerHTML;
    if (x[x.length - 1] != '+' && x[x.length - 1] != '-' && x[x.length - 1] != '*' && x[x.length - 1] != '/') {
        document.getElementById("mainDisplay").innerHTML = -x;
    } else {
        document.getElementById("mainDisplay").innerHTML = 'No';
    }
}

function cleartemp() {
    let x = document.getElementById("mainDisplay").innerHTML;
    if (x.length == 0) {
    }
    else {
        document.getElementById("mainDisplay").innerHTML = x.substring(0, x.length - 1);
    }
    
}

function clearhistory() {
    $("#history").text('hello');
} 

function equal() {
    let x = document.getElementById("mainDisplay").innerHTML;
    if (x[x.length - 1] != '+' && x[x.length - 1] != '-' && x[x.length - 1] != '*' && x[x.length - 1] != '/' ) {
        document.getElementById("mainDisplay").innerHTML = eval(x);
        x += '=' + eval(x);
        x = $("<p></p>").text(x);
        $("#history").prepend(x);
    } else {
        document.getElementById("mainDisplay").innerHTML = 'No';
    }  
}
