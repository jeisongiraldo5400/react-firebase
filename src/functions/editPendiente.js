import { dbConnection } from "../firebase/credenciales";

import { 
  collection, 
  doc, 
  setDoc, 
  //updateDoc 
} from "firebase/firestore";

export const editPendiente = async (id, data) => {
  try {
    const collectionRef = collection(dbConnection, "pendientes");
    const docuRef = doc(collectionRef, id);
    await setDoc(docuRef, data, { merge: true });
    //await updateDoc(docuRef, data);

    return { success: true };
    
  } catch (error) {
    console.log(error);
  }
};
