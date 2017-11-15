window.onload = function() {
    console.log('feed43.com config helper loaded');
    chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) {
        let feed43 = {};
        feed43.url = document.getElementById('url').value;
        feed43.encoding = document.getElementById('encoding').value;
        feed43.global_pattern = document.getElementById('global_pattern').value
        feed43.item_pattern = document.getElementById('item_pattern').value

        feed43.feed_title = document.getElementById('feed_title').value;
        feed43.feed_link = document.getElementById('feed_link').value;
        feed43.feed_description = document.getElementById('feed_description').value;
        feed43.item_title = document.getElementById('item_title').value;
        feed43.item_link = document.getElementById('item_link').value;
        feed43.item_template = document.getElementById('item_template').value;

        sendResponse(feed43);
    });
};