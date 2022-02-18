import React, {useState} from 'react'; 
import Paciente from './Paciente';

const ListaPacientes = ({data}) => { 
    const [filtroFecha, setFiltroFecha] = useState('');
    
	return( 
        <div className="text-left mt-12 md:mt-0">
			<h2 className="font-black text-3xl text-center">Lista de Pacientes</h2>
            <p className="text-xl mt-5 mb-10 font-bold text-center" >Administra tus {""}
                <span className="text-indigo-600 font-bold">Pacientes</span>
            </p>
            <div>
                <div className="mx-4 flex justify-end">
                    <label className="font-bold uppercase text-gray-700">Filtrar por fecha: </label>
                    <input type="date" name="fechaFiltro" value={filtroFecha} onChange={(e) => setFiltroFecha(e.target.value)} />
                </div>
                {data.sort(function (a, b) {
                    if (a.hora > b.hora) {
                        return 1;
                    }
                    if (a.hora < b.hora) {
                        return -1;
                    }
                    // a must be equal to b
                    return 0;
                }).map(paciente => (
                    filtroFecha === paciente.fecha || filtroFecha === ''?
                        <Paciente data={paciente} key={paciente.fecha+paciente.nombre+paciente.hora}/>:
                        ''
                    ))}
            </div>
		</div>
	)
} 
export default ListaPacientes;
