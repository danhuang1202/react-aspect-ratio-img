import React, { FunctionComponent, ReactNode } from 'react'
import { AspectRatioFence } from 'react-aspect-ratio-fence'
import 'react-aspect-ratio-fence/css/components/AspectRatioFence/style.css'

// @ts-ignore
import styles from './style.css'

type Props = {
  /**
   *  outter html tag name
   *  @default div
   * */
  outerElementType?: string
  /** Custom class name */
  customClass?: string
  /**
   * The aspect ratio of an image describes the proportional
   * relationship between width and height.
   *  @default 1
   **/
  ratio: number
  /** The src attribute of <img /> tag */
  src: string
  /** Attributes of <img /> tag */
  imgAttributes?: object
  /** custom children node */
  children?: ReactNode
}

const AspectRatioImg: FunctionComponent<Props> = ({
  outerElementType = 'div',
  ratio = 1,
  src,
  imgAttributes,
  customClass,
  children
}) => {
  return (
    <AspectRatioFence
      elementType={outerElementType}
      customClass={customClass}
      ratio={ratio}
    >
      <img alt="" {...imgAttributes} src={src} className={styles.img} />
      {children}
    </AspectRatioFence>
  )
}

export default AspectRatioImg
