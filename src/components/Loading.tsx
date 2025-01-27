import * as React from "react"

export interface LoadingProps{
    width?: number;
    height?: number;
}

function Loading({ height = 200, width = 200 }:LoadingProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width={width}
      height={height}
      style={{
        background: "0 0"
      }}
      display="block"
    >
      <rect fill="#3254e0" height={12} width={6} ry={6} rx={3} y={24} x={47}>
        <animate
          repeatCount="indefinite"
          begin="-0.9166666666666666s"
          dur="1s"
          keyTimes="0;1"
          values="1;0"
          attributeName="opacity"
        />
      </rect>
      <rect
        fill="#3254e0"
        height={12}
        width={6}
        ry={6}
        rx={3}
        y={24}
        x={47}
        transform="rotate(30 50 50)"
      >
        <animate
          repeatCount="indefinite"
          begin="-0.8333333333333334s"
          dur="1s"
          keyTimes="0;1"
          values="1;0"
          attributeName="opacity"
        />
      </rect>
      <rect
        fill="#3254e0"
        height={12}
        width={6}
        ry={6}
        rx={3}
        y={24}
        x={47}
        transform="rotate(60 50 50)"
      >
        <animate
          repeatCount="indefinite"
          begin="-0.75s"
          dur="1s"
          keyTimes="0;1"
          values="1;0"
          attributeName="opacity"
        />
      </rect>
      <rect
        fill="#3254e0"
        height={12}
        width={6}
        ry={6}
        rx={3}
        y={24}
        x={47}
        transform="rotate(90 50 50)"
      >
        <animate
          repeatCount="indefinite"
          begin="-0.6666666666666666s"
          dur="1s"
          keyTimes="0;1"
          values="1;0"
          attributeName="opacity"
        />
      </rect>
      <rect
        fill="#3254e0"
        height={12}
        width={6}
        ry={6}
        rx={3}
        y={24}
        x={47}
        transform="rotate(120 50 50)"
      >
        <animate
          repeatCount="indefinite"
          begin="-0.5833333333333334s"
          dur="1s"
          keyTimes="0;1"
          values="1;0"
          attributeName="opacity"
        />
      </rect>
      <rect
        fill="#3254e0"
        height={12}
        width={6}
        ry={6}
        rx={3}
        y={24}
        x={47}
        transform="rotate(150 50 50)"
      >
        <animate
          repeatCount="indefinite"
          begin="-0.5s"
          dur="1s"
          keyTimes="0;1"
          values="1;0"
          attributeName="opacity"
        />
      </rect>
      <rect
        fill="#3254e0"
        height={12}
        width={6}
        ry={6}
        rx={3}
        y={24}
        x={47}
        transform="rotate(180 50 50)"
      >
        <animate
          repeatCount="indefinite"
          begin="-0.4166666666666667s"
          dur="1s"
          keyTimes="0;1"
          values="1;0"
          attributeName="opacity"
        />
      </rect>
      <rect
        fill="#3254e0"
        height={12}
        width={6}
        ry={6}
        rx={3}
        y={24}
        x={47}
        transform="rotate(210 50 50)"
      >
        <animate
          repeatCount="indefinite"
          begin="-0.3333333333333333s"
          dur="1s"
          keyTimes="0;1"
          values="1;0"
          attributeName="opacity"
        />
      </rect>
      <rect
        fill="#3254e0"
        height={12}
        width={6}
        ry={6}
        rx={3}
        y={24}
        x={47}
        transform="rotate(240 50 50)"
      >
        <animate
          repeatCount="indefinite"
          begin="-0.25s"
          dur="1s"
          keyTimes="0;1"
          values="1;0"
          attributeName="opacity"
        />
      </rect>
      <rect
        fill="#3254e0"
        height={12}
        width={6}
        ry={6}
        rx={3}
        y={24}
        x={47}
        transform="rotate(270 50 50)"
      >
        <animate
          repeatCount="indefinite"
          begin="-0.16666666666666666s"
          dur="1s"
          keyTimes="0;1"
          values="1;0"
          attributeName="opacity"
        />
      </rect>
      <rect
        fill="#3254e0"
        height={12}
        width={6}
        ry={6}
        rx={3}
        y={24}
        x={47}
        transform="rotate(300 50 50)"
      >
        <animate
          repeatCount="indefinite"
          begin="-0.08333333333333333s"
          dur="1s"
          keyTimes="0;1"
          values="1;0"
          attributeName="opacity"
        />
      </rect>
      <rect
        fill="#3254e0"
        height={12}
        width={6}
        ry={6}
        rx={3}
        y={24}
        x={47}
        transform="rotate(330 50 50)"
      >
        <animate
          repeatCount="indefinite"
          begin="0s"
          dur="1s"
          keyTimes="0;1"
          values="1;0"
          attributeName="opacity"
        />
      </rect>
    </svg>
  )
}

export default Loading
