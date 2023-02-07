import Image from "next/image";
import React from "react";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header_item}>
        <ul>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">О нас</a>
          </li>
        </ul>
      </div>

      <div>
        <Image src=''/>
      </div>

      <div className={s.header_item}>
        <ul>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">О нас</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
