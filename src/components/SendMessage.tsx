// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { useState } from 'react';
import { auth, db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const SendMessage = () => {
  const [message, setMessage] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    console.log(message.lengtn, ' : message: ', message);

    if (message.trim() === '') {
      alert('Please enter a message');
      return;
    }
    if (message.lengtn > 256) {
      console.log('%cPlease enter a message less 256 symbols', 'color: red');
      alert('Please enter a message less 256 symbols');
      return;
    }

    const currentUser = auth.currentUser;
    if (!currentUser) {
      alert('User not authenticated');
      return;
    }
    const { uid, displayName, photoURL } = currentUser;

    await addDoc(collection(db, 'messages'), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });

    setMessage('');
  };

  return (
    <form
      onSubmit={(e) => sendMessage(e)}
      className='send-message'
    >
      <label
        htmlFor='messageInput'
        hidden
      >
        Enter Message
      </label>
      <input
        id='messageInput'
        name='messageInput'
        type='text'
        className='form-input__input'
        placeholder='type message...'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type='submit'>Send</button>
    </form>
  );
};

export default SendMessage;
