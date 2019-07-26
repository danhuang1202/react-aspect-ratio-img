import React from 'react'
import renderer from 'react-test-renderer'
import AspectRatioImgLegacy from '@components/AspectRatioImgLegacy'

describe('[snapshot] AspectRatioImgLegacy', () => {
  const defaultProps = {
    ratio: 16 / 9,
    src: 'aspect-ratio-640w.jpg',
    imgAttributes: {
      alt: 'AspectRatioImgLegacy',
      srcSet: `
        aspect-ratio-320w.jpg,
        aspect-ratio-480w.jpg 1.5x,
        aspect-ratio-640w.jpg 2x`
    }
  }

  it('AspectRatioImgLegacy', () => {
    const dom = renderer.create(<AspectRatioImgLegacy {...defaultProps} />)
    expect(dom).toMatchSnapshot()
  })

  it('AspectRatioImgLegacy with outerElementType and innerElementType', () => {
    const props = {
      ...defaultProps,
      outerElementType: 'ul',
      innerElementType: 'li'
    }

    const dom = renderer.create(<AspectRatioImgLegacy {...props} />)
    expect(dom).toMatchSnapshot()
  })
})
