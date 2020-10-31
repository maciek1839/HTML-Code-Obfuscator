export function loadTemplate(name: string): string {
  let loadedTemplate: string;

  switch (name) {
    case FileName.EXAMPLE2:
      loadedTemplate = FileContent.EXAMPLE2;
      break;
    case FileName.EXAMPLE1:
      loadedTemplate = FileContent.EXAMPLE1;
      break;
    default:
      loadedTemplate = FileContent.DEFAULT
  }

  return loadedTemplate;
}

export const FileName = {
  EXAMPLE1: 'example.html',
  EXAMPLE2: 'example2.html'
};

const FileContent = {
  EXAMPLE1: '<!DOCTYPE html>\n' +
    '<html>\n' +
    '\n' +
    '<head>\n' +
    '    <title>Generated HTML example</title>\n' +
    '</head>\n' +
    '\n' +
    '<body>\n' +
    '\n' +
    '    <h1>Company summary</h1>\n' +
    '    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n' +
    '        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
    '        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
    '        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
    '        laborum.</p>\n' +
    '    <p>\n' +
    '        <h2>Monthly report</h2>\n' +
    '        <table style="width:100%">\n' +
    '            <tr>\n' +
    '                <th>Firstname</th>\n' +
    '                <th>Lastname</th>\n' +
    '                <th>Age</th>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '                <td>Jill</td>\n' +
    '                <td>Smith</td>\n' +
    '                <td>50</td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '                <td>Jamie</td>\n' +
    '                <td>Jackson</td>\n' +
    '                <td>44</td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '                <td>Billy</td>\n' +
    '                <td>Jean</td>\n' +
    '                <td>122</td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '                <td>Dan</td>\n' +
    '                <td>Town</td>\n' +
    '                <td>39</td>\n' +
    '            </tr>\n' +
    '        </table>\n' +
    '    </p>\n' +
    '</body>\n' +
    '\n' +
    '</html>',

  EXAMPLE2: '<!DOCTYPE html>\n' +
    '<html>\n' +
    '\n' +
    '<body>\n' +
    '    <div style="width:100%;background-color:#b5dcb3;">\n' +
    '\n' +
    '        <div style="background-color:#b5dcb3; width:100%">\n' +
    '            <h1>Loris Cafe</h1>\n' +
    '        </div>\n' +
    '\n' +
    '        <div style="background-color:#aaa; height:400px; width:10%; float:left;">\n' +
    '            <div><b>What\'s new?</b></div>\n' +
    '            HTML<br />\n' +
    '            PHP<br />\n' +
    '            PERL...\n' +
    '        </div>\n' +
    '\n' +
    '        <div style="background-color:#eee; height:400px; width:80%; float:left;">\n' +
    '            <h2>Menu for today:</h2>\n' +
    '            <p>\n' +
    '                <ul>\n' +
    '                    <li>Coffee</li>\n' +
    '                    <li>Tea\n' +
    '                        <ul>\n' +
    '                            <li>Black tea</li>\n' +
    '                            <li>Green tea\n' +
    '                                <ul>\n' +
    '                                    <li>China</li>\n' +
    '                                    <li>Africa</li>\n' +
    '                                </ul>\n' +
    '                            </li>\n' +
    '                        </ul>\n' +
    '                    </li>\n' +
    '                    <li>Milk</li>\n' +
    '                </ul>\n' +
    '            </p>\n' +
    '            <p>\n' +
    '                <h3>Newsletter</h3>\n' +
    '                <form>\n' +
    '                    First name: <input type="text" name="first_name" />\n' +
    '                    <br>\n' +
    '                    Email addr: <input type="text" name="email" />\n' +
    '                </form>\n' +
    '            </p>\n' +
    '        </div>\n' +
    '\n' +
    '        <div style="background-color:#aaa; height:400px; width:10%; float:right;">\n' +
    '            <div><b>Boring? Try:</b></div>\n' +
    '            Ruby<br />\n' +
    '            Scala<br />\n' +
    '            Cobol...\n' +
    '        </div>\n' +
    '\n' +
    '        <div style="background-color:#b5dcb3; clear:both">\n' +
    '            Copyright © 2007 Tutorialspoint.com\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '</body>\n' +
    '\n' +
    '</html>',

  DEFAULT: '<!DOCTYPE html>\n' +
    '<html>\n' +
    '<body>\n' +
    '\n' +
    '<h1>My First Heading</h1>\n' +
    '\n' +
    '<p>My first paragraph.</p>\n' +
    '\n' +
    '</body>\n' +
    '</html>\n'
};
