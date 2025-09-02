import React from 'react'

export default function NextImage(props: any) {
  // Render a normal img for tests
  // next/image provides width/height; forward them to style
  const { src, alt, width, height, className } = props
  const style = { width, height }
  return <img src={src} alt={alt} style={style as any} className={className} />
}
