/**
 * Most of pages has UTF-8 encoding. This function convert UTF-8 to ASCII.
 * Any UTF-8 string that is reversibly convertible to ASCII is already ASCII.
 * UTF-8 can represent any unicode character - ASCII cannot.
 * 
 * @param {html page in UTF-8 encoding} html 
 */
export function toHtmlEntities(html) {
    let result = '';
    var buf = [];

    for (var i = html.length - 1; i >= 0; i--) {
        buf.unshift(['&#', html[i].charCodeAt(), ';'].join(''));
    }

    return buf.join('');
}

export function fromHtmlEntities(str) {
    return str.replace(/&#(\d+);/g, function (match, dec) {
        return String.fromCharCode(dec);
    });
}

export function htmlToJavascript(html) {
    let newLines = html.split("\n");
    let result = '';
    newLines.forEach(line => {
        result += `'${line}' +` + '\n';
    });
    return result;
}

export function toHex(s) {
    s = escape(s);
    let result = ''
    for (let i = 0; i < s.length; i++) {
        result += s.charCodeAt(i).toString(16)
    }
    return result;
}

export function fromHex(h) {
    var s = ''
    for (var i = 0; i < h.length; i += 2) {
        s += String.fromCharCode(parseInt(h.substr(i, 2), 16))
    }
    return unescape(s);
}

export function encodeUsingOwnFunction(s) {
    let htmlEntities = toHtmlEntities(s);
    let result = '';
    for (let i = 0; i < htmlEntities.length; i++) {
        if (htmlEntities.charCodeAt(i) == 28) {
            result += '&';
        }
        else if (htmlEntities.charCodeAt(i) == 23) {
            result += '!';
        }
        else { result += String.fromCharCode(s.charCodeAt(i) - 1); }
    }
    // console.log(decodeUsingOwnFunction(result));
    return result;
}

export function decodeUsingOwnFunction(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (s == '&') {
            result += 28;
        }
        else if (s == '!') {
            result += 23;
        }
        else { result += String.fromCharCode(s.charCodeAt(i) + 1); }
    }
    return result;
}