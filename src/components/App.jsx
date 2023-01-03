import GameDashboard from './GameDashboard'
import Header from './Header'
import Login from './Login'
import useLocalStorage from '../hooks/useLocalStorage'

function App() {
  const [room, setRoom] = useLocalStorage('roomId')

  const gameDashboard = <GameDashboard gameRoom={room} />

  return (
    <>
      <Header />
      {room ? gameDashboard : <Login setRoom={setRoom} />}
    </>
  )
}

export default App
