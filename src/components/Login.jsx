import { useRef } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidV4 } from 'uuid'

function Login({ setRoom }) {
  const roomRef = useRef()

  function handleJoinRoom(e) {
    e.preventDefault()

    setRoom(roomRef.current.value)
  }

  function createNewRoom() {
    setRoom(uuidV4())
  }

  return (
    <main className='w-screen h-screen flex flex-col place-content-center'>
      <form
        onSubmit={handleJoinRoom}
        className='flex flex-col w-2/4 mx-auto place-content-center'
      >
        <label htmlFor='roomId' className='mx-auto p-2'>
          Enter Room Id
          <input
            type='text'
            ref={roomRef}
            id='roomId'
            className='border mx-2 p-2'
          />
        </label>
        <button type='submit' className='border w-2/4 mx-auto my-2 py-4'>
          Join Room
        </button>
        <button
          type='button'
          onClick={createNewRoom}
          className='border w-2/4 mx-auto my-2 py-4'
        >
          Create New Game Room
        </button>
      </form>
    </main>
  )
}

Login.propTypes = {
  setRoom: PropTypes.func.isRequired
}

export default Login
