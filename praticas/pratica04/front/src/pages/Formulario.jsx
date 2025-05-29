import { useState } from "react";
import InputNome from "../components/InputNome.jsx";
import InputTelefone from "../components/InputTelefone.jsx";
import { useEffect } from "react";
function Fomulario(props) {
    const [nome, setNome] = useState("");
    const [erroNome, setErroNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [erroTelefone, setErroTelefone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nome) {
            setErroNome("Nome é obrigatório");
        }
        if (!telefone) {
            setErroTelefone("Telefone é obrigatório");
        }
        if (nome && telefone) {
            props.onSubmit({ nome, telefone });
            setNome("");
            setTelefone("");
            setErroNome("");
            setErroTelefone("");
        }
    }

    useEffect(() => {
        if (props.valores) {
            setNome(props.valores.nome || "");
            setTelefone(props.valores.telefone || "");
        }
    }, [props.valores]);




    return (
        <form onSubmit={handleSubmit}>
            <InputNome valor={nome} onChange={(e) => setNome(e.target.value)}
                erro={erroNome} />
            <InputTelefone valor={telefone} onChange={(e) => setTelefone(e.target.value)}
                erro={erroTelefone} />
            <button type="submit">Salvar</button>
        </form>
    );
}

export default Fomulario;