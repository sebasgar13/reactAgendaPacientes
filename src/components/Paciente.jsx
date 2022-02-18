const Paciente = (props) => {
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase"> nombre: {''}
                <span className="font-normal normal-case"> {props.data.nombre} </span>
            </p>
             <p className="font-bold mb-3 text-gray-700 uppercase"> teléfono: {''}
                <span className="font-normal normal-case"> {props.data.telefono} </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> correo: {''}
                <span className="font-normal normal-case"> {props.data.correo} </span>
            </p>
            <div className="grid grid-cols-2">
                <div>
                    <p className="font-bold mb-3 text-gray-700 uppercase"> Fecha: {''}
                        <span className="font-bold normal-case"> {props.data.fecha} </span>
                    </p>
                </div>
                <div>
                    <p className="font-bold mb-3 text-gray-700 uppercase"> Hora: {''}
                        <span className="font-bold normal-case"> {props.data.hora} </span>
                    </p>
                </div>
            </div>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Nota: {''}
                <span className="font-normal normal-case"> {props.data.nota} </span>
            </p>
        </div>
    )
}

export default Paciente
