import React, { FunctionComponent, ReactNode } from 'react'
import { AspectRatioFenceLegacy } from 'react-aspect-ratio-fence'
import 'react-aspect-ratio-fence/css/components/AspectRatioFenceLegacy/style.css'

// @ts-ignore
import styles from './style.css'

type Props = {
  /**
   *  outter html tag neme
   *  @default div
   * */
  outerElementType?: string
  /**
   *  inner html tag neme
   *  @default div
   * */
  innerElementType?: string
  /** Custom class name */
  customClass?: string
  /** The aspect ratio of an image describes the proportional relationship between width and height. */
  ratio: number
  /** The src attribute of <img /> tag */
  src: string
  /** Attributes of <img /> tag */
  imgAttributes?: object
  /** custom children node */
  children?: ReactNode
}

const AspectRatioFenceImg: FunctionComponent<Props> = ({
  outerElementType = 'div',
  innerElementType = 'div',
  ratio,
  src,
  imgAttributes,
  customClass,
  children
}) => {
  return (
    <AspectRatioFenceLegacy
      outerElementType={outerElementType}
      innerElementType={innerElementType}
      customClass={customClass}
      ratio={ratio}
    >
      <img alt="" {...imgAttributes} src={src} className={styles.img} />
      {children}
    </AspectRatioFenceLegacy>
  )
}

export default AspectRatioFenceImg
