import * as React from 'react'

function SvgJavascript({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M42.485 28.97c-.392-2.445-1.986-4.498-6.708-6.413-1.64-.754-3.469-1.294-4.014-2.537-.193-.723-.219-1.13-.097-1.569.352-1.42 2.048-1.864 3.393-1.456.866.29 1.685.957 2.18 2.022 2.312-1.497 2.307-1.488 3.922-2.517-.591-.916-.907-1.339-1.294-1.731-1.39-1.553-3.285-2.353-6.316-2.292l-1.578.204c-1.513.382-2.955 1.176-3.8 2.24-2.537 2.879-1.813 7.916 1.273 9.99 3.041 2.282 7.508 2.8 8.079 4.935.555 2.613-1.92 3.459-4.38 3.158-1.814-.377-2.823-1.298-3.913-2.974-2.006 1.161-2.006 1.161-4.07 2.348.49 1.07 1.004 1.553 1.824 2.48 3.881 3.937 13.595 3.744 15.337-2.215.07-.205.54-1.57.162-3.674zM22.416 12.791h-5.012l-.02 12.958c0 2.756.142 5.282-.306 6.057-.733 1.523-2.633 1.334-3.5 1.039-.88-.434-1.329-1.05-1.848-1.92-.142-.25-.25-.444-.285-.459L7.37 32.963c.677 1.39 1.675 2.598 2.954 3.382 1.91 1.146 4.477 1.498 7.162.881 1.747-.509 3.255-1.563 4.044-3.168 1.141-2.104.896-4.65.886-7.467.026-4.595 0-9.19 0-13.799z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgJavascript
