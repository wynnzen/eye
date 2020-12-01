// $('body').css({
//     'background-color':'red'
// });


// chrome.tabs.insertCSS(null, {file:"css/index.css"})


// console.log();

let bg = chrome.extension.getBackgroundPage();

let dom = "input[type='checkbox']"

let checkStatus = bg.getChecked();

console.log(checkStatus)
$(dom).prop({checked:checkStatus});



function sendMessageToContentScript(message, callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
            if (callback) callback(response);
        });
    });
}


$(dom).change(function () {
    let checked = $(dom).prop('checked')
    if (checked) {
        sendMessageToContentScript({ cmd: 'eye', value: 'on' }, function (response) {
            console.log('来自content的回复：' + response);
        });
        bg.setChecked(true);
    }
    else {
        sendMessageToContentScript({ cmd: 'eye', value: 'off' }, function (response) {
            console.log('来自content的回复：' + response);
        });
        bg.setChecked(false);
    }
    return;
});





// chrome.tabs.insertCSS({file: "css/index.css"}, function() {
//     if(chrome.runtime.lastError) {
//       console.error("Script injection failed: " + chrome.runtime.lastError.message);
//     }
//   });

