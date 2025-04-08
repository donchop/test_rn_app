import * as React from 'react'
import Svg, { SvgProps, Path, Circle } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg viewBox="0 0 10 10" width={10} height={10} fill="none" {...props}>
      <Path
        fill={props.color}
        fillRule="evenodd"
        d="M1.157 1.157c.31-.31.81-.31 1.12 0l6.566 6.566a.792.792 0 0 1-1.12 1.12L1.157 2.277a.792.792 0 0 1 0-1.12Z"
        clipRule="evenodd"
      />
      <Path
        fill={props.color}
        fillRule="evenodd"
        d="M8.843 1.157c.31.31.31.81 0 1.12L2.277 8.843a.792.792 0 1 1-1.12-1.12l6.566-6.566c.31-.31.81-.31 1.12 0Z"
        clipRule="evenodd"
      />
    </Svg>
  )
}
export default React.memo(SvgComponent)
