import React from "react";
//imgs
import Chat from "../../assets/img/chat.svg";
// import Pesquisa from "../img/pesquisa.svg";
import Grup from "../../assets/img/grup.svg";
import Coffe from "../../assets/img/coffe.svg";
import Photo from "../../assets/img/photo.svg";
import Logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./styles.css";

const NavBar = () => {
  const [search, setSearch] = useState();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  console.log(search);

  const submit = (e) => {
    e.preventDefault();
    console.log("enviando form");
    console.log(search);
  };

  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link to={"/"}>
          <img src={Logo} alt="" />
        </Link>
      </div>

      <form onSubmit={submit} className="nav__search-form">
        <input
          type="text"
          name="search"
          placeholder="Pesquisar..."
          onChange={handleSearch}
          value={search}
        />

        <button>Pesquisar</button>
      </form>

      <div className="nav__menu">
        <Link>
          <img src={Chat} alt="" />
        </Link>
        <Link>
          <img src={Grup} alt="" />
        </Link>
        <Link>
          <img src={Coffe} alt="" />
        </Link>
      </div>
      <div className="nav__perfil">
        <img src={Photo} alt="" />
      </div>
    </nav>
  );
};

export default NavBar;
