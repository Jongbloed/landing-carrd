var domain = /:\/\/([^\/\.]+)/.exec(window.location.href)[1];
var sheet = document.getElementById('personalization');
var title = document.getElementsByTagName('title')[0];

if (window.self === window.top) { // prevent iframe recursion
    if (domain.toLowerCase() === 'richard') {
        title.innerText = 'Inner Alchemists x Being Human Podcast';
        sheet.href = 'https://gilded-cranachan-b53342.netlify.app/richard.css';
        // Hopefully set attribution cookie
        window.addEventListener('load', function() {
            var attributionIframe = document.getElementById("thrivecart_affiliate_iframe");
            attributionIframe.src = "https://richardfirsthuman--inner-alchemists.thrivecart.com/inner-alchemists/";
        });
    } else {
        title.innerText = 'Inner Alchemists';
        sheet.href = 'https://gilded-cranachan-b53342.netlify.app/www.css';
        // Hopefully set attribution cookie
        window.addEventListener('load', function() {
            var attributionIframe = document.getElementById("thrivecart_affiliate_iframe");
            attributionIframe.src = "https://erikjongbloed--inner-alchemists.thrivecart.com/inner-alchemists/"
        });
    }
}