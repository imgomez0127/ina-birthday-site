(function($){
    let mod = function(x,y){
        return ((x % y) + y) % y;
    }
        
    let imgArr = ["#img1","#img2","#img3"];
    let cur_img = 0;
    $(".flaticon-right-arrow").click(function(){
        $(imgArr[cur_img]).toggle("slide",{direction:"left"},300);
        $("#dot"+(cur_img+1).toString(10)).removeClass("active-dot");
        let new_img = mod((cur_img+1),imgArr.length);
        $(imgArr[new_img]).toggle("slide",{direction:"right"},300);
        $("#dot"+(new_img+1).toString(10)).addClass("active-dot");
        cur_img = new_img
        console.log($(old_img)); 
    });
    $(".flaticon-back").click(function(){
        $(imgArr[cur_img]).toggle("slide",{direction:"left"},300);
        $("#dot"+(cur_img+1).toString(10)).removeClass("active-dot");
        let new_img = mod((cur_img-1),imgArr.length);
        $(imgArr[new_img]).toggle("slide",{direction:"right"},300);
        $("#dot"+(new_img+1).toString(10)).addClass("active-dot");
        cur_img = new_img;
        console.log($(old_img)); 
    });

    
})(jQuery)
