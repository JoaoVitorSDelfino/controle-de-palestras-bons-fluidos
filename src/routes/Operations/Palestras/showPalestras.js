import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const ShowPalestras = () => {
    const [palestras, setPalestras] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const palestrasPerPage = 10
    const navigate = useNavigate()

    useEffect(() => {
        const fetchPalestras = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/palestras/showPalestras/');
                setPalestras(response.data);
            } catch (error) {
                console.error("Erro ao buscar palestras:", error)
            }
        };

        fetchPalestras();
    }, [])

    const indexOfLastPalestra = currentPage * palestrasPerPage
    const indexOfFirstPalestra = indexOfLastPalestra - palestrasPerPage
    const currentPalestras = palestras.slice(indexOfFirstPalestra, indexOfLastPalestra)

    const handleNextPage = () => {
        if (currentPage < Math.ceil(palestras.length / palestrasPerPage)) {
            setCurrentPage(currentPage + 1)
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const redirect = () => {
        navigate('/palestras')
    }

    return (
        <div>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
                        <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>Título</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Descrição</th>
                        <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>Data</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Local</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPalestras.map(palestra => (
                        <tr key={palestra.id}>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{palestra.id}</td>
                            <td style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>{palestra.titulo}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{palestra.descricao}</td>
                            <td style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>{palestra.data}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{palestra.local}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
                <button onClick={handlePrevPage} disabled={currentPage === 1} style={{ padding: "10px 15px", backgroundColor: "#28A745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                    Página Anterior
                </button>
                <button onClick={handleNextPage} disabled={currentPage === Math.ceil(palestras.length / palestrasPerPage)} style={{ margin:"10px", padding: "10px 15px", backgroundColor: "#28A745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                    Próxima Página
                </button>
                <button onClick={redirect} style={{ margin:"10px", padding: "10px 15px", backgroundColor: "red", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                    Voltar
                </button>
            </div>
        </div>
    )
}

export default ShowPalestras