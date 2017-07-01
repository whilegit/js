/**
 * 定义一个模块
 * 可以返回对象/函数
 */
console.log("I am in util.js");
define(['jquery'], function($){
    var util = {};
    util.p = function(){
        $('#jquery-dest').text('From util.js jquery');
        console.log('util.p function');
    };
    return util;
});

/* 如果模块没有依赖也没有方法,可以这样定义.
define({
    color: "black",
    size: "unisize"
});
 */

/*
 *模块没有依赖,仅为了完成一些初始化工作,可以传入函数
define(function () {
    //Do setup work here

    return {
       color: "black",
       size: "unisize"
    }
});
*
*/


/*
 *　函数模块 
define(["my/cart", "my/inventory"], function(cart, inventory) {
    //return a function to define "foo/title".
    //It gets or sets the window title.
    return function(title) {
        return title ? (window.title = title) : inventory.storeName + ' ' + cart.name;
    }
});
*/
