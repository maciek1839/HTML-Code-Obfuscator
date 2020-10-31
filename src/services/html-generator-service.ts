import HtmlGeneratorFactory from './html-generator-factory';

export interface HtmlConfig {
  header: number;
  input: number;
  paragraph: number;
  section?: number;
}

export default class HtmlGeneratorService {
  private static readonly htmlFactory: HtmlGeneratorFactory = new HtmlGeneratorFactory();

  static generateHTML(config: HtmlConfig) {
    let result = this.htmlFactory.getOpeningTag();
    let sectionNumber: any = config.section;
    for (; sectionNumber > 0; sectionNumber--) {
      let sectionResult = this.generateSection(config);
      result += sectionResult.html;
      config = sectionResult.config;
    }
    result += this.htmlFactory.getClosingTag();

    return result;
  }

  static prepareHtmlConfig(
    sectionCount: number,
    headerCount: number,
    paragraphCount: number,
    inputCount: number): HtmlConfig {
    return {
      section: sectionCount,
      header: headerCount,
      paragraph: paragraphCount,
      input: inputCount
    };
  }

  private static generateSection(config: HtmlConfig) {
    const limit = 3;
    let updatedConfig: HtmlConfig;
    let headerCount: any = this.htmlFactory.randomCount() % limit + 1;
    let paragraphCount: any = this.htmlFactory.randomCount() % limit + 1;
    let inputCount: any = this.htmlFactory.randomCount() % limit + 1;

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
      section += this.htmlFactory.getRandomHeader();
      if (paragraphCount > 0) {
        notEmpty = true;
        let withLink = Math.random() >= 0.5;
        paragraphCount--;
        if (withLink) {
          section += this.htmlFactory.getRandomParagraph(true);
        } else {
          section += this.htmlFactory.getRandomParagraph(false);
        }
      }
      if (Math.random() >= 0.5) {
        notEmpty = true;
        section += this.htmlFactory.getRandomImage();
      }
      if (!notEmpty) {
        section += this.htmlFactory.getRandomBlockQuote();
      }
    }
    if (Math.random() >= 0.5 && inputCount > 0) {
      isEmptySection = false;
      isQuiz = true;
      section += this.htmlFactory.generateQuizForm(inputCount);
    }
    for (; paragraphCount > 0; paragraphCount--) {
      isEmptySection = false;
      section += "</br>";
      if (Math.random() >= 0.5) {
        section += this.htmlFactory.getRandomBlockQuote();
      }
      let withLink = Math.random() >= 0.5;
      section += this.htmlFactory.getRandomParagraph(withLink);
      if (Math.random() >= 0.5) {
        section += this.htmlFactory.getRandomImage();
      }
    }
    if (!isQuiz && inputCount > 0) {
      isEmptySection = false;
      section += this.htmlFactory.generateQuizForm(inputCount);
    }

    if (isEmptySection) {
      section += this.htmlFactory.getRandomBlockQuote();
    }

    section += "</section>";

    return {html: section, config: updatedConfig};
  }
}
