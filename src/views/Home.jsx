/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

// Components
import { NavBar } from "../components/NavBar";
import { PendienteForm } from "../components/PendienteForm";

// Services
import { getAllPendiente } from "../functions/leerAllPendientes";
import { PendienteCard } from "../components/PendienteCard";
import { EditarPendienteModal } from "../components/EditarPendienteModal";

export const Home = ({ user }) => {
  const [allPendientes, setAllPendientes] = useState(null);
  const [selectedPendiente, setSelectedPendiente] = useState(null);

  const getPendientes = async () => {
    try {
      const response = await getAllPendiente();
      setAllPendientes(response);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getPendientes();
  }, []);

  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        <NavBar user={user} />
        <PendienteForm getPendientes={getPendientes} />

        <EditarPendienteModal pendiente={selectedPendiente} getPendientes={getPendientes}/>

        {allPendientes &&
          allPendientes.map((pendiente) => (
            <PendienteCard
              pendiente={pendiente}
              key={pendiente.contact}
              setSelectedPendiente={setSelectedPendiente}
              getPendientes={getPendientes}
            />
          ))}
      </div>
    </>
  );
};
