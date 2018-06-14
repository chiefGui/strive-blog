import Typography from 'typography'

typeof window !== 'undefined' &&
  require('webfontloader').load({
    google: {
      families: [
        'Montserrat:100,200,300,400,500,600,700,800,900',
        'Gentium Book Basic:400,700'
      ]
    }
  })

export default new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Montserrat', 'sans-serif'],
  headerWeight: 600,
  bodyFontFamily: ['Gentium Book Basic', 'monospace']
})
