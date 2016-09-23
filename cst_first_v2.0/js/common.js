$(function(){
	var onOff = true; //定义一个开关
	$('#music').click(function(){
		/*
		if($('#music').hasClass('music_start')){
			$('#music audio').get(0).pause();
            $('#music').addClass('music_stop');
		}else{
			$('#music audio').get(0).play();
            $('#music').attr('class','music_start');
		}
		*/
		if ( onOff ){
			$('#music audio').get(0).pause();
			$('#music').addClass('music_stop').removeClass('music_start');
			onOff = false;
		}else{
			$('#music audio').get(0).play();
			$('#music').addClass('music_start').removeClass('music_stop');
			onOff = true;
		}
		
	});
	audio.loop = true; //歌曲循环
});