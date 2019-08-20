import React, { FunctionComponent, ReactNode } from 'react'
import { AspectRatioFenceLegacy } from 'react-aspect-ratio-fence'
import 'react-aspect-ratio-fence/css/components/AspectRatioFenceLegacy/style.css'

// @ts-ignore
import styles from './style.css'

type Props = {
  /**
   *  outter html tag name
   *  @default div
   * */
  outerElementType?: string
  /**
   *  inner html tag name
   *  @default div
   * */
  innerElementType?: string
  /** Custom class name */
  className?: string
  /** The aspect ratio of an image describes the proportional relationship between width and height. */
  ratio: number
  /** The src attribute of <img /> tag */
  src: string
  /** Attributes of <img /> tag */
  imgAttributes?: object
  /** custom children node */
  children?: ReactNode
}

const AspectRatioImgLegacy: FunctionComponent<Props> = ({
  outerElementType = 'div',
  innerElementType = 'div',
  ratio = 1,
  src,
  imgAttributes,
  className,
  children
}) => {
  return (
    <AspectRatioFenceLegacy
      outerElementType={outerElementType}
      innerElementType={innerElementType}
      className={className}
      ratio={ratio}
    >
      <img alt="" {...imgAttributes} src={src} className={styles.img} />
      {children}
    </AspectRatioFenceLegacy>
  )
}

export default AspectRatioImgLegacy
