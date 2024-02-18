import { dbConnection } from "../firebase/credenciales";
import { deleteDoc, collection, doc } from "firebase/firestore";

export const eliminarPendiente = async (id) => {
  try {
    
    const collectionRef = collection(dbConnection, "pendientes");
    const docuRef = doc(collectionRef, id);
    await deleteDoc(docuRef);

    return {
      success: true
    };

  } catch (error) {
    console.log(error);
  }
};
