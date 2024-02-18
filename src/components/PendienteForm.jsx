/* eslint-disable react/prop-types */
// Services
import { crearPendiente } from "../functions/crearPendiente";

export const PendienteForm = ({getPendientes}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const priority = e.target.priority.value;
    const description = e.target.description.value;
    const contact = e.target.contact.value;

    const data = {
      priority,
      description,
      contact,
    };

    await crearPendiente(data);

    e.target.priority.value =
      e.target.description.value =
      e.target.contact.value =
        "";

    getPendientes();
  };

  return (
    <div className="flex flex-row gap-3 justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-row gap-10 w-full p-10 items-center">
        <h1 className="font-bold text-3xl mb-4">Task</h1>
        <label className="flex flex-col gap-2">
          Prioridad
          <select id="priority" className="h-12 cursor-pointer">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
        <label className="flex flex-col ga-2">
          Descripcion
          <input type="text" id="description" className="h-12 border" />
        </label>
        <label className="flex flex-col gap-2">
          Contacto
          <input type="email" id="contact" className="h-12 border" />
        </label>
        <button className="p-4 w-full bg-blue-500 mt-4 text-white rounded-md">
          Agregar
        </button>
      </form>
    </div>
  );
};
