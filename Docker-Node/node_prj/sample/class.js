 /**
 * コンストラクタのオーバライドは可能？
 */
class Person {
    constructor() {
        console.log ("コンストラクタ");
    }

    show () {
        console.log('親クラス');
        console.log (this._age);
        console.log (this._name);
        console.log (this._sex);
    }

    get result() {
        return this._result;
    }

    set sex(arg) {
        this._sex = (arg == '男' || arg == '女') ? arg : 'だれだ';
    }
    set name(arg) {
        if (arg >= 200) {
            this._result |= 0x01;
        }
        this._name = arg;
    }
    set age(arg) {
        if (arg >= 200) {
            this._result |= 0x02;
        }
        this._age = arg;
    }
}

class Syain extends Person {
    show () {
        console.log('子供');
        super.show();
        console.log (this._corp);
    }

    setCorpName (arg) {
        this._corp = arg;
    }

    static setCorp (arg) {
        return arg;
    }
}

a = new Syain;
a.setCorpName('groxi');
a.name = '三上';

console.log (Syain.setCorp('groxi'));