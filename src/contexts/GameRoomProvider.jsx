import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSocket } from './SocketProvider'

const GameRoomContext = React.createContext()

function useGameRoom() {
  return useContext(GameRoomContext)
}

function GameRoomProvider({ children }) {
  const socket = useSocket()

  useEffect(() => {
    if (socket == null) return

    socket.on('connect', () => {
      console.log(socket.connected)
    })
    console.log(socket)
  }, [socket])

  return (
    <GameRoomContext.Provider value={socket}>
      {children}
    </GameRoomContext.Provider>
  )
}

GameRoomProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { useGameRoom, GameRoomProvider }
