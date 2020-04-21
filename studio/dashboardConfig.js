export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e9f32db95ede43489790d04',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-ig5zso99',
                  apiId: 'e298f8b2-ffc3-4ae8-8bfb-4fec54dbfb4a'
                },
                {
                  buildHookId: '5e9f32dbc140154fbb990baf',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-ogfy5zvv',
                  apiId: 'd22cd867-a2fa-49cb-97a0-de79fcfa5959'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jakob-lj/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-ogfy5zvv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
