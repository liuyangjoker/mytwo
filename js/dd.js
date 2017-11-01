;(function($){


    var timer = new Date(),
        y = timer.getFullYear(),
        m = timer.getMonth(),
        d = timer.getDate();
        var ind = 0;

    auto(y,m,d);
    auto(y,m+1,d);
    auto(y,m+2,d);
    function auto(y,m,d){
        var time = new Date(y,m,d),
        year = time.getFullYear(),
        month = time.getMonth(),
        day = time.getDate();
        //获取当前月的第一天
        var one = new Date(year,month,1).getDay();
        //获取当前月一共有多少天
        console.log(one)
        var numDay = new Date(year,month+1,0).getDate();
        console.log(numDay)
        var str = '<h3>'+year+'年'+(month+1)+'月'+'</h3><ul>';
        for(var i=0,len=one;i<len;i++){
            if( day == i && m == month ){
                ind++;
                str += "<li class='start' data-ind='"+ind+"'>" + i + "</li>";
            }else if( i < day && m == month ){
                str += "<li class='dis' style='color:#ccc;'>" + i + "</li>";
            }else if( i == day+1 && m == month ){
                ind++;
                str += "<li class='end' data-ind='"+ind+"'>" + i + "</li>";
            }else{
                ind++;
                str += "<li data-ind='"+ind+"'>" + i + "</li>";
            }
        }
        for(var i=1;i<=numDay;i++){
            str+='<li>'+i+'</li>';
        }
        str+='</ul>';

        $('.rl').append(str)
    }


    var lis  = $(".rl li:not(.dis)");
    lis.on("tap",function(){

    })
   /* var info = {
        start: 1,
        end: 2
    }
    var lis = $(".rl li:not(.dis)");
    console.log(lis);
    function remove(){
        lis.removeClass("start").removeClass("end").removeClass("bg");
        lis.children().remove("span");
    }
    $(".rl li:not(.dis)").on( "tap",function(){
        var ind = $(this).data("ind");
        if( info.start && info.end ){
            remove();
            $(this).addClass("start");
            info.start = ind;
            info.end = "";
            console.log(info);
        }else{
            if( ind > info.start ){
                $(this).addClass("end");
                info.end = ind;
                for( var i = info.start;i<info.end-1;i++ ){
                    lis.eq(i).addClass("bg");
                }
                var str = "<span style='position:absolute;top: -1rem;left:.4rem;color: #fff;background: rgba(0,0,0,.5);width: 3rem;'>共"+ (info.end-info.start-1) +"天</span>";
                lis.eq(info.end-1).append(str);
            }else{
                remove();
                lis.children().remove("span");
                $(this).addClass("start");
                info.start = ind;
                info.end = "";
            }
        }
    } )
*/
})(Zepto)