import * as React from "react"

type Props = {
    width?: number | string;
    height?: number | string;
    opacity?: number;
}

const SvgComponent = ({ width = 300, height = 300, opacity = 1.0 }: Props) => (
  <svg
    baseProfile="full"
    width={width}
    height={height}
    viewBox="0 0 320 320"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <style>{`
      text {
        fill: black;
        stroke: black;
      }
      @media (prefers-color-scheme: dark) {
        text {
          fill: white;
          stroke: white;
        }
      }
    `}</style>
    <g opacity={opacity}>
      <text stroke="#fff" fill="#fff" fontSize={17.6} fontWeight="normal">
        <textPath path="M 20,140
          a 120,120 0 1,0 240,0
          a 120,120 0 1,0 -240,0"
          method="stretch" xlinkHref="#curve">
          THE OPEN SOURCE COMPANY THE OPEN SOURCE COMPANY THE OPEN SOURCE COMPANY
        </textPath>
      </text>
    </g>
  </svg>
)

export default SvgComponent
