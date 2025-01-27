// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Message = ({ message, onBubbleRemove }) => {
  const [user] = useAuthState(auth);
  const createdDate = new Date(message?.createdAt?.seconds);

  return (
    <div className={`chat-bubble ${message.uid === user.uid ? 'right' : ''}`}>
      <img
        className='chat-bubble__left'
        src='message.avatar'
        alt='user avatar'
      />
      <div className='chat-bubble__right'>
        <p className='user-name'>{message.name}</p>
        <p className='user-message'>{message.text}</p>
        {createdDate ? (
          <>
            <p className='message-time'>{`${createdDate?.toDateString()} : ${createdDate?.toLocaleTimeString()}`}</p>
            <p className='message-time'>{createdDate?.toDateString()}</p>
            <p className='message-time'>{createdDate?.toTimeString()}</p>
          </>
        ) : (
          ''
        )}
      </div>
      <div
        className='chat-bubble__remove'
        onClick={() => onBubbleRemove(message)}
      >
        X
      </div>
    </div>
  );
};

export default Message;
