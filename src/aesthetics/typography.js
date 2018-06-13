import wfl from 'webfontloader'
import Typography from 'typography'

typeof window !== 'undefined' &&
  wfl.load({
    google: {
      families: ['Space Mono:400,700', 'Quicksand:400,700']
    }
  })

export default new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Quicksand', 'sans-serif'],
  headerWeight: 900,
  bodyFontFamily: ['Space Mono', 'monospace']
})
