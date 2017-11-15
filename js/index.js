'use strict';

function setTabFocus() {
    document.getElementById('btn-export').classList.remove('btn-primary');
    document.getElementById('btn-import').classList.remove('btn-primary');
    document.getElementById(this.id).classList.add('btn-primary');

    if (this.id === 'btn-export') {
        document.getElementById('btn-submit').value = 'Get config';
    } else {
        document.getElementById('btn-submit').value = 'Apply';
    }
}

function heavy_left() {
    if (document.getElementById('btn-submit').value.indexOf('Get') !== -1) {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {
            var tab = tabs[0];
            chrome.tabs.getSelected(null, function(tab) {
                chrome.tabs.sendMessage(tab.id, {}, function(msg) {
                    document.getElementById('textarea').value = JSON.stringify(msg, null, 4);
                    console.log('onResponse', msg);
                });
            });
        });
    } else {
        alert('not implimented');
    }
}


document.getElementById("btn-export").addEventListener("click", setTabFocus);
document.getElementById("btn-import").addEventListener("click", setTabFocus);
document.getElementById("btn-submit").addEventListener("click", heavy_left);