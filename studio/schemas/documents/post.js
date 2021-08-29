import {format} from 'date-fns'

export default {
  name: 'post',
  type: 'document',
  title: 'Projekt',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Jméno',
      validation: Rule => Rule.required().min(10).max(80)
    },
    {
      name: 'description',
      type: 'string',
      title: 'Popis'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Ve většině případů stačí kliknout na generate 😎',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'date',
      title: 'Zveřejnit',
      options: {
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Úvodní foto'
    },
    {
      name: 'studie',
      type: 'string',
      title: 'Studie'
    },
    {
      name: 'navrh',
      type: 'string',
      title: 'Návrh'
    },
    {
      name: 'spoluprace',
      type: 'string',
      title: 'Spolupráce na studii'
    },
    {
      name: 'lokace',
      type: 'string',
      title: 'Lokace'
    },
    {
      name: 'investor',
      type: 'string',
      title: 'Investor'
    },
    {
      name: 'prostor',
      type: 'string',
      title: 'Celkový obestavěný prostor'
    },
    {
      name: 'rok',
      type: 'date',
      title: 'Rok',
      options: {
        dateFormat: 'YYYY',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'vizualizace',
      type: 'string',
      title: 'Vizualizace'
    },
    {
      name: 'foto',
      type: 'string',
      title: 'Fotografie'
    },
    {
      name: 'oceneni',
      type: 'string',
      title: 'Ocenění'
    },
    {
      name: 'gallery',
      type: 'object',
      title: 'Galerie',
     
      fields: [
        {
          name: 'images',
          type: 'array',
          title: 'Images',
          of: [
            {
              name: 'image',
              type: 'image', 
              title: 'Image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                },
              ],
            },
          ],
          options: {
            layout: 'grid'
          },
        },
        {
          name: 'display',
          type: 'string',
          title: 'Display as',
          description: 'How should we display these images?',
          options: {
            list: [
              { title: 'Stacked on top of eachother', value: 'stacked' },
              { title: 'In-line', value: 'inline' },
              { title: 'Carousel', value: 'carousel' },
            ],
            layout: 'radio', // <-- defaults to 'dropdown'
          },
        },
        {
          name: 'zoom',
          type: 'boolean',
          title: 'Zoom enabled',
          description: 'Should we enable zooming of images?',
        },
      ],
      preview: {
        select: {
          images: 'images',
          image: 'images.0',
        },
        prepare(selection) {
          const { images, image } = selection;

        return {
            title: `Gallery block of ${Object.keys(images).length} images`,
            subtitle: `Alt text: ${image.alt}`,
            media: image,
          };
        },
      },
    },
  ],
  initialValue: {
    isHighlighted: false
  },
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare ({title = 'No title', publishedAt, slug, media}) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  },
  initialValue: () => ({
    isHighlighted: false,
    releaseDate: (new Date()).toISOString()
  })
}
