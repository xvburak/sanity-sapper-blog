export default {
  widgets: [
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
                  buildHookId: '611bc74c83ce673579bcdae5',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-zk7qdzwp',
                  apiId: '7cfeb27f-a37a-4174-8fb9-02d460ce55b3'
                },
                {
                  buildHookId: '611bc74c7ab87b40633e5999',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-ygdde71z',
                  apiId: 'e4734702-a44c-4501-b356-629695af0fc8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xvburak/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-ygdde71z.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Nedávné projekty', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
