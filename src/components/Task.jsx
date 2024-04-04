import { useState } from "react"

// Componente de tarea individual que muestra una tarea en modo de edición o visualización
export const Task = ({ item, onUpdate, onDelete }) => {

    // Estado para controlar si la tarea está en modo de edición o no
    const [edit, setEdit] = useState(false);

    // Componente de tarea en modo de edición
    function TaskEdit() {

        // Estados para el nombre y los detalles de la tarea en modo de edición
        const [newName, setNewName] = useState(item.taskName);
        const [newDetail, setNewDetail] = useState(item.taskDetail);

        // Función para manejar la presentación del formulario de actualización de la tarea
        function handleSubmitUpdate(e) {
            e.preventDefault();
        };

        // Función para manejar cambios en el nombre de la tarea en modo de edición
        function handleChangeUpdateName(e) {
            const updateName = e.target.value;

            setNewName(updateName);
        };

        // Función para manejar cambios en los detalles de la tarea en modo de edición
        function handleChangeUpdateDetail(e) {
            const updateDetail = e.target.value;

            setNewDetail(updateDetail);
        };

        // Función para manejar el clic en el botón de "Actualizar" en modo de edición
        function handleClickUpdate() {
            onUpdate(item.id, newName, newDetail);

            setEdit(false);
        }

        return (
            // Formulario para editar la tarea
            <form onSubmit={handleSubmitUpdate}>
                <div className="relative flex w-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    {/* Campos de entrada para el nombre y los detalles de la tarea */}
                    <div className="p-6">
                        <input className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
                            type="text"
                            placeholder="Actualizar titulo"
                            onChange={handleChangeUpdateName}
                            value={newName}
                        />
                        <textarea className="resize-none block font-sans text-base font-light leading-relaxed text-inherit antialiased"
                            rows="3"
                            cols="40"
                            type="text"
                            placeholder="Actualizar detalle"
                            onChange={handleChangeUpdateDetail}
                            value={newDetail}
                        />
                    </div>
                    {/* Botones para "Actualizar" y "No actualizar" la tarea */}
                    <div className="p-6 pt-0 flex">
                        <button
                            className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mr-2"
                            type="button"
                            data-ripple-light="true"
                            onClick={handleClickUpdate}
                        >
                            Actualizar
                        </button>

                        <button
                            className="select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                            onClick={() => setEdit(false)}
                        >
                            No actualizar
                        </button>
                    </div>

                </div>
            </form>
        );
    };

    // Componente de tarea en modo de visualización
    function TaskElement() {
        return (
            // Presentación de la tarea en modo de visualización
            <div className="relative flex w-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {item.taskName}
                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        {item.taskDetail}
                    </p>
                </div>
                {/* Botones para "Editar" y "Eliminar" la tarea */}
                <div className="p-6 pt-0 flex">
                    <button
                        className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mr-2"
                        type="button"
                        data-ripple-light="true"
                        onClick={() => setEdit(true)}
                    >
                        Editar
                    </button>

                    <button
                        className="select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                        onClick={(e) => onDelete(item.id)}
                    >
                        Eliminar
                    </button>
                </div>

            </div>
        );
    };

    return (
        // Renderiza el componente de edición o visualización según el estado
        <>
            {
                edit ? <TaskEdit /> : <TaskElement />
            }
        </>

    );
};


