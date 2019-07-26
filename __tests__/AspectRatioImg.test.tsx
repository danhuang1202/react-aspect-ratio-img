import React from 'react'
import renderer from 'react-test-renderer'
import AspectRatioImg from '@components/AspectRatioImg'

describe('[snapshot] AspectRatioImg', () => {
  const defaultProps = {
    ratio: 16 / 9,
    src: 'aspect-ratio-640w.jpg',
    imgAttributes: {
      alt: 'AspectRatioImg',
      srcSet: `
        aspect-ratio-320w.jpg,
        aspect-ratio-480w.jpg 1.5x,
        aspect-ratio-640w.jpg 2x`
    }
  }

  it('AspectRatioImg', () => {
    const dom = renderer.create(<AspectRatioImg {...defaultProps} />)
    expect(dom).toMatchSnapshot()
  })

  it('AspectRatioImg with outerElementType', () => {
    const props = {
      ...defaultProps,
      outerElementType: 'span'
    }

    const dom = renderer.create(<AspectRatioImg {...props} />)
    expect(dom).toMatchSnapshot()
  })
})
