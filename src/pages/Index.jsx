import { useLoaderData } from "react-router-dom"
import Cliente from "../components/Cliente";

export function loader() {
  const clientes = [
    {
        id: 1,
        nombre: 'Juan',
        telefono: 102013313,
        email: "juan@jhesus.com",
        empresa: 'Empresa Jhechus'
    },
    {
        id: 2,
        nombre: 'Karen',
        telefono: 138198313,
        email: "karen@jhesus.com",
        empresa: 'Empresa Jhechus'
    },
    {
        id: 3,
        nombre: 'Josue',
        telefono: 31983913,
        email: "josue@jhesus.com",
        empresa: 'Empresa Jhechus'
    },
    {
        id: 4,
        nombre: 'Miguel',
        telefono: 319381983,
        email: "miguel@jhesus.com",
        empresa: 'Empresa Jhechus'
    },
    {
        id: 5,
        nombre: 'Pedro',
        telefono: 1398198938,
        email: "pedro@jhesus.com",
        empresa: 'Empresa Jhechus'
    },
];

  return clientes
}

function Index() {

  const clientes = useLoaderData()

  

  return (
    <>
      <h1 className=' font-black text-4xl text-blue-900 '> Clientes </h1>
      <p className=' mt-3 '> Administra tus clientes </p>


      {clientes.length ? (
        <table className=" w-full bg-white shadow mt-5 table-auto">
          <thead className=" bg-blue-800 text-white">
            <tr>
              <th className=" p-2"> Cliente </th>
              <th className=" p-2"> Contacto </th>
              <th className=" p-2"> Acciones </th>
            </tr>
          </thead>

            <tbody>
              {clientes.map( cliente => (
                <Cliente 
                  cliente={cliente}
                  key={cliente.id}
                />
              ))}
            </tbody>

          
        </table>
      ) : (
        <p classname='text-center mt-10'> Aun no hay clientes </p>
      )}
    </>
  )
}

export default Index
