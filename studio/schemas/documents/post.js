import {format} from 'date-fns'

export default {
  name: 'post',
  type: 'document',
  title: 'Blog Post',
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
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
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
      title: 'Poster',
      name: 'poster',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        }
      ]
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
