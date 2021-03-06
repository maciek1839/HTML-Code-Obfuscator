export default class HtmlEncoderService {
  decodeUsingOwnFunction(s: string) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
      if (s === '&') {
        result += 28;
      } else if (s === '!') {
        result += 23;
      } else {
        result += String.fromCharCode(s.charCodeAt(i) + 1);
      }
    }
    return result;
  }

  encodeUsingOwnFunction(s: string) {
    let htmlEntities = this.toHtmlEntities(s);
    let result = '';
    for (let i = 0; i < htmlEntities.length; i++) {
      if (htmlEntities.charCodeAt(i) === 28) {
        result += '&';
      } else if (htmlEntities.charCodeAt(i) === 23) {
        result += '!';
      } else {
        result += String.fromCharCode(s.charCodeAt(i) - 1);
      }
    }
    return result;
  }

  fromHex(h: string) {
    let s = '';
    for (let i = 0; i < h.length; i += 2) {
      s += String.fromCharCode(parseInt(h.substr(i, 2), 16))
    }
    return unescape(s);
  }

  fromHtmlEntities(str: string) {
    return str.replace(/&#(\d+);/g, function (match, dec) {
      return String.fromCharCode(dec);
    });
  }

  htmlToJavascript(html: string) {
    return html.split("\n")
      .reduce((current, line) => current += `'${line}' +` + '\n', '');
  }

  toHex(s: string) {
    s = escape(s);
    let result = '';
    for (let i = 0; i < s.length; i++) {
      result += s.charCodeAt(i).toString(16)
    }
    return result;
  }

  /**
   * Most of pages has UTF-8 encoding. This function convert UTF-8 to ASCII.
   * Any UTF-8 string that is reversibly convertible to ASCII is already ASCII.
   * UTF-8 can represent any unicode character - ASCII cannot.
   *
   * @param {html page in UTF-8 encoding} html
   */
  toHtmlEntities(html: any) {
    const buf = [];

    for (let i = html.length - 1; i >= 0; i--) {
      buf.unshift(['&#', html[i].charCodeAt(), ';'].join(''));
    }

    return buf.join('');
  }
}
