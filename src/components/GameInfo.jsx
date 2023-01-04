import PropTypes from 'prop-types'
// import TurnInfo from './TurnInfo'
// import PlayerCard from './PlayerCard'

function GameInfo({ setRoom }) {
  function leaveRoom() {
    setRoom()
  }

  return (
    <>
      {/* <TurnInfo />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard /> */}
      <button
        type='submit'
        onClick={leaveRoom}
        className='border w-1/4 mx-auto my-4 py-4'
      >
        Leave Room
      </button>
    </>
  )
}

GameInfo.propTypes = {
  setRoom: PropTypes.func.isRequired
}

export default GameInfo
