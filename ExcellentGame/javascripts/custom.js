$(document).ready(function() {
	window.count = 1;
	$(".circle_container div").hover(function() {
		$(".circle_container div").removeClass("yellow_back");
		$x = Number($(this).attr("data-value"));
		$(".circle_container div").slice(0,$x).addClass("yellow_back");
	}, function(){
		$(".circle_container div").removeClass("yellow_back");
	});
	$(".circle_container div").click(function() {
		$("#submit").addClass("visible");
		$(".circle_container div").removeClass("yellow_back");
		$(".circle_container div").removeClass("green_back");
		window.$x = Number($(this).attr("data-value"));
		$(".circle_container div").slice(0,$x).addClass("green_back");
	}); 
	$("#submit").click(function() {
		$(".feeback_container").css("top","-50%");
		$("#submit").removeClass("visible");
		$(".circle_container div").removeClass("yellow_back");
		$(".circle_container div").removeClass("green_back");
		$("#input"+count).attr("value",$x);
		window.count += 1;
		if (count == 8) {
			showScores();
			window.count = 1;
			$("#replay").addClass("visible");
		}
		else {
			Crafty.pause(false);
			window.x = setTimeout(showQuestion,30000);
		}
		
	});
	$("#replay").click(function() {
		$(".feeback_container").css("top","-50%");
		load();
		window.x = setTimeout(showQuestion,30000);
	});
});
function showQuestion() {
	Crafty.pause(true);
	$(".scores").css("display","block");
	$(".secret_code").css("display","none");
	$(".feeback_container").css("top","50%");
}
function showScores() {
	$(".feeback_container").css("top","50%");
	$(".secret_code").css("display","block");
	$(".scores").css("display","none");
}
function load() {
	Crafty.init(320, 416, document.getElementById('cr-stage'));
	Crafty.canvas.init();
	Crafty.scene('loading');

	setTimeout(function() {
		window.scrollTo(0, 1);
	}, 1);
	}