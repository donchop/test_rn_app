import * as React from 'react'
import Svg, { SvgProps, Path, Circle } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg viewBox="0 0 20 20" width={20} height={20} fill="none" {...props}>
      <Path
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.96}
        d="M9.82 18.64c2.436 0 4.64-.987 6.237-2.583A8.792 8.792 0 0 0 18.64 9.82c0-2.436-.987-4.64-2.583-6.237A8.792 8.792 0 0 0 9.82 1c-2.436 0-4.64.987-6.237 2.583A8.792 8.792 0 0 0 1 9.82c0 2.436.987 4.64 2.583 6.237A8.792 8.792 0 0 0 9.82 18.64Z"
      />
      <Path
        fill={props.color}
        stroke="#fff"
        strokeWidth={0.45}
        d="M10.595 13.82a.775.775 0 1 1-1.55 0 .775.775 0 0 1 1.55 0Z"
      />
      <Path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.82 5.82v5"
      />
    </Svg>
  )
}
export default React.memo(SvgComponent)
