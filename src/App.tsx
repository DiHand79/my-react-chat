// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import ChatBox from './components/ChatBox';

import './scss/App.scss';

const todos = [
  {
    id: 1,
    uri: 'https://firebase.google.com/docs/auth/web/redirect-best-practices?hl=en&authuser=0&_gl=1*jmoun9*_ga*MTAyNzY2NjU4Ny4xNzM3NzUxMDQy*_ga_CW55HF8NVT*MTczNzc1NDM2My4yLjEuMTczNzc1Njc0OC42MC4wLjA.',
    title: 'Redirect update doc',
  },
  {
    id: 2,
    uri: 'https://developers.google.com/privacy-sandbox/cookies/prepare/overview?hl=ru',
    title: 'New Chrome Interface without thirds cookie',
  },
  {
    id: 3,
    uri: 'https://www.rankya.com/google/chrome-without-third-party-cookies/',
    title: 'Solution and DOCs',
  },
];

const ItemTodo = ({ todo }) => {
  return (
    <details>
      <summary>{todo.title}</summary>
      <p>
        <a
          target='_blank'
          href={todo.uri}
        >
          {todo.title}
        </a>
      </p>
    </details>
  );
};

function App() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className='App'>
      <NavBar />
      {loading ? <p>Loading...</p> : null}
      {error ? <p>Error: {JSON.stringify(error)}</p> : null}

      <details>
        <summary>HELPERS:</summary>
        {todos.map((todo) => (
          <ItemTodo
            key={todo.id}
            todo={todo}
          />
        ))}
      </details>

      {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </div>
  );
}

export default App;
