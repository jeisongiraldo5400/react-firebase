import { auth } from "../firebase/credenciales";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const registerUser = async (email, password)  => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
