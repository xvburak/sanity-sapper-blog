module.exports = {
  content: [
    './src/template.html',
    './src/routes/*.{html,js,svelte}',
    './src/routes/projects/*.{html,js,svelte}',
    './src/components/*.{html,js,svelte}'
  ],
  theme: {
    fontFamily: {
      'sans': 'Inter, Helvetica, Arial, sans-serif',
    }
  },
  plugins: [],
}



//   theme: {
//     extend: {
//       screens: {
//         'gl': '1500px',
//       },
//     },
//   },
//   variants: {
//     extend: {
//       backgroundColor: ['checked'],
//       borderColor: ['checked'],
//     },
//   },
//   plugins: [],
// }

