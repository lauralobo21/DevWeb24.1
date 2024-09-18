import axios from "axios";

const url = "http://localhost:3003/aluno/"

class AlunoService {
  //GET SERVICES
  static getAlunosAxiosThenCatch = (callback) => {
    axios
      .get(url+"listar")
      .then((response) => {
        //console.log(response.data)
        callback(response.data);
      })
      .catch((error) => console.log(error));
  };

  static getAlunosAxiosAsyncAwait = async (callback) => {
    try {
      const response = await axios.get(url+"listar");
      callback(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  static getAlunosFetchThenCatch = (callback) => {
    fetch(url+"listar")
      .then((response) => response.json())
      .then((json) => callback(json))
      .catch((error) => console.log(error));
  };

  static getAlunosFetchAsyncAwait = async (callback) => {
    try {
      const response = await fetch(url+"listar");
      const json = await response.json();
      callback(json);
    } catch (error) {
      console.log(error);
    }
  };

  static getAlunoById = (id, callback) => {
    axios  
      .get(`http://localhost:3003/aluno/recuperar/${id}`)
      .then((response) => {
        //console.log(response)
        callback(response.data);
      })
      .catch((error) => console.log(error));
  };

  //POST SERVICES
  static postAlunoAxiosThenCatch = (aluno, callback) => {
    axios
      .post(url+"criar", aluno)
      .then((response) => {
        callback(response);
      })
      .catch((error) => console.log(error));
  };

  static postAlunoFetchThenCatch = (aluno, callback) => {
    fetch(url+"criar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(aluno),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => callback(json))
      .catch((error) => console.log(error));
  };

  // PUT SERVICES

  static updateAluno = (id, alunoEditado, callback) => {
    axios
      .put(`http://localhost:3003/aluno/atualizar/${id}`, alunoEditado)
      .then((response) => {
        //console.log(response)
        callback(response)
      })
      .catch((error) => console.log(error));
  };

  // DELETE SERVICES

  static deleteAluno = (id, callback) => {
    axios
      .delete(`http://localhost:3003/aluno/apagar/${id}`)
      .then(response => {
        alert("Aluno apagado!")
        console.log(response)
        callback("ok!")
      })
      .catch( error => console.log(error))
  }
}

export default AlunoService;