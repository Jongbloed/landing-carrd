var domain = /:\/\/([^\/\.]+)/.exec(window.location.href)[1];
var sheet = document.getElementById('personalization');
var title = document.getElementsByTagName('title')[0];

// if (window.self === window.top) { // prevent iframe recursion
//     if (domain.toLowerCase() === 'richard') {
//         title.innerText = 'Inner Alchemists x Being Human Podcast';
//         sheet.href = 'https://gilded-cranachan-b53342.netlify.app/richard.css';
//         // Hopefully set attribution cookie
//         window.addEventListener('load', function() {
//             var attributionIframe = document.getElementById("thrivecart_affiliate_iframe");
//             attributionIframe.src = "https://richardfirsthuman--inner-alchemists.thrivecart.com/inner-alchemists/";
//         });
//     } else {
//         title.innerText = 'Inner Alchemists';
//         sheet.href = 'https://gilded-cranachan-b53342.netlify.app/www.css';
//         // Hopefully set attribution cookie
//         window.addEventListener('load', function() {
//             var attributionIframe = document.getElementById("thrivecart_affiliate_iframe");
//             attributionIframe.src = "https://erikjongbloed--inner-alchemists.thrivecart.com/inner-alchemists/"
//         });
//     }
// }
var alertToday = function(text) {
    if (new Date().getMonth() === 11 && new Date().getDate() === 4 && new Date().getFullYear() === 2023) {
        alert(text);
    }
}
if ((affiliateMatch = /\?affiliate\=(\w*)/.exec(window.location)) !== null) { // we've already redirected from ThriveCart
    alertToday('Found affiliate in URL: ['+affiliateMatch[0]+'] I think we have just redirected from TC');
    var affiliate = affiliateMatch[1];
    switch (affiliate.toLowerCase()) {
        case "richardfirsthuman": // Been to ThriveCart, now redirect back to the correct subdomain if necessary (ThriveCart does not allow different redirects per affiliate)
            if (domain.toLowerCase() !== 'richard') {
                alertToday('Redirecing back to proper subdomain ' + 'https://richard.inner-alchemists.com?affiliate=' + affiliate);
                window.location = 'https://richard.inner-alchemists.com?affiliate=' + affiliate;
            }
            break;
        case "erikjongbloed":
            if (domain.toLowerCase() != '' && domain.toLowerCase() != 'www') {
                alertToday('Redirecing back to proper subdomain ' + 'https://www.inner-alchemists.com?affiliate=' + affiliate);
                window.location = 'https://www.inner-alchemists.com?affiliate=' + affiliate;
            }
            break;
    }
    // Then get here; do personalization based on correct subdomain
    if (domain.toLowerCase() === 'richard') {
        alertToday('Doing personalization for ' + domain);
        title.innerText = 'Inner Alchemists x Being Human Podcast';
        sheet.href = 'https://gilded-cranachan-b53342.netlify.app/richard.css';
    } else {
        alertToday('Doing personalization for ' + domain);
        title.innerText = 'Inner Alchemists';
        sheet.href = 'https://gilded-cranachan-b53342.netlify.app/www.css';
    }
} else { // We still have to redirect to ThriveCart and back based on subdomain
    if (domain.toLowerCase() === 'richard') {
        alertToday('No affiliate param found: redirecting to affiliate link https://richardfirsthuman--inner-alchemists.thrivecart.com/inner-alchemists/');
        window.location = "https://richardfirsthuman--inner-alchemists.thrivecart.com/inner-alchemists/";
    } else {
        alertToday('No affiliate param found: redirecting to affiliate link https://erikjongbloed--inner-alchemists.thrivecart.com/inner-alchemists/');
        window.location = "https://erikjongbloed--inner-alchemists.thrivecart.com/inner-alchemists/";
    }
}

