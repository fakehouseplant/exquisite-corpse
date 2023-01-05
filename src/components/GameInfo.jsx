import PropTypes from 'prop-types'
// import TurnInfo from './TurnInfo'
// import PlayerCard from './PlayerCard'

function GameInfo({ setRoom }) {
  function handleLeaveRoom() {
    setRoom()
  }

  return (
    <>
      {/* <TurnInfo />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard /> */}
      <button
        type='button'
        onClick={handleLeaveRoom}
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
