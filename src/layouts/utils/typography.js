import wfl from 'webfontloader'
import Typography from 'typography'

wfl.load({
  google: {
    families: ['Space Mono']
  }
})

export default new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  bodyFontFamily: ['Space Mono']
})
