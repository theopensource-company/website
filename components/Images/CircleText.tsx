import React from "react";

type Props = {
  width?: number | string;
  height?: number | string;
  speed?: number;
  opacity?: number;
};

export default function CircleText({
  width = 300,
  height = 300,
  speed = 1,
  opacity = 1.0,
}: Props) {
  return (
    <svg
      baseProfile="full"
      width={width}
      height={height}
      viewBox="0 0 280 280"
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

      <path
        d="M 20,140
            a 120,120 0 1,0 240,0
            a 120,120 0 1,0 -240,0"
        id="curve"
        fill="transparent"
        stroke="transparent"
      />

      <g opacity={opacity} transform-origin="center">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0"
          to={speed * 360}
          dur="40s"
          repeatCount="indefinite"
        />

        <text stroke="#fff" fill="#fff" fontSize={17.6} fontWeight="normal">
          <textPath method="stretch" xlinkHref="#curve">
            THE OPEN SOURCE COMPANY THE OPEN SOURCE COMPANY THE OPEN SOURCE
            COMPANY
          </textPath>
        </text>
      </g>
    </svg>
  );
}
