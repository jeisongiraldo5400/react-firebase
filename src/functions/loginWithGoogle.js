import { auth } from "../firebase/credenciales";
import {
  GoogleAuthProvider,
  // signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";


export const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider);
    // const result = await signInWithPopup(auth, provider);
    // console.log(result);
  } catch(error) {
    console.log(error);
  }
}