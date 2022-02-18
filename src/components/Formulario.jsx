import {useState} from 'react';

const Formulario = ({listData, setListaPacientes}) => {
	const [data, setData] = useState({
		nombre: '',
		correo: '',
		telefono: '',
		fecha: '',
        hora: '',
        nota:''
	});
    const [ mensageError, setMensajeError] = useState(false);
    const [ mensajeMostrar, setMensajeMostrar ] = useState('Faltan campos por llenar')
	
    const handleInput = (e) => {
		const {name, value} = e.target;
		setData(prev => ({...prev, [name]: value}));
	}

    const handleTime = (e) => {
        let fechaocupada = false;
        if(e.target.value > '07:59' && e.target.value < '16:00'){
            listData.forEach(element => {
                if(element.hora === e.target.value){
                    console.log("Gol")
                    fechaocupada = true;
                    setMensajeMostrar('Ya hay una cita para este fecha y hora.');
                    setMensajeError(true);
                } 
            });
            if(!fechaocupada){
                setMensajeError(false);                
                setData(prev => ({
                    ...prev,
                    hora: e.target.value
                }))
            }
        }
    }

	const eventSubmit = (e) => {
		e.preventDefault();
        setMensajeError(false);

        if([data.nombre, data.apellido, data.numero, data.fecha, data.hora].includes('')){
            setMensajeMostrar('Faltan campos por llenar.');
            setMensajeError(true);
        } else {

            setListaPacientes(prev => [...prev, data]);
            setData({
                nombre: '',
                correo: '',
                telefono: '',
                fecha: '',
                hora: '',
                nota:''
            })
        }
	} 
    return( 
        <div className="px-0 md:px-5 lg:px-10">
            <h2 className="font-black text-3xl">Seguimiento pacientes</h2>
            <p className="text-lg mt-5 font-bold mb-10">Añadir paciente y {''}
                <span className="text-indigo-700">Administración</span>
            </p>
            <form className="text-left bg-white shadow-md rounded-lg py-10 px-5" onSubmit={eventSubmit}>
                   <div className="mb-5">
                    <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">Nombre</label>
                    <input 
                        id="nombre"
                        type="text" 
                        placeholder="Nombre completo" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
                        name="nombre"
                        value={data.nombre}
                        onChange={handleInput}
                    />
                </div>
               <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input 
                        id="email"
                        type="email" 
                        placeholder="Nombre completo" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
                        name="correo"
                        value={data.correo}
                        onChange={handleInput}
                    />
                </div>
               <div className="mb-5">
                    <label htmlFor="telefono" className="block text-gray-700 uppercase font-bold">Telefono</label>
                    <input 
                        id="telefono"
                        type="tel" 
                        placeholder="Nombre completo" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
                        name="telefono"
                        value={data.telefono}
                        onChange={handleInput}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold">Fecha</label>
                    <input 
                        id="fecha"
                        type="date" 
                        placeholder="Nombre completo" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
                        name="fecha"
                        value={data.fecha}
                        onChange={handleInput}
                    />
                    <label htmlFor="hora" className="block text-gray-700 uppercase font-bold">Hora</label>
                    <input 
                        id="hora"
                        type="time" 
                        placeholder="Nombre completo" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
                        name="hora"
                        min="8:00" max="18:00"
                        value={data.hora}
                        onChange={handleTime}
                    />
                    <p className='text-gray-500 text-sm'>Los horarios permitidos son dese las 8:00 hasta las 16:00 hrs.</p>
                </div>

               <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                    <textarea 
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
                        placeholder="Nota"
                        name="nota"
                        value={data.nota}
                        onChange={handleInput}
                   />
                </div>
                {mensageError && (
                    <div className="mb-5 w-full p-5 bg-red-500 rounded">
                        <p className="text-center text-lg font-bold text-white">{mensajeMostrar}</p>
                    </div>
                )}
                <input type="submit"
                    className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 transition p-3 text-white font-bold uppercase w-full"
                    value="Agregar paciente"
                />
            </form>
        </div>
    )
} 

export default Formulario;
