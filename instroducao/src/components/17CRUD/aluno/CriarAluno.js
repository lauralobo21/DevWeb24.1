import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/aluno.css"

const CriarAluno = () => {
    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [ira, setIra] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(
            "Nome: " + nome + "\nCurso: " + curso + "\nIra: " + ira
        );
    };

    return (
        <div className="page-content">
            <h1>Criar Aluno</h1>
            <div className="form-container">
                <form className="form-content" onSubmit={handleSubmit}>
                    <div className="m-3">
                        <label htmlFor="nome" className="form-label">
                            Nome
                        </label>
                        <input
                            type="text"
                            name="nome"
                            className="form-control"
                            ira="nome"
                            onChange={(event) => setNome(event.target.value)}
                        />
                    </div>
                    
                    <div className="m-3">
                        <label htmlFor="ira" className="form-label">
                            Curso
                        </label>
                        <select
                            value={curso}
                            className="form-select"
                            curso="curso"
                            onChange={(event) =>
                                setCurso(event.target.value)
                            }
                        >
                            <option value="CC">CC</option>
                            <option value="EC">EC</option>
                            <option value="DD">DD</option>
                            <option value="SI">SI</option>
                            <option value="ES">ES</option>
                        </select>
                    </div>
                    <div className="m-3">
                        <label htmlFor="ira" className="form-label">
                            IRA
                        </label>
                        <input
                            type="text"
                            name="ira"
                            className="form-control"
                            ira="ira"
                            onChange={(event) => setIra(event.target.value)}
                        />
                    </div>
                    <div className="div-button-submit">
                        <button className="btn btn-primary" type="submit">
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CriarAluno