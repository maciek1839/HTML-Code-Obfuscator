import { getOpeningTag, getClosingTag, generateQuizForm, getRandomImage, getRandomParagraph, getRandomHeader, getRandomBlockQuote, randomCount } from "../utils/html-generator-factory";

export interface HtmlConfig{
    'section'?:number;
    'header': number;
    'paragraph': number;
    'input': number;
}

export function prepareHtmlConfig(
    sectionCount:number,
    headerCount:number,
    paragraphCount:number,
    inputCount:number):HtmlConfig {
    return {
        'section': sectionCount,
        'header': headerCount,
        'paragraph': paragraphCount,
        'input': inputCount
    };
}

export function generateHTML(config:HtmlConfig) {
    let result = getOpeningTag();
    let sectionNumber:any = config.section;
    for (; sectionNumber > 0; sectionNumber--) {
        let sectionResult = generateSection(config);
        result += sectionResult.html;
        config = sectionResult.config;
    }
    result += getClosingTag();

    return result;
}

function generateSection(config:HtmlConfig) {
    const limit = 3;
    let updatedConfig:HtmlConfig;
    let headerCount:any = randomCount() % limit + 1;
    let paragraphCount:any = randomCount() % limit + 1;
    let inputCount:any = randomCount() % limit + 1;

    updatedConfig = {
        'header': config.header - headerCount,
        'paragraph': config.paragraph - paragraphCount,
        'input': config.input - inputCount
    };

    headerCount = (config.header - headerCount) < 0 ? config.header : headerCount;
    paragraphCount = (config.paragraph - paragraphCount) < 0 ? config.paragraph : paragraphCount;
    inputCount = (config.input - inputCount) < 0 ? config.input : inputCount;

    let isQuiz = false;
    let isEmptySection = true;

    let section = "<section>";
    for (; headerCount > 0; headerCount--) {
        isEmptySection = false;
        let notEmpty = false;
        section += getRandomHeader();
        if (paragraphCount > 0) {
            notEmpty = true;
            let withLink = Math.random() >= 0.5;
            paragraphCount--;
            if (withLink) {
                section += getRandomParagraph(true);
            } else {
                section += getRandomParagraph(false);
            }
        }
        if (Math.random() >= 0.5) {
            notEmpty = true;
            section += getRandomImage();
        }
        if (!notEmpty) {
            section += getRandomBlockQuote();
        }
    }
    if (Math.random() >= 0.5 && inputCount > 0) {
        isEmptySection = false;
        isQuiz = true;
        section += generateQuizForm(inputCount);
    }
    for (; paragraphCount > 0; paragraphCount--) {
        isEmptySection = false;
        section += "</br>";
        if (Math.random() >= 0.5) {
            section += getRandomBlockQuote();
        }
        let withLink = Math.random() >= 0.5;
        section += getRandomParagraph(withLink);
        if (Math.random() >= 0.5) {
            section += getRandomImage();
        }
    }
    if (!isQuiz && inputCount > 0) {
        isEmptySection = false;
        section += generateQuizForm(inputCount);
    }

    if (isEmptySection) {
        section += getRandomBlockQuote();
    }

    section += "</section>";

    return { "html": section, "config": updatedConfig };
}
