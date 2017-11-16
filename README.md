# Feed43-Config-Helper

Feed43.com is a good service, but it does not support feed configuration export.

Feed43-config-helper chrome extension reads form entries at `https://feed43.com/feed.html` **ONLY** and export your feed configuration as a JSON string([like this](https://github.com/delight09/gadgets/blob/master/code-snippets/feed43.com/%E4%B8%8A%E6%B5%B7%E6%9C%80%E8%BF%91%E4%B8%80%E5%91%A8%E5%B1%95%E8%A7%88%E6%B4%BB%E5%8A%A8_%E8%B1%86%E7%93%A3%E5%90%8C%E5%9F%8E.4526666027663862.json)).

You can share your feed43.com feed configuration with JSON strings now, instead of using the password.

## Install

1. Download and extract [the latest release](https://github.com/delight09/Feed43-config-helper/releases/latest)(or simply clone this repo)

2. Open `chrome://extensions` in chrome based browsers

3. Check `Developer mode` and select extract folder with `Load unpacked extension...`

## Usage demo

1. Open `https://feed43.com/feed.html`, enter `Feed name` and `Password`.

2. Click extension's icon, select `Export` and press `Get config`

3. Result should be like this:

![Export_demo_result](https://camo.githubusercontent.com/ee1a1230a968d6e5ce634fd45b76faee9fcb27e6/687474703a2f2f7777332e73696e61696d672e636e2f6c617267652f303036306c6d37546c7931666c6a796972666271626a3330396f3038686161672e6a7067)

> ### FYI:
> For config import, visit feed edit page. Paste JSON string into the input box and press **Apply**.
> The form entries shoud be overwritten with keys available from JSON string.



## License

### [BSD 2-clause](https://choosealicense.com/licenses/bsd-2-clause/)
