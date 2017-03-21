/**
 * Created by dzx on 2017/3/16.
 *
 * 基本思想为了实现ie6兼容，选择最基本的dom方法
 * 未能实现的方法例如className querySelector则使用自定义方法
 */
function Myselector(selector, context) {
    return new Myselector.fn.init(selector, context);
}

Myselector.fn = Myselector.prototype = {
    version : "1.0.0",
    init    : function (selector, context) {
        if (!typeof selector === 'string') return new Error('Please ues string');
        if (selector === '*') {
            return classify("currency");
        }
    }
};

function classify(type,selector) {
    switch (type) {
        case "currency" :  return currency();
    }
}

function currency() {
    var body = document.getElementsByTagName('body')[0];
    var currencyCollection = [];
    everyone(body.childNodes, function (index, node) {
        if(node.nodeType === 1 && node.nodeName !== "SCRIPT"){
            currencyCollection.push(node);
        }
    });
    return new Collection(currencyCollection);
}

function everyone(array, callback) {
    var that = array;
    for(var i = 0; i < that.length; i++){
        callback(i, that[i]);
    }
}

function Collection(nodes) {
    this.nodes = nodes;
}

Collection.prototype = {
  each : function () {
      for(var i = 0; i < this.nodes.length; i++){
          console.log(i);
      }
  }  
};

