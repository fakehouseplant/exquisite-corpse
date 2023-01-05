import PropTypes from 'prop-types'
import GameInfo from './GameInfo'
import Canvas from './Canvas'
// import Chat from './Chat'

function GameDashboard({ setRoom }) {
  return (
    <div className='flex flex-col'>
      <GameInfo setRoom={setRoom} />
      <Canvas />
      {/* <Chat /> */}
    </div>
  )
}

GameDashboard.propTypes = {
  setRoom: PropTypes.func.isRequired
}

export default GameDashboard
