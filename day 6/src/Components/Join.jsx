import React, { useEffect, useRef, useState } from 'react';
import Peer from 'simple-peer';
import io from 'socket.io-client';
import '../assests/css/Join.css'; // Make sure the path to your CSS file is correct

const socket = io('http://localhost:3000'); // Replace with your server URL

function Join() {
  const [peer, setPeer] = useState(null);
  const [stream, setStream] = useState(null);
  const [micEnabled, setMicEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const videoRef = useRef();
  const myPeer = new Peer({ initiator: true, trickle: false });

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((userStream) => {
        setStream(userStream);
        videoRef.current.srcObject = userStream;
        myPeer.addStream(userStream);

        myPeer.on('signal', (data) => {
          socket.emit('join-room', { signalData: data });
        });

        socket.on('user-connected', (data) => {
          myPeer.signal(data.signalData);
        });

        socket.on('message', (message) => {
          setChatMessages((prevMessages) => [...prevMessages, message]);
        });
      });

    return () => {
      myPeer.destroy();
    };
  }, []);

  const toggleMic = () => {
    const enabled = !micEnabled;
    setMicEnabled(enabled);
    stream.getAudioTracks().forEach((track) => {
      track.enabled = enabled;
    });
  };

  const toggleVideo = () => {
    const enabled = !videoEnabled;
    setVideoEnabled(enabled);
    stream.getVideoTracks().forEach((track) => {
      track.enabled = enabled;
    });
  };

  const handleChatInput = (e) => {
    setChatMessage(e.target.value);
  };

  const sendChatMessage = () => {
    socket.emit('message', chatMessage);
    setChatMessage('');
  };

  return (
    <div>
      <div>
        <video ref={videoRef} autoPlay muted />

      </div>
      <div>
        <div>
          <ul>
            {chatMessages.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
        </div>
        <div>
        <div>
  <video ref={videoRef} autoPlay muted />
  <div style={{ marginTop: '10px' }}> {/* Add style to this div */}
    <button onClick={toggleMic}> {micEnabled ? 'Mute' : 'Unmute'} </button>
    <button onClick={toggleVideo} style={{ marginLeft: '10px' }}> {/* Add marginLeft to this button */}
      {videoEnabled ? 'Stop Video' : 'Start Video'}
    </button>
  </div>
</div>

          <input type="text" value={chatMessage} onChange={handleChatInput} />
          <button onClick={sendChatMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Join;
