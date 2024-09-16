import alunos from "../data/db_aluno";
import "../css/aluno.css"

const ListarAluno = () => {
    const renderizarAlunos = () => {
        return alunos.map((aluno) => {
            return (
                <tr key={aluno.id}>
                    <th scope="row">{aluno.id}</th>
                    <td>{aluno.nome}</td>
                    <td>{aluno.curso}</td>
                    <td>{aluno.ira}</td>
                    <td>
                        <button className="btn btn-secondary">Editar</button>
                        <button className="btn btn-danger">Excluir</button>
                    </td>
                </tr>
            );
        });
    };

    return (
        <div className="page-content">
            <h1>Listar aluno</h1>
            <div className="table-content">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Curso</th>
                            <th scope="col">ira</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>{renderizarAlunos()}</tbody>
                </table>
            </div>
        </div>
    );
}

export default ListarAluno;