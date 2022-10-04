import { useState } from "react";

import { Link } from "react-router-dom";
import "./style.css"

const intialValues = { username: "", password: "" }

function Login() {

    const [values, setValues] = useState(intialValues);

    function handleChange(event) {
        const { value, name } = event.target;
        setValues({ ...values, [name]: value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(values);

        alert("Logado!"); 
    }

    return (

        <form className="formLogin" onSubmit={handleSubmit}>

            <h1>Login</h1>

            <div className="form__content">
                <div className="form__field">
                    <label htmlFor="">Apelido</label>
                    <input type="text" name="username" onChange={handleChange} placeholder="Digite seu apelido..." />
                </div>

                <div className="form__field">
                    <label htmlFor="">Senha</label>
                    <input type="password" name="password" onChange={handleChange} placeholder="Digite sua senha..." />
                </div>

                <div className="form__links">
                    <a href="#">Venha fofocar conosco</a>
                    <a href="#">Esqueceu a senha?</a>
                </div>

                <button className="form__button" type="submit">Acessar</button>

                <div className="form__call-to-action">
                    <p>Não tem uma conta?</p>
                    <Link to="../Register">Cadastre-se</Link>
                </div>


            </div>
        </form>

    );
}

export default Login;
