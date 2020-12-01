'use strict';


function bodyFullFadeInColor() {
	//淡入效果
	if ($('#mask')) {
		var maskObj = $('#mask');
		maskObj.setAttribute("style", "width: 100%; height:100%; position: fixed !important; left: 0px !important; bottom: 0px !important; overflow: hidden !important; pointer-events: none !important; z-index: 99999; -webkit-transition: -webkit-transform 1s ease-in-out; display:none; ");
		maskObj.style.background = "#CCE8CF";
		maskObj.style.opacity = 0.382;
		$("#mask").fadeIn("slow");

	}
	else {
		var maskObj = document.createElement('div');
		maskObj.id = "mask";
		maskObj.setAttribute("style", "width: 100%; height:100%; position: fixed !important; left: 0px !important; bottom: 0px !important; overflow: hidden !important; pointer-events: none !important; z-index: 99999; -webkit-transition: -webkit-transform 1s ease-in-out; display:none; ");
		maskObj.style.background = "#CCE8CF";
		maskObj.style.opacity = 0.382;
		document.body.appendChild(maskObj);
		$("#mask").fadeIn("slow");
	}


}


function removeBodyFullFadeInColor() {
	//去除div
	if ($("#mask")) {
		$("#mask").css({ opacity: 0 });
	}
}


chrome.runtime.onMessage.addListener(function changeBg(request, sender, sendResponse) {
	// console.log(sender.tab ?"from a content script:" + sender.tab.url :"from the extension");
	if (request.cmd == 'eye') {
		if (request.value === 'on') {
			// $('body').css({'background-color':'#CCE8CF'});
			bodyFullFadeInColor();
			sendResponse('我收到了你的消息！on');
		}
		else {
			// $('body').css({'background-color':'inherit'});
			removeBodyFullFadeInColor();
			sendResponse('我收到了你的消息！off');
		}
	}
	else {

	}
});