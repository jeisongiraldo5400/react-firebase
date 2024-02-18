/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { editPendiente } from "../functions/editPendiente";

export const EditarPendienteModal = ({ pendiente, getPendientes }) => {
  const [pendienteEditar, setPendienteEditar] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await editPendiente(pendiente.id, pendienteEditar);

      if(response) {
        getPendientes();
        closeMOdal();
      }
  
    } catch (error) {
      console.log(error);
    }
  };

  const closeMOdal = () => {
    document.getElementById("modal-editar-pendiente").close();
  };

  useEffect(() => {
    setPendienteEditar({
      priority: pendiente?.priority,
      description: pendiente?.description,
      contact: pendiente?.contact,
    });
  }, [pendiente]);

  return (
    <>
      <dialog id="modal-editar-pendiente">
        <div className="flex justify-end p-4 cursor-pointer border">
          <span className="border p-2 rounded-md" onClick={closeMOdal}>
            x
          </span>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-10 w-full p-10 items-center"
          >
            <h1 className="font-bold text-3xl mb-4">Task</h1>
            <label className="flex flex-col gap-2 w-full">
              Prioridad
              <select
                id="priority"
                className="h-12 cursor-pointer"
                value={pendienteEditar?.priority}
                onChange={(e) => {
                  setPendienteEditar({
                    ...pendienteEditar,
                    priority: e.target.value,
                  });
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <label className="flex flex-col ga-2">
              Descripcion
              <input
                type="text"
                id="description"
                className="h-12 border"
                value={pendienteEditar?.description}
                onChange={(e) => {
                  setPendienteEditar({
                    ...pendienteEditar,
                    description: e.target.value,
                  });
                }}
              />
            </label>
            <label className="flex flex-col gap-2">
              Contacto
              <input
                type="email"
                id="contact"
                className="h-12 border"
                value={pendienteEditar?.contact}
                onChange={(e) => {
                  setPendienteEditar({
                    ...pendienteEditar,
                    contact: e.target.value,
                  });
                }}
              />
            </label>
            <button className="p-4 w-full bg-blue-500 mt-4 text-white rounded-md">
              Editar
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};
