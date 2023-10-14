type TPhonetics = {
    audio: string,
    sourceUrl: string,
    license: {
        name: string,
        url: string
    },
}

type TDefinitions = {
    definition: string,
    synonyms: string[],
    antonyms: string[],
    example: string
}

type TMeanings = {
    partOfSpeech: string,
    definitions: TDefinitions[],
    synonyms: string[],
    antonyms: string[]
}

export interface IDataWord {
    word: string,
    phonetic: string,
    phonetics: TPhonetics[],
    meanings: TMeanings[],
    license: {
        name: string,
        url: string
    },
    sourceUrls: string[]
}