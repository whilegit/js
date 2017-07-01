//
// 这种立即匿名类的定义方法被很多jquery扩展采用,但并不符合AMD规范
// 不符合AMD规范的js模块(即:不能使用全局变量,应该返回一个对象或函数)
// requirejs调用这类模块时,应在config时加上shim参数
/*
 * requirejs.config({
 *    shim:{
 *       'helper/utilNoAMD':{
 *          deps:[],
 *          exports: 'utilNoAMDGlobal'
 *          }
 *      }
 *  });
 */ 
//立即匿名类
(function(window){
    var utilNoAMDGlobal = {};
    utilNoAMDGlobal.start = function(){
        console.log("This is from helper/utilNoAMD.js");
    };

    //导出至全局变量
    window.utilNoAMDGlobal = utilNoAMDGlobal;

})(window);

