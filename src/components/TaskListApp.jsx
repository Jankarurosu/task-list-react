import { useState } from "react";
import { Task } from "./Task";

export const TaskListApp = () => {

    const [taskName, setTaskName] = useState("");
    const [taskDetail, setTaskDetail] = useState("");
    const [task, setTask] = useState([]);

    function clean() {
        setTaskName("");
        setTaskDetail("");
    }

    function handleChangeName(e) {
        const valueName = e.target.value;

        setTaskName(valueName);

    };

    function handleChangeDetail(e) {
        const valueDetail = e.target.value;

        setTaskDetail(valueDetail);
    };

    function handleSubmit(e) {
        e.preventDefault();

        const newTask = {
            id: crypto.randomUUID(),
            taskName: taskName,
            taskDetail: taskDetail,
            completed: false
        };

        const temp = [...task];
        temp.unshift(newTask);

        setTask(temp);
        clean()
    };

    function handleUpdate(id, updateName, updateDetail) {
        const temp = [...task];
        const item = temp.find((item) => item.id === id);
        item.taskName = updateName;
        item.taskDetail = updateDetail;

        setTask(temp);
    }

    return (
        <>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[1250px]">
                    <form onSubmit={handleSubmit}>
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
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
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
                                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea >
                        </div>
                        <div>
                            <input
                                className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="submit"
                                data-ripple-light="true"
                                value="Agregar"
                                onClick={handleSubmit}
                            >
                            </input>
                        </div>
                    </form>

                    <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
                        {
                            task.map((item) => (
                                <Task key={item.id} item={item} onUpdate={handleUpdate} />
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    );
};


