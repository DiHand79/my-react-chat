import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import GoogleSignin from '../img/btn_google_signin_dark_pressed_web.png';
import ReactLogo from '../img/react.svg';
import { auth } from '../firebase';

const Welcome = () => {
  const googleSignIn = async () => {
    return await signInWithPopup(auth, new GoogleAuthProvider());
  };

  return (
    <main className='welcome'>
      <h2>Welcome to React Chat.</h2>
      <img
        src={ReactLogo}
        alt='ReactJs logo'
        width={50}
        height={50}
      />
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <button className='sign-in'>
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt='sign in with google'
          // type='button'
        />
      </button>
    </main>
  );
};

export default Welcome;
