(function($){
    let imgArr = ["#img1","#img2","#img3"];
    let cur_img = 0;
    let manually_changed = false;
    let mod = function(x,y){
        return ((x % y) + y) % y;
    }
    let changeToPreviousImage = function(){
        $(imgArr[cur_img]).toggle("slide",{direction:"left"},300);
        $("#dot"+(cur_img+1).toString(10)).removeClass("active-dot");
        let new_img = mod((cur_img-1),imgArr.length);
        $(imgArr[new_img]).toggle("slide",{direction:"right"},300);
        $("#dot"+(new_img+1).toString(10)).addClass("active-dot");
        cur_img = new_img;
    }
    let changeToNextImage = function(){
        $(imgArr[cur_img]).toggle("slide",{direction:"left"},300);
        $("#dot"+(cur_img+1).toString(10)).removeClass("active-dot");
        let new_img = mod((cur_img+1),imgArr.length);
        $(imgArr[new_img]).toggle("slide",{direction:"right"},300);
        $("#dot"+(new_img+1).toString(10)).addClass("active-dot");
        cur_img = new_img
    }         
    let makeVisable = function(tagSelector){
        $(tagSelector).fadeIn(600);
    }
    let makeInvisible = function(tagSelector){
        $(tagSelector).fadeOut(600);
    }

    let globalImageSwitcher = setInterval(changeToNextImage,10000);
    $(".flaticon-right-arrow").click(function(){
        clearInterval(globalImageSwitcher)
        changeToNextImage();
        globalImageSwitcher = setInterval(changeToNextImage,10000);
    });
    $(".flaticon-back").click(function(){
        clearInterval(globalImageSwitcher)
        changeToPreviousImage();
        globalImageSwitcher = setInterval(changeToNextImage,10000);
    });
    $(".banner").mouseenter( function(){
    makeVisable(".banner-text-background");
    }).mouseleave(function(){
        makeInvisible(".banner-text-background");
    });
})(jQuery)
