/**
 * Created by youngdzx on 2017/2/4.
 */
//枚举类型
function inherit(p) {
    function f() {};
    f.prototype = p;
    return new f();
}

function enumeration(namesToValues) {
    var enumeration = function () {
      throw "Can't Instantiate Enumerations";  
    };
    
    var proto = enumeration.prototype = {
        constructor : enumeration,
        toString    : function () { return this.name; },
        valueOf     : function () { return this.value; },
        toJSON      : function () { return this.name; }
    };

    enumeration.values = [];

    for (name in namesToValues) {
        var e = inherit(proto);
        e.name = name;
        e.value = namesToValues[name];
        enumeration[name] = e;
        enumeration.values.push(e);
    }

    enumeration.foreach = function (f, c) {
        for (var i = 0; i < this.values.length; i++) {
            f.call(c, this.values[i]);
        }
    };

    return enumeration;
}

var Coin = enumeration({Penny: 1, Nickel: 5, Dime: 10, Quarter: 25});// 创建了一个Coin枚举类型。
var d = Coin.Dime;//这是一个对象，包括了实参传入的数值10，和类型通用方法toString，valueOf...等等。
//枚举类型：通过调用 enumeration 这个函数，实际返回了一个类型，该类型包括了实参传入的实例属性，和类的通用方法。