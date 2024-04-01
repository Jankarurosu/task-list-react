import { useState } from "react"

export const Task = ({ item, onUpdate }) => {

    const [edit, setEdit] = useState(false);

    function TaskEdit() {

        const [newName, setNewName] = useState(item.taskName);
        const [newDetail, setNewDetail] = useState(item.taskDetail);


        function handleSubmitUpdate(e) {
            e.preventDefault();
        };

        function handleChangeUpdateName(e) {
            const updateName = e.target.value;

            setNewName(updateName);
        };

        function handleChangeUpdateDetail(e) {
            const updateDetail = e.target.value;

            setNewDetail(updateDetail);
        };

        function handleClickUpdate() {
            onUpdate(item.id, newName, newDetail);

            setEdit(false);
        }

        function handleClickNoUpdate() {
            setEdit(false);
        }

        return (
            <form onSubmit={handleSubmitUpdate}>
                <div className="relative flex w-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="p-6">
                        <input className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
                            type="text"
                            placeholder="Actualizar titulo"
                            onChange={handleChangeUpdateName}
                            value={newName}
                        />
                        <input className="block font-sans text-base font-light leading-relaxed text-inherit antialiased"
                            type="text"
                            placeholder="Actualizar detalle"
                            onChange={handleChangeUpdateDetail}
                            value={newDetail}
                        />
                    </div>
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
                            onClick={handleClickNoUpdate}
                        >
                            No actualizar
                        </button>
                    </div>

                </div>
            </form>
        );
    };

    function TaskElement() {
        return (
            <div className="relative flex w-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {item.taskName}
                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        {item.taskDetail}
                    </p>
                </div>
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
                    >
                        Eliminar
                    </button>
                </div>

            </div>
        );
    };

    return (
        <>
            {
                edit ? <TaskEdit /> : <TaskElement />
            }
        </>

    );
};


