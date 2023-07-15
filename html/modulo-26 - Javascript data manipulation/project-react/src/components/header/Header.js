import React from "react";
import "./Header.css";

export default function Header() {

  return (
    <div className="header">
      <h1 id="home">Concessionária</h1>
      <nav class="nav">
        <a class="item" href="#home">Home</a>
        <a class="item" href="#novoseusado">Novos e Usados</a>
        <a class="item" href="#revisao">Revisão</a>
        <a class="item" href="#produtos">Produtos</a>
      </nav>
    </div>
  );
}