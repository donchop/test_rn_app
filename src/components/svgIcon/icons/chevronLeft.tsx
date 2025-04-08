import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg viewBox="0 0 12 20" width={12} height={20} fill="none" {...props}>
      <Path
        stroke={props.color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.4}
        d="M10.356 18.712 1.644 10l8.712-8.712"
      />
    </Svg>
  )
}
export default React.memo(SvgComponent)
