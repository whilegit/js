// 配置requirejs
requirejs.config({
    urlArgs: 'v=' + new Date(),
    //设置baseUrl,所有js的url都以该值为基础
    //如果不配置该值,那么在HTML页面包含require.js的script tag的data-main属性指明的目录将被隐式设置为baseUrl
    //若依赖路径以协议名或者/开头,或以.js结属,将不使用baseUrl
    baseUrl: 'static/js/lib',
    //路径例外.　当依赖项的路径以下列键开头时,用值替换
    paths:{
        app: '../app',
        helper: '../helper',
        jquery:'jquery/3.2.1/jquery.min'
    },
    //shim参数要解决的问题是此用不符合AMD规范的js库
    shim:{
        'helper/utilNoAMD':{
            deps:[],
            exports:'utilNoAMDGlobal'
        },
        'jssor.slider.min':{
            deps:[],
            exports:'$JssorSlider$'
        },
    },
});

//加载js结束后,可以做一些初始化工作
requirejs(['helper/util'],function(util){
    util.p();
    console.log("I am in main.js after util.js have been loaded.");
});

//依赖符合AMD规范的js库
require(['helper/util'], function(util){
    util.p();
});
//依赖不符合AMD规范的js库, requirejs.config(shim)解决这个问题
require(['helper/utilNoAMD'], function(utilNoAMDGlobal){
    utilNoAMDGlobal.start();
});

/**
 * clipboard.js实现文本复到到系统剪切板上
 */
require(['clipboard'],function(Clipboard){
    //　选择器可以使用.#等
    var clp = new Clipboard('.btn');
    clp.on('success', function(e){
        //e.action可能是copy或者cut
        console.log(e.action);
        //e.text 代表复制的文本
        console.log(e.text);
        //触发的控件,通常为按钮
        console.log(e.trigger);
        alert('Copy success');
        e.clearSelection();
    });
});

/**
 * Chart.js 实现HTML5的js图表生成工具
 */
require(['Chart'], function(Chart){
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# 票数',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                    ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                     ],
                borderWidth: 1
                }]
           },
       options: {
           scales: {
               yAxes: [{
                   ticks: {
                       beginAtZero:true
                       }
                   }]
               }
           }
       });
});

/**
 * jssor.js 实现轮播图效果
 */
require(['jssor.slider.min'],function($JssorSlider){
    var jssor_1_options = {
        $AutoPlay: 1,
        $SlideDuration: 800,
        $SlideEasing: $Jease$.$OutQuint,
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
            },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
            }
        };

    var jssor_1_slider = new $JssorSlider("jssor_1", jssor_1_options);

    /*#region responsive code begin*/
    /*you can remove responsive code if you don't want the slider scales while window resizing*/
    
    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 1920);
            jssor_1_slider.$ScaleWidth(refSize);
        } else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
   
    /*#endregion responsive code end*/
    console.log('jssor.slider.min ok');
});

