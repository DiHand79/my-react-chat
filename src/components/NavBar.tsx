import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import GoogleSignin from '../img/btn_google_signin_dark_pressed_web.png';

const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = async () => {
    return await signInWithPopup(auth, new GoogleAuthProvider());
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className='nav-bar'>
      <h1>React Chat</h1>
      {user ? (
        <button
          onClick={signOut}
          className='sign-out'
          type='button'
        >
          Sign Out
        </button>
      ) : (
        <button className='sign-in'>
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt='sign in with google'
            // type='button'
          />
        </button>
      )}
    </nav>
  );
};

export default NavBar;
