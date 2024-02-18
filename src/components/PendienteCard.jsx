/* eslint-disable react/prop-types */

// Services
import { eliminarPendiente } from "../functions/eliminarPendiente";

export const PendienteCard = ({
  pendiente,
  setSelectedPendiente,
  getPendientes,
}) => {
  const mostrarModal = () => {
    document.getElementById("modal-editar-pendiente").showModal();
    setSelectedPendiente(pendiente);
  };

  const deletePendientes = async () => {
    if (!pendiente?.id) return;

    const response = await eliminarPendiente(pendiente?.id);

    if (response) {
      getPendientes();
    }
  };

  return (
    <>
      <div className="flex flex-row justify-around border-2 border-slate-500 p-5 shadow-md my-5 m-10">
        <div>
          <h3>Priority</h3>
          <p>{pendiente.priority}</p>
        </div>

        <div>
          <h3>Description</h3>
          <p>{pendiente.description}</p>
        </div>

        <div>
          <h3>Contact</h3>
          <p>{pendiente.contact}</p>
        </div>

        <div>
          <button
            className="bg-green-500 text-white font-bold p-4 rounded-md"
            onClick={mostrarModal}
          >
            Editar
          </button>
        </div>

        <div>
          <button
            className="bg-red-400 text-white font-bold p-4 rounded-md"
            onClick={deletePendientes}
          >
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
};
