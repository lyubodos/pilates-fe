import {TranslatedText} from "../../../../shared/data/translated-text.data";

export interface NewsItem {
  id: string;
  title: TranslatedText;
  date: TranslatedText;
  content: TranslatedText;
  description: TranslatedText;
  interestingFactTitle?: TranslatedText;
  interestingFactParagraph?: TranslatedText;
  title1?: TranslatedText;
  description1?: TranslatedText;
  description2?: TranslatedText;
  title2?: TranslatedText;
  title3?: TranslatedText;
  orderedList1?: TranslatedText;
  unorderedList1?: TranslatedText;
  unorderedList2?: TranslatedText;
  tableList?: TranslatedText;
  orderedItems?: {
    line1: TranslatedText,
    line2?: TranslatedText,
    line3?: TranslatedText
  }[];
  unorderedItems1?: TranslatedText[];
  unorderedItems2?: TranslatedText[];
  paragraphEnd?: TranslatedText;
  image: string;
}
