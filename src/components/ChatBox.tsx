// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { useState, useEffect, useRef } from 'react';
import Message from './Message';
import SendMessage from './SendMessage';
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from 'firebase/firestore';
import { db } from '../firebase';

/**
 * TODOs
 */

const Todos = () => (
  <>
    <h3>TODO: </h3>
    <ol>
      <li>
        <input
          type='checkbox'
          checked={true}
        />
        Display correct user avatar
      </li>
      <li>
        <input type='checkbox' />
        move sensitive data to .env file
      </li>
      <li>
        <input type='checkbox' />
        Add Limit (256) symbols
      </li>
      <li>
        <input type='checkbox' />
        Add Edit message
      </li>
      <li>
        <input type='checkbox' />
        Add Remove message
      </li>
      <li>
        <input type='checkbox' />
        Add All Users In chat
      </li>
      <li>
        <input type='checkbox' />
        Add User In chat now
      </li>
      <li>
        <input type='checkbox' />
        Add send to current user
      </li>
      <li>
        <input type='checkbox' />
        Add admin || moderator || user role
      </li>
      <li>
        <input type='checkbox' />
        Add add new user
      </li>
      <li>
        <input type='checkbox' />
        Add block user
      </li>
      <li>
        <input type='checkbox' />
        Add ban user
      </li>
      <li>
        <input type='checkbox' />
        Add bonus user
      </li>
      <li>
        <input type='checkbox' />
        Add custom stickers
      </li>
    </ol>
  </>
);

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(
      collection(db, 'messages'),
      orderBy('createdAt', 'desc'),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );

      setMessages(sortedMessages);
    });

    return () => unsubscribe;
  }, []);

  const onBubbleRemove = (m) => {
    console.log(m.id);
    console.log(m.uid);
  };

  return (
    <main className='chat-box'>
      <div className='messages-wrapper'>
        <Todos />
        {messages?.length === 0 ? (
          <p className='no-messages'>
            No messages yet. Start the conversation!
          </p>
        ) : (
          messages?.map((message) => (
            <Message
              key={message.uid + message.createdAt}
              message={message}
              onBubbleRemove={onBubbleRemove}
            />
          ))
        )}
      </div>
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </main>
  );
};

export default ChatBox;
