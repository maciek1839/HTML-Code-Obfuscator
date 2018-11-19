export function getRandomQuestion() {
    let arrayQuestions = [
        "What was the last thing you created?",
        "Who is a better cook your mother or grandmother?",
        "What book do you wish would be turned into a movie?",
        "Is there an app that you hate but use anyways?",
        "What was the last thing that you fixed?",
        "What animal best represents your personality?",
        "How many squares are there on a chess board?",
        "How many degrees are found in a circle?",
        "When did the world celebrate its most recent millennium?",
        "How many colours are there in a rainbow?"
    ];
    return arrayQuestions[getRandomNumber() % arrayQuestions.length];
}

export function getRandomLink() {
    let linksArray = [
        '<a href="https://www.w3schools.com">Visit W3Schools</a>',
        '<a href="mailto:someone@example.com?Subject=Hello%20again">Send mail!</a>',
        '<a href="#top">Go to top</a>',
        '<a href="http://google.com">Google</a>'
    ];
    return linksArray[getRandomNumber() % linksArray.length];
}

export function getRandomParagraph(withLink = false) {
    if (withLink) {
        let link = getRandomLink();
        return `<p>${getRandomParagraphText()} ${link}</p>`
    }
    return `<p>${getRandomParagraphText()}</p>`
}

export function getRandomButton() {
    return `<button>${getRandomTitleText()}</button>`
}

export function getRandomInput() {
    let types = [
        "number",
        "text",
        "checkbox",
        "date",
        "range",
        "time",
        "week"
    ];
    let type = types[getRandomNumber() % types.length];
    return `<input type="${type}">`
}

/**
 * http://www.blindtextgenerator.com/lorem-ipsum
 */
export function getRandomParagraphText() {
    let arrayParagraphs = [
        "In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from this that the freedom of elections, which is reckoned most important and very essential to the English Church, we, of our pure and unconstrained will, did grant, and did by our charter confirm and did obtain the ratification of the same from our lord, Pope Innocent III, before the quarrel arose between us and our barons: and this we will observe, and our will is that it be observed in good faith by our heirs forever. We have also granted to all freemen of our kingdom, for us and our heirs forever, all the underwritten liberties, to be had and held by them and their heirs, of us and our heirs forever.",
        "Fog everywhere. Fog up the river, where it flows among green aits and meadows; fog down the river, where it rolls deified among the tiers of shipping and the waterside pollutions of a great (and dirty) city. Fog on the Essex marshes, fog on the Kentish heights. Fog creeping into the cabooses of collier-brigs; fog lying out on the yards and hovering in the rigging of great ships; fog drooping on the gunwales of barges and small boats. Fog in the eyes and throats of ancient Greenwich pensioners, wheezing by the firesides of their wards; fog in the stem and bowl of the afternoon pipe of the wrathful skipper, down in his close cabin; fog cruelly pinching the toes and fingers of his shivering little apprentice boy on deck. Chance people on the bridges peeping over the parapets into a nether sky of fog, with fog all round them, as if they were up in a balloon and hanging in the misty clouds.",
        "And Eurypylus, son of Euaemon, killed Hypsenor, the son of noble Dolopion, who had been made priest of the river Scamander, and was honoured among the people as though he were a god. Eurypylus gave him chase as he was flying before him, smote him with his sword upon the arm, and lopped his strong hand from off it. The bloody hand fell to the ground, and the shades of death, with fate that no man can withstand, came over his eyes. Thus furiously did the battle rage between them. As for the son of Tydeus, you could not say whether he was more among the Achaeans or the Trojans. He rushed across the plain like a winter torrent that has burst its barrier in full flood; no dykes, no walls of fruitful vineyards can embank it when it is swollen with rain from heaven, but in a moment it comes tearing onward, and lays many a field waste that many a strong man hand has reclaimed- even so were the dense phalanxes of the Trojans driven in rout by the son of Tydeus, and many though they were, they dared not abide his onslaught.",
        "It is Spring, moonless night in the small town, starless and bible-black, the cobblestreets silent and the hunched, courters'-and- rabbits' wood limping invisible down to the sloeblack, slow, black, crowblack, fishingboat-bobbing sea. The houses are blind as moles (though moles see fine to-night in the snouting, velvet dingles) or blind as Captain Cat there in the muffled middle by the pump and the town clock, the shops in mourning, the Welfare Hall in widows' weeds. And all the people of the lulled and dumbfound town are sleeping now.",
        "Hush, the babies are sleeping, the farmers, the fishers, the tradesmen and pensioners, cobbler, schoolteacher, postman and publican, the undertaker and the fancy woman, drunkard, dressmaker, preacher, policeman, the webfoot cocklewomen and the tidy wives. Young girls lie bedded soft or glide in their dreams, with rings and trousseaux, bridesmaided by glow-worms down the aisles of the organplaying wood. The boys are dreaming wicked or of the bucking ranches of the night and the jollyrogered sea. And the anthracite statues of the horses sleep in the fields, and the cows in the byres, and the dogs in the wet-nosed yards; and the cats nap in the slant corners or lope sly, streaking and needling, on the one cloud of the roofs.",
        "You can hear the dew falling, and the hushed town breathing.",
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ",
        "It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. ",
        "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown ",
        "Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way."
    ];
    return arrayParagraphs[getRandomNumber() % arrayParagraphs.length];
}

