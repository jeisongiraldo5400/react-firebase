import { auth } from "../firebase/credenciales";
import { signOut } from 'firebase/auth';

export const logout = async () =>  {
  try {
    await signOut(auth);
  } catch(error) {
    console.log(error);
  }
}