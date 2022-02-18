import React, {useState, useEffect} from 'react'; 
import Header from './Header';
import Formulario from './Formulario';
import ListaPacientes from './ListaPacientes';

const Contenedor = () => { 
    const [listaPacientes, setListaPacientes] = useState([]);

    useEffect(() => {
        const listaLocal = localStorage.getItem('lista');
        if(listaLocal.length > 0){
            setListaPacientes(JSON.parse(listaLocal));
        }
    },[])

    useEffect(() => {
        localStorage.setItem('lista', JSON.stringify(listaPacientes))
    },[listaPacientes])

    return(
        <div className="w-full min-h-full bg-gray-100">
	        <Header /> 
            <div className="grid grid-cols-1 md:grid-cols-2 mt-12 mb-6">
                <Formulario listData={listaPacientes} setListaPacientes={setListaPacientes}/>
                <ListaPacientes data={listaPacientes}/>
            </div>
        </div>
    )
} 
export default Contenedor;
