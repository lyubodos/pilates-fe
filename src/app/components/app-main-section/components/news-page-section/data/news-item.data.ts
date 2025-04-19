export interface NewsItem {
  id: string;
  title: TranslatedText;
  date: TranslatedText;
  content: TranslatedText;
  description: TranslatedText;
  image: string;
}

export interface TranslatedText {
  en: string;
  bg: string;
}
