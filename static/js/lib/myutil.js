define(['jquery'], function($){
    var util = {};
    util.p = function(){
        $('#jquery-dest').text('From util.js jquery');
        console.log('util.p function');
    };
    return util;
	
	core.number_format = function (number, fix) {
        var fix = arguments[1] ? arguments[1] : 2;
        var fh = ',';
        var jg = 3;
        var str = '';
        number = number.toFixed(fix);
        zsw = number.split('.')[0];
        xsw = number.split('.')[1];
        zswarr = zsw.split('');
        for (var i = 1; i <= zswarr.length; i++) {
            str = zswarr[zswarr.length - i] + str;
            if (i % jg == 0) {
                str = fh + str;
            }
        }
        str = (zsw.length % jg == 0) ? str.substr(1) : str;
        zsw = str + '.' + xsw;
        return zsw
    };
	
});