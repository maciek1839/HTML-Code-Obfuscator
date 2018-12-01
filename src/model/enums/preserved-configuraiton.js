
export function getDefaultConfiguration() {
    let array = [];
    array.push(
        {
            id: 11,
            name: 'HTML entities',
            config: {
                "choosenAlgorithm": {
                    "name": "Html to html entities",
                    "value": "4",
                    "details": {
                        "steps": [
                            "Create js function encoding characters to html codes.",
                            "Create decoding function.",
                            "Add output from decoding function to HTML."]
                    }
                },
                "choosenHtml": 2,
                "html": `<!DOCTYPE html>
<html>

<body>
    <div style="width:100%">

        <div style="background-color:#b5dcb3; width:100%">
            <h1>Loris Cafe</h1>
        </div>

        <div style="background-color:#aaa; height:200px; width:10%; float:left;">
            <div><b>What's new?</b></div>
            HTML<br />
            PHP<br />
            PERL...
        </div>

        <div style="background-color:#eee; height:100%; width:80%; float:left;">
            <h2>Menu for today:</h2>
            <p>
                <ul>
                    <li>Coffee</li>
                    <li>Tea
                        <ul>
                            <li>Black tea</li>
                            <li>Green tea
                                <ul>
                                    <li>China</li>
                                    <li>Africa</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>Milk</li>
                </ul>
            </p>
            <p>
                <h3>Newsletter</h3>
                <form>
                    First name: <input type="text" name="first_name" />
                    <br>
                    Email: <input type="text" name="email" />
                </form>
            </p>
        </div>

        <div style="background-color:#aaa; height:200px; width:10%; float:right;">
            <div><b>Boring? Try:</b></div>
            Ruby<br />
            Scala<br />
            Cobol...
        </div>

        <div style="background-color:#b5dcb3; clear:both">
            Copyright © 2007 Tutorialspoint.com
        </div>

    </div>
</body>

</html>`
            }
        }
    );

    array.push(
        {
            id: 12,
            name: 'Base64',
            config: {
                "choosenAlgorithm": {
                    "name": "Html to Base64 characters",
                    "value": "2",
                    "details": {
                        "steps": [
                            "Create js function encoding characters to Base64 characters.",
                            "Create decoding function.",
                            "Add output from decoding function to HTML."
                        ]
                    }
                },
                "choosenHtml": 2, "html": `<!DOCTYPE html>
                <html>
                
                <head>
                    <title>Generated HTML example</title>
                </head>
                
                <body>
                
                    <h1>Company summary</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum.</p>
                    <p>
                        <h2>Monthly report</h2>
                        <table style="width:100%">
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Age</th>
                            </tr>
                            <tr>
                                <td>Jill</td>
                                <td>Smith</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>Jamie</td>
                                <td>Jackson</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>Billy</td>
                                <td>Jean</td>
                                <td>122</td>
                            </tr>
                            <tr>
                                <td>Dan</td>
                                <td>Town</td>
                                <td>39</td>
                            </tr>
                        </table>
                    </p>
                </body>
                
                </html>`
            }
        }
    );

    return array;
}


export function getPreseredConfiguration (id){
    let result=null;
    console.log(id)
    getDefaultConfiguration().forEach(element=>{
        if(element.id === parseInt(id)){
            result=element;
        }
    });
    console.log(result);
    return result;
}