import { storiesOf } from '@storybook/react'
import React from 'react'
import AspectRatioImg from '@components/AspectRatioImg'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, number, object } from '@storybook/addon-knobs'
// @ts-ignore
import style from './aspectRatioImg.stories.css'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      header: false,
      inline: true
    })
  )
  .add('AspectRatioImg', () => (
    <AspectRatioImg
      ratio={number('ratio', 16 / 9)}
      className={text('className', style.wrap)}
      outerElementType={text('outerElementType', 'span')}
      src={text('src', 'https://via.placeholder.com/16x9')}
      imgAttributes={object('imgAttributes', {
        alt: 'placeholder',
        srcSet: `
          https://via.placeholder.com/1024x576 2x,
          https://via.placeholder.com/768x432 1x
        `
      })}
    />
  ))
