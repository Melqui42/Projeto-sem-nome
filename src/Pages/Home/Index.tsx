import React from "react";

import { FiUser } from "react-icons/fi";
import { GiTeacher } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import {
  BsCart4,
  BsSearch,
  BsArrowRight,
  BsArrowUpRight,
} from "react-icons/bs";

import FoqueteIMG from "../../Assets/Img/Foguete.png";
import LoFiConceptPanaSVG from "../../Assets/Svg/Lo-fi concept-pana.svg";

import { listAboutMyWebSite, listInformationTeach } from "./Data";

import Button from "../../Components/Button/Index";

import Style from "./Style.module.scss";

export default function Home() {
  return (
    <div className={Style.App}>
      <header>
        <nav>
          <a href="#" className={Style.Logo}>
            <img src={FoqueteIMG} alt="" />
            <div>
              <h1>You Name</h1>
              <p>Rumo ao sucesso!!!👋</p>
            </div>
          </a>
          <menu>
            <ul className={Style.List}>
              <li className={Style.Item}>
                <button>
                  <BiCategory />
                </button>
              </li>
              <li className={Style.Item}>
                <div className={Style.InputSearch}>
                  <input type="text" name="" id="" />
                  <button>
                    <BsSearch />
                  </button>
                </div>
              </li>
            </ul>
            <ul className={Style.MainList}>
              <li className={Style.Item}>
                <button>
                  <BsCart4 />
                </button>
              </li>
              <li className={Style.Item}>
                <button>
                  <FiUser className={Style.Icon} />
                  ENTRAR
                </button>
              </li>
              <li className={Style.Item}>
                <button>CRIAR CONTA</button>
              </li>
            </ul>
          </menu>
        </nav>
      </header>
      <section className={Style.SectionHome}>
        <div className={Style.Center}>
          <article>
            <h1>
              Acelere cada etapa da sua carreira profissional com a You Name
            </h1>
            <p>
              Aqui você pode encontrar diversos cursos que vão impulsionar sua
              evolução profissional, você pode encontrar os cursos mais
              procurados no momento em português ou em outros idiomas.
            </p>
            <Button text="Comece agora!!!">
              <BsArrowRight />
            </Button>
          </article>
          <img src={LoFiConceptPanaSVG} alt="" />
        </div>
      </section>
      <section className={Style.SectionAboutMyWebSite}>
        <div className={Style.Center}>
          <article>
            <section className={Style.SectionContent}>
              <h1>Desenvolva uma habilidade nova de onde estiver.</h1>
              <p> Explore nosso ambiente seguro e cheio de funcionalidades.</p>
              <ul className={Style.List}>
                {listAboutMyWebSite.map((Item) => {
                  return (
                    <li className={Style.Item} key={Item.id}>
                      <div className={Style.Card}>
                        <img src={Item.img} alt="" />
                        <h1>{Item.title}</h1>
                        <p>{Item.text}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <Button text="Quero conhecer">
                <BsArrowUpRight />
              </Button>
            </section>

            <section className={Style.SectionTeach}>
              <div className={Style.SectionContentTeach}>
                <h1>Seu conhecimento tem valor.</h1>
                <p>
                  Transforme o que você sabe em um produto digital e venda para
                  milhões de pessoas ao redor do mundo.
                </p>
                <Button text="Ensinar na You Name">
                  <GiTeacher />
                </Button>
              </div>
              <ul className={Style.List}>
                {listInformationTeach.map((Item) => {
                  return (
                    <li className={Style.Item} key={Item.id}>
                      <div className={Style.Card}>
                        <img src={Item.img} alt="" />
                        <h1>{Item.title}</h1>
                        <p>{Item.text}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          </article>
        </div>
      </section>
    </div>
  );
}
