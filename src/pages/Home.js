import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');

  const navigate = useNavigate();

  const focusRef = useRef(null);

  useEffect(() => {
    focusRef.current.focus();
  }, [])

  const createNewRoom = (e) => {
    const id = uuidV4();
    setRoomId(id)
    toast.success('Room Created Successfully!')
  }

  const userNameHandle = (e) => {
    setUsername(e.target.value);
  }

  const joinRoom = (e) => {
    if (!roomId) {
      toast.error("Room ID is Required")
      return
    }
    else if (!username) {
      toast.error("Username is Required")
      return
    }
   
    navigate(`/editor/${roomId}`, {
      state: {
        username
      }
    })
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      joinRoom();
    }
  }

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img
          className="homePageLogo"
          draggable="false"
          src="/logo.png"
          alt="logo"
          
        />
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <label className='label'>ROOM ID</label>
          <input
            type="text"
            className="inputBox"
            placeholder="ROOM ID"
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleEnter}
            ref={focusRef}
          />
          <label className='label'>USER NAME</label>
          <input
            type="text"
            className="inputBox"
            placeholder="USERNAME"
            onChange={userNameHandle}
            value={username}
            onKeyUp={handleEnter}
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            If You don't have Room ID &nbsp;
            <button onClick={createNewRoom} className="createNewBtn">
              Create Room
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
