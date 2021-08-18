import {format} from 'date-fns'

export default {
  name: 'post',
  type: 'document',
  title: 'Projekt',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required().min(10).max(80)
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
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
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
        dateFormat: 'yyyy',
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
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    }
  ],
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
  }
}
