import React, { FunctionComponent, ReactNode } from 'react'
import { SquareFence } from 'react-aspect-ratio-fence'
import 'react-aspect-ratio-fence/css/components/SquareFence/style.css'

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
  /** The src attribute of <img /> tag */
  src: string
  /** Attributes of <img /> tag */
  imgAttributes?: object
  /** custom children node */
  children?: ReactNode
}

const SquareImg: FunctionComponent<Props> = ({
  outerElementType = 'div',
  customClass,
  src,
  imgAttributes,
  children
}) => {
  return (
    <SquareFence elementType={outerElementType} customClass={customClass}>
      <img alt="" {...imgAttributes} src={src} className={styles.img} />
      {children}
    </SquareFence>
  )
}

export default SquareImg
