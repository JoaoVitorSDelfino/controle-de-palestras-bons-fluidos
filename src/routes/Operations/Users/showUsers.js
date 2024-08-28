import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const ShowUsers = () => {
    const [usuarios, setUsuarios] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const usuariosPerPage = 10
    const navigate = useNavigate()

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/users/showUsers/');
                setUsuarios(response.data);
            } catch (error) {
                console.error("Erro ao buscar usuarios:", error)
            }
        };

        fetchUsuarios();
    }, [])

    const indexOfLastUsuarios = currentPage * usuariosPerPage
    const indexOfFirstUsuarios = indexOfLastUsuarios - usuariosPerPage
    const currentUsuarios = usuarios.slice(indexOfFirstUsuarios, indexOfLastUsuarios)

    const handleNextPage = () => {
        if (currentPage < Math.ceil(usuarios.length / usuariosPerPage)) {
            setCurrentPage(currentPage + 1)
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const redirect = () => {
        navigate('/users')
    }

    return (
        <div>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
                        <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>Login</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Senha</th>
                        <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>Função</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsuarios.map(usuario => (
                        <tr key={usuario.id}>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{usuario.id}</td>
                            <td style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>{usuario.login}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{usuario.senha}</td>
                            <td style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>{usuario.funcao}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
                <button onClick={handlePrevPage} disabled={currentPage === 1} style={{ padding: "10px 15px", backgroundColor: "#28A745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                    Página Anterior
                </button>
                <button onClick={handleNextPage} disabled={currentPage === Math.ceil(usuarios.length / usuariosPerPage)} style={{ margin:"10px", padding: "10px 15px", backgroundColor: "#28A745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                    Próxima Página
                </button>
                <button onClick={redirect} style={{ margin:"10px", padding: "10px 15px", backgroundColor: "red", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                    Voltar
                </button>
            </div>
        </div>
    )
}

export default ShowUsers