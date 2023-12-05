var domain = /:\/\/([^\/\.]+)/.exec(window.location.href)[1].toLowerCase();

if ((affiliateMatch = /\?affiliate\=(\w*)/.exec(window.location)) !== null) { 
    // we've already redirected from ThriveCart
    // Now redirect back to the correct subdomain if necessary
    // (ThriveCart does not allow different redirects per affiliate)
    var affiliate = affiliateMatch[1].toLowerCase();
    switch (affiliate) {
        case "richardfirsthuman": 
            if (domain !== 'richard') {
                window.location = 'https://richard.inner-alchemists.com?affiliate=' + affiliate;
            }
            break;
        case "erikjongbloed":
            if (domain != '' && domain != 'www') {
                window.location = 'https://www.inner-alchemists.com?affiliate=' + affiliate;
            }
            break;
    }
    // Then get here; do personalization based on correct subdomain
    var sheet = document.getElementById('personalization');
    var title = document.getElementsByTagName('title')[0];

    if (domain === 'richard') {
        title.innerText = 'Inner Alchemists x Being Human Podcast';
        sheet.href = 'https://gilded-cranachan-b53342.netlify.app/richard.css';
    } else {
        title.innerText = 'Inner Alchemists';
        sheet.href = 'https://gilded-cranachan-b53342.netlify.app/www.css';
    }
} else { 
    // We still have to redirect to ThriveCart and back based on subdomain
    if (domain === 'richard') {
        //alertToday('No affiliate param found: redirecting to affiliate link https://richardfirsthuman--inner-alchemists.thrivecart.com/inner-alchemists/');
        window.location = "https://richardfirsthuman--inner-alchemists.thrivecart.com/inner-alchemists/";
    } else {
        //alertToday('No affiliate param found: redirecting to affiliate link https://erikjongbloed--inner-alchemists.thrivecart.com/inner-alchemists/');
        window.location = "https://erikjongbloed--inner-alchemists.thrivecart.com/inner-alchemists/";
    }
}

