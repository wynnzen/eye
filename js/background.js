var checkedSts = false;


function getChecked() {
    return checkedSts;
}


function setChecked(value) {
    checkedSts = value
}


function sendMessageToContentScript(message, callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
            if (callback) callback(response);
        });
    });
}


chrome.tabs.onUpdated.addListener(function change(tabId, changeInfo, tab) {
    console.log(1)
    if(checkedSts){
        sendMessageToContentScript({cmd:'eye',value:'on'})
    }
    else{
        sendMessageToContentScript({cmd:'eye',value:'off'})
    }
});

