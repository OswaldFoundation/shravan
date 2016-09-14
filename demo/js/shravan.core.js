var host = "shravan.oswald.foundation";
host == window.location.host && "https:" != window.location.protocol && (window.location.protocol="https");

var back;
$(function() {
	$("article").click(function() {
		back = "homescreen";
		if ($(this).attr("data-current") == "1") {
			$(".homescreen").hide();
			$("." + $(this).attr("data-function")).show();
			if ($(this).attr("data-function") == "back") {
				$(this).parent().hide();
				$("." + back).show();
			}
		} else {
			$("article").attr("data-current", "0");
			$(this).attr("data-current", "1");
			$("article").css("color", "#fff");
			$(this).css("color", "#000");
			navigator.vibrate = navigator.vibrate || navigator.webkitVibrate;
			var speaker = $(this).attr("data-speak");
			navigator.vibrate(100 * (parseInt($(this).attr("data-i")) + 1));
			if (speaker == "time") {
				var currentdate = new Date();
				responsiveVoice.speak("It is " + formatAMPM(currentdate));
			} else {
				responsiveVoice.speak(speaker);
			}
		}
	});
});

function formatAMPM(date) { var hours = date.getHours(); var minutes = date.getMinutes(); var ampm = hours >= 12 ? 'pm' : 'am'; hours = hours % 12; hours = hours ? hours : 12; minutes = minutes < 10 ? '0'+minutes : minutes; var strTime = hours + ':' + minutes + ' ' + ampm; return strTime; }