export function getRandomTitleText() {
    let arrayTitles = [
        "The Broken Boy",
        "Teacher of Savior",
        "The Dreamer's Truth",
        "The Valley of the Soul",
        "Way in the Voyagers",
        "Blue Wave",
        "The Absent Lord",
        "Man of Silk",
        "The Swords's Angel",
        "Stones in the Flying",
        "Devoted Fire",
        "The Final Guardian",
        "Ring of Body",
        "The Heart of the Spark",
        "Stream of Wizard",
        "The No Serpent",
        "The Slaves's Healer",
        "Cracked Academy",
        "The Broken Wizards",
        "Past in the Ashes",
        "Sword in the Year"
    ];
    return arrayTitles[getRandomNumber() % arrayTitles.length];
}

export function getRandomFooter() {
    let arrayFooters = [
        "©ChartBeat",
        "Marvel®",
        "€uroTradeCompany",
        "Tonny&Dave",
        "©Reebok"
    ];
    return arrayFooters[getRandomNumber() % arrayFooters.length];
}

export function getRandomImage(size = null) {
    let css = 'position: sticky;';
    let url = '';
    let text = getRandomTitleText();
    let fontArray = [
        "noto",
        "lobster"
    ];
    let font = fontArray[new Date().getTime() % fontArray.length];;
    if (size) {
        url = `https://fakeimg.pl/${size}/`
    } else {
        size = (Math.floor(Math.random() * 400) + 400) + "x" + (Math.floor(Math.random() * 200) + 100);
    }
    url = `https://fakeimg.pl/${size}/?text=${text}&font=${font}`;
    return `<img src="${url}" style="${css}">`;
}

export function randomCount() {
    return Math.floor(Math.random() * 10) + 1;
}

export function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

export function getRandomBlockQuote() {
    let arrayQuotes= [
        `For 50 years, WWF has been protecting the future of nature.
        The world's leading conservation organization,
        WWF works in 100 countries and is supported by
        1.2 million members in the United States and
        close to 5 million globally.`,
        `Success is not final, failure is not fatal: it is the courage to continue that counts.`,
        `Attitude is a little thing that makes a big difference.`,
        `If you're going through hell, keep going.`,
        `I may be drunk, Miss, but in the morning I will be sober and you will still be ugly.`,
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        "My most brilliant achievement was my ability to be able to persuade my wife to marry me.",
        "The price of greatness is responsibility.",
        "This is no time for ease and comfort. It is time to dare and endure.",
        "A lie gets halfway around the world before the truth has a chance to get its pants on."
    ];
    return `<blockquote style="background: #f9f9f9;border-left: 10px solid #ccc;margin: 1.5em 10px;padding: 0.5em 10px;">
    ${arrayQuotes[getRandomNumber() % arrayQuotes.length]}
    </blockquote>`;
}

export function generateQuizForm(inputCount) {
    let form = `<div style="border-style: inset">`;
    form += "<h5>Quiz!</h5>";
    for (; inputCount > 0; inputCount--) {
        form += `<label>${getRandomQuestion()}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>`;
        form += getRandomInput();
        form += "</br>";
        if (Math.random() >= 0.5) {
            form += "Answer-> " + getRandomLink() + "</br>";
        } else {
            form += "Click for answer-> " + getRandomButton() + "</br>";
        }
    }
    form += "</br>";
    form += getRandomButton();
    form += "</div>";
    return form;
}

export function getOpeningTag() {
    let header = getRandomTitleText();
    return `<!DOCTYPE html>
    <html>
        <head>
            <title>Generated HTML example</title>
        </head>
    <body>
        <header style="text-align:center;">
            <h2>${header}</h2>
        </header>
        <nav>
        </nav>
        <aside style="width: 20%; float:left;padding-right: 25px;">
            ${getRandomImage("150x200")}
            <div>
                ${getRandomParagraphText()}
            </div>
        </aside>
        <div style="width: 80%; float:right">
        `;
}

export function getClosingTag() {
    let footerText = getRandomFooter();
    return `
    </div>
    <br style="clear:both;"/>
        <footer style="text-align:center;">
            ${footerText}
        </footer>
        </body>
    </html>`;
}

export function getRandomHeader() {
    let headerNumber = 2;
    return `<h${headerNumber}>${getRandomTitleText()}</h${headerNumber}>`;
}
