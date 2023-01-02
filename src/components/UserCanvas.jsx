import { useState } from 'react'
import useCanvas from '../hooks/useCanvas'
// import PropTypes from 'prop-types'

function UserCanvas() {
  const [isDrawing, setIsDrawing] = useState(false)
  const [canvasRef, ctxRef] = useCanvas()

  const setWidth = () => {
    const canvasWidth = window.innerWidth * 0.4

    return canvasWidth
  }

  const width = setWidth()

  const setHeight = (w) => {
    const canvasHeight = w * 0.45

    return canvasHeight
  }

  const height = setHeight(width)

  const startDrawing = (e) => {
    ctxRef.current.beginPath()
    ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
    setIsDrawing(true)
  }

  const stopDrawing = () => {
    ctxRef.current.closePath()
    setIsDrawing(false)
  }

  const draw = (e) => {
    if (!isDrawing) {
      return
    }

    ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
    ctxRef.current.stroke()
  }

  return (
    <canvas
      ref={canvasRef}
      onMouseUp={stopDrawing}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      height={height}
      width={width}
      className='self-center border'
    />
  )
}

// Canvas.propTypes = {}

export default UserCanvas
