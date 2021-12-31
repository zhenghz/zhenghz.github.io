    $(function(){
        //1.楼梯什么时候显示，800px scroll--->scrollTop
        $(window).on('scroll',function(){
            var $scroll=$(this).scrollTop();
            if($scroll>=400){
                $('#loutinav').show();
            }else{
                $('#loutinav').hide();
            }

			$len =  $('.louti').length;

            //4.拖动滚轮，对应的楼梯样式进行匹配
            $('.louti').each(function(){
				if ($(this).index()<$len-1){	
					var $loutitop=$('.louti').eq($(this).index()).offset().top-20;
					var $loutitop1=$('.louti').eq($(this).index()+1).offset().top-20;
					if($loutitop<$scroll && $loutitop1>$scroll){//楼层的top大于滚动条的距离
						$('#loutinav li').removeClass('active');
						$('#loutinav li').eq($(this).index()).addClass('active');						
						return false;//中断循环
					}
				}
				else{
					var $loutitop=$('.louti').eq($(this).index()).offset().top-20;
					if($loutitop<$scroll ){//楼层的top大于滚动条的距离
						$('#loutinav li').removeClass('active');
						$('#loutinav li').eq($(this).index()).addClass('active');						
						return false;//中断循环
					}
				}
            });
        });
        //2.获取每个楼梯的offset().top,点击楼梯让对应的内容模块移动到对应的位置  offset().left
        
        var $loutili=$('#loutinav li').not('.last');
        $loutili.on('click',function(){
            $(this).addClass('active').siblings('li').removeClass('active');
            var $loutitop=$('.louti').eq($(this).index()).offset().top;
            //获取每个楼梯的offsetTop值
            $('html,body').animate({//$('html,body')兼容问题body属于chrome
                scrollTop:$loutitop
            })
        });
        //3.回到顶部
        $('.last').on('click',function(){
            $('html,body').animate({//$('html,body')兼容问题body属于chrome
                scrollTop:0
            })
        });
        
        


    })