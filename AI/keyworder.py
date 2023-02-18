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
segmenter = Segmenter()
emb = NewsEmbedding()
morph_tagger = NewsMorphTagger(emb)
morph_vocab = MorphVocab()

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

text = "а что там про руководителя то писать?"


doc = Doc(text)
doc.segment(segmenter)
doc.tag_morph(morph_tagger)

# Lemmatize the tokens
for token in doc.tokens:
    token.lemmatize(morph_vocab)

filtered_tokens = [token.lemma for token in doc.tokens if token.lemma not in stopwords.words("russian")]
filtered_text = " ".join(filtered_tokens)

print(filtered_text)
print(process.extract(filtered_text, keywords, scorer=fuzz.partial_ratio))

