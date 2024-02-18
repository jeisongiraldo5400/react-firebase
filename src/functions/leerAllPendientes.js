import { dbConnection } from "../firebase/credenciales";
import { collection, getDocs } from "firebase/firestore";

export const getAllPendiente = async () => {
  try {
    const collectionRef = collection(dbConnection, "pendientes");
    // Puede recibir una collecion o una query /
    const data = await getDocs(collectionRef);

    const docsList = data.docs.map((d) => {
      return {
        id: d.id,
        ...d.data(),
      };
    });

    return docsList;
  } catch (error) {
    console.log(error);
  }
};
