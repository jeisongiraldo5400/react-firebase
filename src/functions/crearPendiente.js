import { dbConnection } from "../firebase/credenciales";
import { collection, addDoc } from "firebase/firestore";

export const crearPendiente = async (data) => {
  try {
    // Crear una coleccion
    const collectionRef = collection(dbConnection, "pendientes");
    const pendienteId = await addDoc(collectionRef, data);
    return pendienteId;
  } catch (error) {
    console.log(error);
  }
};
