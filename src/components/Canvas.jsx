import { useState, useRef, useEffect } from 'react'
// import PropTypes from 'prop-types'

function Canvas() {
  const canvasRef = useRef(null)
  const ctxRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)

  console.log(isDrawing)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    ctx.lineWidth = 5
    ctx.strokeStyle = 'blue'
    ctxRef.current = ctx
  })

  const startDrawing = (e) => {
    ctxRef.current.beginPath()
    ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
    setIsDrawing(true)
    console.log(isDrawing)
  }

  const stopDrawing = () => {
    ctxRef.current.closePath()
    setIsDrawing(false)
    console.log(isDrawing)
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

export default Canvas
