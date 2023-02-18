import nltk
from fastapi import FastAPI
from pydantic import BaseModel
from nltk.corpus import stopwords
from rapidfuzz import process, fuzz
from natasha import (
    Segmenter,
    MorphVocab,
    NewsEmbedding,
    NewsMorphTagger,
    Doc,
)

# Initialize the necessary tools
nltk.download('stopwords')
segmenter = Segmenter()
emb = NewsEmbedding()
morph_tagger = NewsMorphTagger(emb)
morph_vocab = MorphVocab()
app = FastAPI()

keywords = [
    "название проекта",
    "примеры названия проекта",
    "регион реализации проекта",
    "требования к логотипу проекта",
    "масштаб реализации проекта",
    "дата начала и окончания проекта",
    "опыт руководителя",
    "описание функционала руководителя",
    "адрес регистрации руководителя проекта",
    "резюме",
    "видео-визитка",
    "содержание видео-визитки",
    "рекомендации по записи видео-визитки"
]


class Text(BaseModel):
    text: str


def keyword_extractor(text):
    doc = Doc(text)
    doc.segment(segmenter)
    doc.tag_morph(morph_tagger)
    for token in doc.tokens:
        token.lemmatize(morph_vocab)

    filtered_tokens = [token.lemma for token in doc.tokens if token.lemma not in stopwords.words("russian")]
    filtered_text = " ".join(filtered_tokens)

    keyword_list = process.extract(filtered_text, keywords, scorer=fuzz.partial_ratio)[:3]
    print(keyword_list)
    keyword_list = list(zip(*keyword_list))[0]
    return keyword_list


@app.post("/")
def keywords_from_text(text: Text):
    return keyword_extractor(text.text)
