import { useState } from "react";
import { Link} from "react-router-dom";
import "./style.css";

const initialValues = {username:"", email:"", password:""}

function Register() {

    const [values, setValues] = useState(initialValues);


    function handleChange(event) {
        const { value, name } = event.target;
        setValues({ ...values, [name]: value });
    }

    function registerUser(e) {
        e.preventDefault();
        console.log('Dados:', values);

        alert("Cadastro realizado com sucesso!"); 
    }

    return (
        <form className="formRegister" onSubmit={registerUser}>

            <h1>Cadastro</h1>

            <div className="form__content">
                <div className="form__field">
                    <label htmlFor="">Apelido</label>
                    <input
                        type="text"
                        value={values.username}
                        onChange={handleChange}
                        name="username"
                        placeholder="Digite seu apelido..."
                    />
                </div>

                <div className="form__field">
                    <label htmlFor="">E-mail</label>
                    <input
                        type="email"
                        value={values.email}
                        name="email"
                        onChange={handleChange}
                        placeholder="Digite seu email..."
                    />
                </div>

                <div className="form__field">
                    <label htmlFor="">Senha</label>
                    <input
                        type="password"
                        value={values.password}
                        name="password"
                        onChange={handleChange}
                        placeholder="Digite sua senha..." />
                </div>

                <button className="form__button" type="submit">Cadastre-se</button>

                <div className="form__call-to-action">
                    <p>Já tem uma conta?</p>
                    <Link to="../Login">Acessar</Link>
                </div>


            </div>
        </form>
    );
}


export default Register;

// const [username, setValuesUsername] = useState("");

// function registerUser(event){
//     event.preventDefault();
//     console.log("Apelido:", username);
// }

// function handleChangeUsername(event){
//     const {value} = event.target;
//     setValuesUsername(value);
//}