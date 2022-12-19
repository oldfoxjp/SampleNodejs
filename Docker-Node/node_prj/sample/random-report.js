let LOOP_MAX=1e7;
//let RANDOM_MIN=0;
let RANDOM_MAX=20;
let num = [];


class ctest {
    // var a;

    constructor (url) {
        this.a = 0;
        this.url = url;
    }
    set_url (set_url) {
        this.url = set_url;
    }
    get_list_url () {
        url = 122;
        return url + 'v1/get_list';
    }
    get_addr_url () {
        return this.url + 'v1/get_addr';
    }
    get_number_url () {
        return this.url + 'v1/get_number';
    }
}

let tmp = () => {
    this.url = 'aaa';
    console.log(this.url);
}

if (0) {
    let cs = new ctest('https://api.com/');
    let cs2 = new ctest('https://groxi.com/');
    console.log (cs.get_list_url());
    cs.set_url('https://www.google.com');
    console.log (cs.get_list_url());
    console.log (cs.get_addr_url());
    console.log (url);
}

var LAST_ANS=0;

function add(x, y) {
    this.num = x+y;
    return this.num;
}

function add2(x, y) {
    num = x+y;
    return num;
}

for (num=0;num<10; num++) {
    console.log (add(num,num));
}
console.log('-----------');
for (num=0;num<10; num++) {
    console.log (add2(num,num));
}


/*
for (i=0; i<RANDOM_MAX; i++) {
    num[i] = 0;
}

for (i=0; i<LOOP_MAX; i++) {
    num[Math.floor(Math.random()*RANDOM_MAX)]++;
}

for (i=0; i<RANDOM_MAX; i++) {
    console.log (i + ':' + num[i]);
}
*/


