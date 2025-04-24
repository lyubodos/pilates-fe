import {TranslatedText} from "../../../../shared/data/translated-text.data";

export interface NewsItem {
  id: string;
  title: TranslatedText;
  date: TranslatedText;
  content: TranslatedText;
  description: TranslatedText;
  image: string;
}
