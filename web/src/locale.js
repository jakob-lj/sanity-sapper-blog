
const getLocaleLang = (obj, lang) => {
    if (obj[lang]) {
        return obj[lang]
    }
    return ''
}

const getLocaleBlockLang = (obj, lang) => {
    try {
        return obj[lang]
    } catch {
        return []

    }
}

export const getLocale = (obj, l) => {
    return getLocaleLang(obj, l || 'nb')
}

export const getLocaleBlock = (obj, l) => {
    return getLocaleBlockLang(obj, l || 'nb')
}