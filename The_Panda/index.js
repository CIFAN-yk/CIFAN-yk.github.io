$(function (){
    //平台、设备和操作系统
    var system ={
        win : false,
        mac : false,
        xll : false
    };
    //检测平台
    var p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);

    if(system.win||system.mac||system.xll){
        //
        $('.pcShow').hide();
    }else{
        $('.pcShow').show();
    }
    $('.question').hide()
    var $boxes = $('.box');
    var boxShow = [true];
    var items = $('.item');
    var itemShow = [true];
    for(var i = 1; i < items.length;i++){
        $(items[i]).hide();
        itemShow.push(false);
    }
    var lock = true;
    for(var i = 1; i < $boxes.length; i++){
        $($boxes[i]).hide();
        boxShow.push(false);
    }

    $('.target').hide().removeClass('boxShadow1').html("");
    $('.show').hide();
    //TODO:播放背景音乐
    try{
        $('audio')[0].play();
    }catch (e){
        console.log(e);
    }

    audio = $('.audio').find('audio')[0];
    if(audio.paused){
        $('.audio').find('img').attr('src',"./stop.png");
    }else{
        $('.audio').find('img').attr('src',"./start.png");
    }

    var targetInfo = {
        "旗舰物种":"截至2013年，我国一共有1864只野生大熊猫，而到了2019年，圈养大熊猫达到了600只左右。虽然2016年世界自然保护联盟已经将大熊猫从濒危物种降级为了易危物种，但是专家表示，针对大熊猫的保护工作丝毫不能松懈，因为这对整个生态体统具有重要意义。\n" +
            "“只要你想保护大熊猫，你就要把周围的其他的伴生物种给保护好，所以跟大熊猫一起生活在保护区里的，包括金丝猴、羚牛、朱鹮、微小昆虫等等。所以大熊猫是一个‘旗舰物种’，又叫‘伞护物种’，他就像一把伞支撑了一片天似的，它的生态系统的价值远远超过大熊猫本身的价值了。”",
        "01详情":"前面讲了的哦！2016年从濒危降为了易危",
        "02详情":"嗯哼！",
        "03详情":"<img src=\"./img/show-1.png\" alt=\"\"><br>World Wild Fund for Nature（世界自然基金会）",
        "04详情":"<img src=\"./img/show-2.png\" alt=\"\"><br>你觉得呢？",
    }

    var vlogPlay = {
        "两个亚种":"pz",
        "棕色熊猫":"zs",
        "熊猫宝宝":"cs",
        "黑白照片":"ss",
        "租借":"gj",
        "条件":"tj"

    }











    function lockPart(){
        for(var i = 0; i < $boxes.length;i++){
            if(boxShow[i] == true && $($boxes[i]).find('.part').html() == 'Part2 盛世美颜'){
                return true;
            }
        }
        return false;
    }

    //TODO:按钮翻页
    $('.nextL').click(function (){
        var $videos = $('video');
        for(var i = 0; i < $videos.length; i++){
            if(!$videos[i].paused){
                $videos[i].pause();
            }
        }
        for (var i = 0; i < $boxes.length;i++){
            if(boxShow[i] == true){
                $($boxes[i]).slideToggle();
                boxShow[i] = false;
                $($boxes[i-1]).slideToggle();
                boxShow[i-1] = true;

                if($($boxes[i-1]).hasClass('box1')){
                    $('.nextR').removeClass('boxShadow2').addClass('boxShadow1');
                    $('.nextL').removeClass('boxShadow2').addClass('boxShadow1');
                    $('.audio').removeClass('boxShadow2').addClass('boxShadow1');
                    $('.showQ').removeClass('boxShadow2').addClass('boxShadow1');
                    $('.target').removeClass('boxShadow2').addClass('boxShadow1');
                }else{
                    $('.nextR').removeClass('boxShadow1').addClass('boxShadow2');
                    $('.nextL').removeClass('boxShadow1').addClass('boxShadow2');
                    $('.audio').removeClass('boxShadow1').addClass('boxShadow2');
                    $('.showQ').removeClass('boxShadow1').addClass('boxShadow2');
                    $('.target').removeClass('boxShadow1').addClass('boxShadow2');
                }

                if(i-1 == -1){
                    $('.nextR').removeClass('boxShadow2').addClass('boxShadow1');
                    $('.nextL').removeClass('boxShadow2').addClass('boxShadow1');
                    $('.audio').removeClass('boxShadow2').addClass('boxShadow1');
                    $('.showQ').removeClass('boxShadow2').addClass('boxShadow1');
                    $('.target').removeClass('boxShadow2').addClass('boxShadow1');
                    $($boxes[0]).slideToggle();
                    boxShow[0] = true;
                }
                break;
            }
        }
    });
    $('.nextR').click(function (){
        if(lock == true  && lockPart()){
            $('.question').show();
            return false;
        }else if(lock == false && lockPart()){
            $('.question').hide()
        }
        // if(isQ()){
        //
        // }
        var $videos = $('video');
        for(var i = 0; i < $videos.length; i++){
            if(!$videos[i].paused){
                $videos[i].pause();
            }
        }
        for (var i = 0; i < $boxes.length;i++){
            if(boxShow[i] == true){
                $($boxes[i]).slideToggle();
                boxShow[i] = false;
                $($boxes[i+1]).slideToggle();
                boxShow[i+1] = true;

                if($($boxes[i+1]).hasClass('box1')){
                    $('.nextR').removeClass('boxShadow2').addClass('boxShadow1');
                    $('.nextL').removeClass('boxShadow2').addClass('boxShadow1');
                    $('.audio').removeClass('boxShadow2').addClass('boxShadow1');
                    $('.showQ').removeClass('boxShadow2').addClass('boxShadow1');
                    $('.target').removeClass('boxShadow2').addClass('boxShadow1');
                }else{
                    $('.nextR').removeClass('boxShadow1').addClass('boxShadow2');
                    $('.nextL').removeClass('boxShadow1').addClass('boxShadow2');
                    $('.audio').removeClass('boxShadow1').addClass('boxShadow2');
                    $('.showQ').removeClass('boxShadow1').addClass('boxShadow2');
                    $('.target').removeClass('boxShadow1').addClass('boxShadow2');
                }

                if(i+1 == $boxes.length){
                    $('.nextR').removeClass('boxShadow2').addClass('boxShadow1');
                    $('.nextL').removeClass('boxShadow2').addClass('boxShadow1');
                    $('.audio').removeClass('boxShadow2').addClass('boxShadow1');
                    $('.showQ').removeClass('boxShadow2').addClass('boxShadow1');
                    $('.target').removeClass('boxShadow2').addClass('boxShadow1');
                    $($boxes[0]).slideToggle();
                    boxShow[0] = true;
                }
                break;
            }
        }
    });

//    TODO:上下键翻页
    $(document).on('keydown',function(e){
        if(e.keyCode == 38 || e.keyCode == 37){
            $('.nextL').click();
        }else if(e.keyCode == 40 || e.keyCode == 39){
            $('.nextR').click();
        }else{
            console.log(e.keyCode)
        }
    });

//    TODO:data标签锚点
    $('data').click(function(){
        if($(this).html() in targetInfo){
            // console.log(targetInfo[$(this).html()])
            if($(this).html() == "旗舰物种"){
                $('.target').show().addClass('boxShadow1').removeClass('boxShadow2').html(targetInfo[$(this).html()]);
            }else{
                $('.target').show().html(targetInfo[$(this).html()]);
            }
            return false;
        }
    });
    $('.target').click(function(){
        return false;
    });
    $(document).click(function(){
        $('.target').hide().removeClass('boxShadow1').html("");
        $('.question').hide();
    })

//    TODO：播放
    $('b').click(function(){
        $videos = $('video');
        var video;
        if($(this).html() in vlogPlay){
            video = $('video[name="'+vlogPlay[$(this).html()]+'"')[0];
        }else{
            console.log($(this).html())
        }
        // var video = $(this).parent().parent().find('video')[0];
        if (video.paused){
            for(var i = 0; i < $videos.length; i++){
                if(!$videos[i].paused){
                    $videos[i].pause();
                }
            }
            video.play();
        }else{
            video.pause();
        }
    });

    //TODO:next
    $('next').click(function(){
        $('.nextR').click();
    });

    //TODO:加入音频
    $('.audio').click(function(){
        audio = $(this).find('audio')[0];
        if(audio.paused){
            audio.play();
            $(this).find('img').attr('src',"./start.png");
        }else{
            audio.pause();
            $(this).find('img').attr('src',"./stop.png");
        }
    });

    //TODO:选项
    $('.option').click(function(){
        // $(this).toggleClass('check');
        // if($(this).hasClass('check')){
        //     $(this).attr('checked','checked')
        // }else{
        //     $(this).removeAttr('checked');
        // }
        $(this).addClass('check').siblings().removeClass('check');
    });

    $('.lastQ').click(function (){
        for (var i = 0; i < items.length;i++){
            if(itemShow[i] == true){
                $(items[i]).slideToggle();
                itemShow[i] = false;
                $(items[i-1]).slideToggle();
                itemShow[i-1] = true;

                if(i-1 == -1){
                    $(items[items.length-1]).slideToggle();
                    itemShow[items.length-1] = true;
                }
                break;
            }
        }
    });
    $('.nextQ').click(function (){
        for (var i = 0; i < items.length;i++){
            if(itemShow[i] == true){
                $(items[i]).slideToggle();
                itemShow[i] = false;
                $(items[i+1]).slideToggle();
                itemShow[i+1] = true;
                if($(items[i+1]).hasClass('box1')){
                }else{
                }
                if(i+1 == items.length){
                    $(items[0]).slideToggle();
                    itemShow[0] = true;
                }
                break;
            }
        }
    });
    $('.submit').click(function(){
        $checkItems = $(this).parent().find('.item');
        var checked = true;
        for(var i = 0; i < $checkItems.length;i++){
            var tCheck = $($checkItems[i]).find('.option');
            var is = false;
            for(var j = 0; j < tCheck.length;j++){
                if($(tCheck[j]).hasClass('check')){
                    is = true;
                    break;
                }
            }
            checked &= is;
        }
        if(checked == false){
            alert("请完整答题！");
            return;
        }else{
            for(var i = 0; i < $checkItems.length;i++){
                var ans = $($checkItems[i]).attr('answer');
                $($($checkItems[i]).find('.option')[parseInt(ans)-1]).addClass('yes')
            }
            $('.show').show();
            $('.showQ').show();
            lock = false;
        }
    });
    $('.question').click(function(){
        $('.target').hide().removeClass('boxShadow1').html("");
        return false;
    });
    $('.showQ').click(function(){
        if($(this).hasClass('boxShadow1')){
            $('.question').addClass('boxShadow1').removeClass('boxShadow2')
            $('.question').find('.lastQ').addClass('boxShadow1').removeClass('boxShadow2')
            $('.question').find('.submit').addClass('boxShadow1').removeClass('boxShadow2')
            $('.question').find('.nextQ').addClass('boxShadow1').removeClass('boxShadow2')
            $('.question').find('.show').addClass('boxShadow1').removeClass('boxShadow2')
            $('.target').addClass('boxShadow1').removeClass('boxShadow2')
        }else{
            $('.question').addClass('boxShadow2').removeClass('boxShadow1')
            $('.question').find('.lastQ').addClass('boxShadow2').removeClass('boxShadow1')
            $('.question').find('.submit').addClass('boxShadow2').removeClass('boxShadow1')
            $('.question').find('.nextQ').addClass('boxShadow2').removeClass('boxShadow1')
            $('.question').find('.show').addClass('boxShadow2').removeClass('boxShadow1')
            $('.target').addClass('boxShadow2').removeClass('boxShadow1')
        }
        $('.question').show();
        console.log(1)
        return false;
    });
})