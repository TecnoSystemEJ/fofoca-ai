import imgLogo from "../../assets/logo.png";
import "./style.css";

function Login() {
    return (
        <main className="main">
            <div className="main__left">
                <img src={imgLogo} />
            </div>
            <div className="main__right">
                <form className="form">

                    <h1>Login</h1>

                    <div className="form__content">
                        <div className="form__field">
                            <label htmlFor="">Apelido</label>
                            <input type="text" placeholder="Digite seu apelido..."/>
                        </div>

                        <div className="form__field">
                            <label htmlFor="">Senha</label>
                            <input type="password" placeholder="Digite sua senha..."/>
                        </div>

                        <div className="form__links">
                            <a href="#">Venha fofocar conosco</a>
                            <a href="#">Esqueceu a senha?</a>
                        </div>

                        <button className="form__button" type="submit">Acessar</button>

                        <div className="form__call-to-action">
                            <p>Não tem uma conta?</p>
                            <a href="#">Cadastre-se</a>
                        </div>
                        

                    </div>
                </form>
            </div>
        </main>
    );
}

export default Login;
