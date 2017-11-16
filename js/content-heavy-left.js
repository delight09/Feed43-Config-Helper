window.addEventListener('load', configHelperFeed43, false);

function configHelperFeed43() {
    console.log('feed43.com config helper loaded');
    chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) {
        if (msg.codename === "get") {
            let feed43 = {};
            feed43.url = document.getElementById('url').value;
            feed43.encoding = document.getElementById('encoding').value;
            feed43.global_pattern = document.getElementById('global_pattern').value;
            feed43.item_pattern = document.getElementById('item_pattern').value;

            feed43.feed_title = document.getElementById('feed_title').value;
            feed43.feed_link = document.getElementById('feed_link').value;
            feed43.feed_description = document.getElementById('feed_description').value;
            feed43.item_title = document.getElementById('item_title').value;
            feed43.item_link = document.getElementById('item_link').value;
            feed43.item_template = document.getElementById('item_template').value;

            sendResponse(feed43);
        } else {
            let feed43 = msg.config;
            if (feed43.url !== undefined) {
                document.getElementById('url').value = feed43.url;
            }
            if (feed43.encoding !== undefined) {
                document.getElementById('encoding').value = feed43.encoding;
            }
            if (feed43.global_pattern !== undefined) {
                document.getElementById('global_pattern').value = feed43.global_pattern;
            }
            if (feed43.item_pattern !== undefined) {
                document.getElementById('item_pattern').value = feed43.item_pattern;
            }
            if (feed43.feed_title !== undefined) {
                document.getElementById('feed_title').value = feed43.feed_title;
            }
            if (feed43.feed_link !== undefined) {
                document.getElementById('feed_link').value = feed43.feed_link;
            }
            if (feed43.feed_description !== undefined) {
                document.getElementById('feed_description').value = feed43.feed_description;
            }
            if (feed43.item_title !== undefined) {
                document.getElementById('item_title').value = feed43.item_title;
            }
            if (feed43.item_link !== undefined) {
                document.getElementById('item_link').value = feed43.item_link;
            }
            if (feed43.item_template !== undefined) {
                document.getElementById('item_template').value = feed43.item_template;
            }

            sendResponse({
                "result": "Success!"
            });
        }
    });
};
