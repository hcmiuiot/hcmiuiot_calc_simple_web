function decToHexa() {
    let n = $("#mainDisplay").text();
    if (n[n.length - 1] != '+' && n[n.length - 1] != '-' && n[n.length - 1] != '*' && n[n.length - 1] != '/') {
        var hexaDeciNum = new String();
        var i = 0;
        while (n != 0) {
            var temp = 0;
            temp = n % 16;
            if (temp < 10) {
                hexaDeciNum[i] = temp + 48;
                i++;
            } else {
                hexaDeciNum[i] = temp + 55;
                i++;
            }
            n = Math.floor(n / 16);
        }
        $('#mainDisplay').text('');
        for (var j = i - 1; j >= 0; j--)
            $('#mainDisplay').append(String.fromCharCode(hexaDeciNum[j]));
    }
    else { $("#mainDisplay").text("No") }
}

function hexaToDec() {
    let n = $("#mainDisplay").text();
    if (n[n.length - 1] != '+' && n[n.length - 1] != '-' && n[n.length - 1] != '*' && n[n.length - 1] != '/') {
        var len = n.length;
        var base = 1;
        var dec_val = 0;
        for (var i = (len - 1); i >= 0; i--) {
            if (n[i] >= '0' && n[i] <= '9') {
                a = n.charCodeAt(i)
                dec_val += (a - 48) * base;
                base = base * 16;
            } else if (n[i] >= 'A' && n[i] <= 'F') {
                b = n.charCodeAt(i)
                dec_val += (b - 55) * base;
                base = base * 16;
            }
        }
        $('#mainDisplay').text(dec_val);
    }
    else { $("#mainDisplay").text("No") }
}

function decToOct() {
    let n = $("#mainDisplay").text();
    if (n[n.length - 1] != '+' && n[n.length - 1] != '-' && n[n.length - 1] != '*' && n[n.length - 1] != '/') {
        var octalNum = new String();
        var i = 0;
        while (n != 0) {
            octalNum[i] = n % 8;
            n = Math.floor(n / 8);
            i++;
        }
        $('#mainDisplay').text('');
        for (var j = i - 1; j >= 0; j--)
            $('#mainDisplay').append(octalNum[j]);
    }
    else { $("#mainDisplay").text("No") }
 }

    function octToDec() {
        let n = $("#mainDisplay").text();
        if (n[n.length - 1] != '+' && n[n.length - 1] != '-' && n[n.length - 1] != '*' && n[n.length - 1] != '/') {
            var num = n;
            var dec_value = 0;
            var base = 1;
            var temp = num;
            while (temp) {
                var last_digit = temp % 10;
                temp = Math.floor(temp / 10);
                dec_value += last_digit * base;
                base = base * 8;
            }
            $('#mainDisplay').text(dec_value);

        }
        else { $("#mainDisplay").text("No") }
    }

 function decToBi() {
        let n = $("#mainDisplay").text();
        if (n[n.length - 1] != '+' && n[n.length - 1] != '-' && n[n.length - 1] != '*' && n[n.length - 1] != '/') {
            var binaryNum = new String();
            var i = 0;
            while (n > 0) {
                binaryNum[i] = n % 2;
                n = Math.floor(n / 2);
                i++;
            }
            $('#mainDisplay').text('');
            for (var j = i - 1; j >= 0; j--)
                $('#mainDisplay').append(binaryNum[j]);
        }
        else { $("#mainDisplay").text("No") }
 }

 function biToDec() {
        let n = $("#mainDisplay").text();
        if (n[n.length - 1] != '+' && n[n.length - 1] != '-' && n[n.length - 1] != '*' && n[n.length - 1] != '/') {
            var num = n.toString();
            var dec_value = 0;
            var base = 1;
            var len = num.length;
            for (var i = len - 1; i >= 0; i--) {
                if (num[i] == '1')
                    dec_value += base;
                base = base * 2;
            }
            $('#mainDisplay').text(dec_value);
        }
        else { $("#mainDisplay").text("No") }
    }
