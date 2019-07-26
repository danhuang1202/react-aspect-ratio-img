import React from 'react'
import renderer from 'react-test-renderer'
import SquareImg from '@components/SquareImg'

describe('[snapshot] SquareImg', () => {
  const defaultProps = {
    src: 'SquareImg.png',
    imgAttributes: {
      alt: 'SquareImg',
      srcSet: `
        square-320w.jpg,
        square-480w.jpg 1.5x,
        square-640w.jpg 2x`
    }
  }

  it('SquareImg', () => {
    const dom = renderer.create(<SquareImg {...defaultProps} />)
    expect(dom).toMatchSnapshot()
  })

  it('SquareImg with outerElementType', () => {
    const props = {
      ...defaultProps,
      outerElementType: 'span'
    }

    const dom = renderer.create(<SquareImg {...props} />)
    expect(dom).toMatchSnapshot()
  })
})
