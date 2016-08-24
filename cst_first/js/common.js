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
	/*
	var Index;
	$('.a_se3_main .page').click(function(){
		var data = getAllModifiedMedicines(viewModel.MedicineCupboard());
		sendAllMedicines(data);
		Index = $(this).index();
		$('.a_se3_main_in .page').eq(Index).show(30);
		$('.a_se3_main').hide(30);
	});
	$('.a_se3_main_in .back').click(function(){
		$('.a_se3_main_in .page').hide(30);
		$('.a_se3_main').show(30);
	});
	*/
});