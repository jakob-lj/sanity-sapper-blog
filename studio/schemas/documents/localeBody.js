
const supportedLanguages = [
    {id: 'nb', title: 'Norwegian', isDefault: true},
    {id: 'en', title: 'English'},
  ]
  
  export default {
    name: 'localeBody',
    type: 'object',
    fieldsets: [
      {
        title: 'Translations',
        name: 'translations',
        options: {collapsible: true}
      }
    ],
    fields: supportedLanguages.map(lang => (
      {
        title: lang.title,
        name: lang.id,
        type: 'bodyPortableText',
        fieldset: lang.isDefault ? null : 'translations'
      }
    ))
  }