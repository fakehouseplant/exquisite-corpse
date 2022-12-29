import { useState } from 'react'
import useCanvas from '../hooks/useCanvas'
// import PropTypes from 'prop-types'

function UserCanvas() {
  const [isDrawing, setIsDrawing] = useState(false)
  const [canvasRef, ctxRef] = useCanvas()

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
      width='400px'
      height='400px'
      style={{
        border: '2px solid black'
      }}
    />
  )
}

// Canvas.propTypes = {}

export default UserCanvas
