/**
 * Created by Administrator on 2017/4/27 0027.
 */

$(".navbar-right li").on('click',function(){
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
$(window).scroll(function(){
    var _this = this;
    console.log($(this).scrollTop());
    if($(this).scrollTop() >= 60){
        $("#main-nav").addClass('nav-selected').css(
            {
                'top' : $(_this).scrollTop()
            }
        );
    }else{
        $("#main-nav").removeClass('nav-selected');
    }

});