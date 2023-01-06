import GameDashboard from './GameDashboard'
import Header from './Header'
import Login from './Login'
import { GameRoomProvider } from '../contexts/GameRoomProvider'
import { SocketProvider } from '../contexts/SocketProvider'
import useSessionStorage from '../hooks/useSessionStorage'

function App() {
  const [room, setRoom] = useSessionStorage('roomId', null)

  const gameDashboard = (
    <SocketProvider room={room}>
      <GameRoomProvider>
        <GameDashboard gameRoom={room} setRoom={setRoom} />
      </GameRoomProvider>
    </SocketProvider>
  )

  return (
    <>
      <Header />
      {room ? gameDashboard : <Login setRoom={setRoom} />}
    </>
  )
}

export default App
