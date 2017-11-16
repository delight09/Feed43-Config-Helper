'use strict';

function setTabFocus() {
    document.getElementById('btn-export').classList.remove('btn-primary');
    document.getElementById('btn-import').classList.remove('btn-primary');
    document.getElementById(this.id).classList.add('btn-primary');

    if (this.id === 'btn-export') {
        document.getElementById('btn-submit').value = 'Get config';
        document.getElementById('textarea').placeholder = '';
    } else {
        document.getElementById('btn-submit').value = 'Apply';
        document.getElementById('textarea').placeholder = 'Paste JSON style config here...';
    }
}

function heavy_left() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        var tab = tabs[0];
        chrome.tabs.getSelected(null, function(tab) {
            let _obj_msg = {};
            let _obj_config = {};
            if (document.getElementById('btn-submit').value.indexOf('Get') !== -1) {
                _obj_msg = {
                    "codename": "get"
                };
            } else {
                _obj_msg = {
                    "codename": "apply"
                };
                _obj_config = JSON.parse(document.getElementById('textarea').value);
                _obj_msg.config = _obj_config;
            }
            chrome.tabs.sendMessage(tab.id, _obj_msg, function(msg) {
                if (document.getElementById('btn-submit').value.indexOf('Get') !== -1) {
                    document.getElementById('textarea').value = JSON.stringify(msg, null, 4);
                } else {
                    document.getElementById('btn-submit').value = msg.result;
                }
            });
        });
    });
}


document.getElementById("btn-export").addEventListener("click", setTabFocus);
document.getElementById("btn-import").addEventListener("click", setTabFocus);
document.getElementById("btn-submit").addEventListener("click", heavy_left);
