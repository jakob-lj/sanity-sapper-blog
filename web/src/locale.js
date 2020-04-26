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

export const getLocale = (obj) => {
    return getLocaleLang(obj, 'nb')
}

export const getLocaleBlock = (obj) => {
    return getLocaleBlockLang(obj, 'nb')
}