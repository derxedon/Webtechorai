function buttonhandler() {
    var pi = 1;
    var x = 3;
    for(let i = 0; i<5000 ; i++){
        pi -= 1/x;
        x += 2;
        pi += 1/x;
        x +=2;
    }
    pi *=4;
    document.getElementById("banner").innerHTML = pi  ;

    var n = 1;
    var pi2 = 1;
    for(let i = 0; i< 1000; i++){
        pi2 *= ((2*n)*(2*n))/((2*n-1)*(2*n+1))
        n += 1;
    }
    pi2 *= 2;
    alert(pi2);
}

