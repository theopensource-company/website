import * as React from "react"

type Props = {
    width?: number | string;
    height?: number | string;
}

const SvgComponent = ({ width = 300, height = 300 }: Props) => (
  <svg
    baseProfile="full"
    width={width}
    height={height}
    viewBox="0 0 160 160"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <text stroke="#fff" fill="#fff" fontSize={8.8} fontWeight="normal">
      <textPath path="M 20,80
        a 60,60 0 1,0 120,0
        a 60,60 0 1,0 -120,0"
        method="stretch" xlinkHref="#curve">
        THE OPEN SOURCE COMPANY THE OPEN SOURCE COMPANY THE OPEN SOURCE COMPANY
      </textPath>
    </text>
  </svg>
)

export default SvgComponent
