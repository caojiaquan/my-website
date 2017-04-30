/**
 * Created by Administrator on 2017/4/27 0027.
 */

$(".navbar-right li").on('click',function(){//导航菜单注册点击事件，调整滚动条高度
    $(".navbar-collapse.collapse.in").removeClass('in');
    var topWork =  $(".flexslider").innerHeight() +30;
    var topPhoto = topWork + $("#work").outerHeight(true);
    var topAbout = topPhoto + $("#photoWall").outerHeight();
    var topContact = topAbout + $(".about").outerHeight();
    var topFotter = topContact + $("#contact").outerHeight();
    var $this = $(this);
    $(this).addClass('selected').siblings().removeClass('selected');
    if($this.index() == 0){
        $(window).scrollTop(0);
    }
    if($this.index() == 1){
        $(window).scrollTop(topWork);
    }
    if($this.index() == 2){
        $(window).scrollTop(topPhoto);
    }
    if($this.index() == 3){
        $(window).scrollTop(topAbout);
    }
    if($this.index() == 4){
        $(window).scrollTop(topContact);
    }
    if($this.index() == 5){
        $(window).scrollTop(topFotter);
    }
});
$(window).scroll(function(){//监视滚动条的高度，让导航条的高度随着滚动条高度变化
    var fn1 = function(){
        if($(window).scrollTop() >= 60){
            $("#main-nav").addClass('nav-selected').css(
                {
                    'top' : $(this).scrollTop()
                }
            );
        }else{
            $("#main-nav").removeClass('nav-selected');
        }
    };
    debounce(fn1,400,1000);
});
function debounce(fn,delay,mustRunDelay){//防抖动函数
    var timer = null;
    var t_start;
    return function(){
        var context = this;
        var args = arguments;
        var t_curr = +new Date();
        clearTimeout(timer);
        if(!t_start){
            t_start = t_curr;
        }
        if(t_curr - t_start >= mustRunDelay) {
            fn.apply(context,args);
            t_start = t_curr
        } else {
            timer = setTimeout(function(){
                fn.apply(context,args);
            },delay);
        }
    }();
}