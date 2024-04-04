import { useState } from "react";
import { Task } from "./Task";

// Componente principal de la aplicación de lista de tareas
export const TaskListApp = () => {


    // Estados para el nombre de la tarea, detalles de la tarea y la lista de tareas
    const [taskName, setTaskName] = useState("");
    const [taskDetail, setTaskDetail] = useState("");
    const [task, setTask] = useState([]);

    // Función para limpiar los campos de entrada
    function clean() {
        setTaskName("");
        setTaskDetail("");
    }

    // Función para manejar cambios en el nombre de la tarea
    function handleChangeName(e) {
        const valueName = e.target.value;

        setTaskName(valueName);

    };

    // Función para manejar cambios en los detalles de la tarea
    function handleChangeDetail(e) {
        const valueDetail = e.target.value;

        setTaskDetail(valueDetail);
    };

    // Función para manejar la presentación del formulario
    function handleSubmit(e) {
        e.preventDefault();

        // Crear una nueva tarea con los datos ingresados
        const newTask = {
            // Generar un ID único para la tarea
            id: crypto.randomUUID(),
            taskName: taskName,
            taskDetail: taskDetail,
            completed: false
        };

        // Agregar la nueva tarea al principio de la lista de tareas
        const temp = [...task];
        temp.unshift(newTask);
        setTask(temp);

        // Limpiar los campos de entrada después de agregar la tarea
        clean()
    };

    // Función para manejar la actualización de una tarea
    function handleUpdate(id, updateName, updateDetail) {
        const temp = [...task];
        const item = temp.find((item) => item.id === id);
        item.taskName = updateName;
        item.taskDetail = updateDetail;

        setTask(temp);
    };

    // Función para manejar la eliminación de una tarea
    function handleDelete(id) {
        const temp = task.filter((item) => item.id !== id);

        setTask(temp);
    };

    return (
        <>
            {/* Encabezado de la aplicación */}
            <div class="py-5 text-center">
                <h1 class="text-4xl font-bold">¡Organiza tu día con la App de Tareas!</h1>
                <p class="text-lg mt-2">Desarrollado por Jankarurosu</p>
            </div>

            {/* Formulario para agregar tareas */}
            <div className="flex items-center justify-center p-5">
                <div className="mx-auto w-full max-w-[1250px]">
                    <form onSubmit={handleSubmit}>
                        {/* Campo para el nombre de la tarea */}
                        <div className="mb-5">
                            <label
                                for="title"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Titulo de la tarea
                            </label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Hacer las tareas del hogar"
                                value={taskName}
                                onChange={handleChangeName}
                                required
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        {/* Campo para los detalles de la tarea */}
                        <div className="mb-5">
                            <label
                                for="description"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Detalle de la tarea
                            </label>
                            <textarea
                                rows="4"
                                name="description"
                                id="description"
                                placeholder="Lavar la ropa y hacer la cena"
                                value={taskDetail}
                                onChange={handleChangeDetail}
                                required
                                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea >
                        </div>
                        {/* Botón para agregar una tarea */}
                        <div>
                            <input
                                className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="submit"
                                data-ripple-light="true"
                                value="Agregar"
                            >
                            </input>
                        </div>
                    </form>

                    {/* Lista de tareas */}
                    <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
                        {/* Mapeo de cada tarea en la lista de tareas */}
                        {

                            task.map((item) => (
                                <Task key={item.id} item={item} onUpdate={handleUpdate}
                                    onDelete={handleDelete}
                                />
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    );
};


