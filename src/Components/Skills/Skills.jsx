import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
import rect from "/react.png";
import redux from "/redux.svg";
import next from "/next.png";
import html from "/html.png";
import css from "/css.png";
import js from "/js.png";
import bootstrap from "/bootstrap.png";
import material from "/material.png";
import Node from "/nodejs.png";
import Java from "/java.png";
import mysql from "/mysql.png";
import Firebase from "/firebase.svg";
import Express from "/express.png";
import Mongo from "/monodb.png";
import c from "/C.jpeg";
import redis from "/redis.png";
import shadcn from "/shadcn.png";

const Skills = () => {
  AOS.init();

  return (
    <>
      <div className="mainskills">
        <div className="skillstitle" data-aos="fade-down">
          <h2> Skills</h2>
          <p>
            Here are some of my skills on which I have been working on for the
            past 3 years.{" "}
          </p>
        </div>
        <div className="skillsdiv">
          <div className="frontend" data-aos="fade-right">
            <div className="frontendtitle">
              <h2> Frontend </h2>
            </div>
            <div className="frontenditems">
              <div className="react">
                <img src={rect} alt="" className="reactimg" />
                React JS
              </div>
              <div className="react">
                <img src={redux} alt="" className="reactimg" />
                Redux
              </div>
              <div className="react">
                <img src={next} alt="" className="reactimg" />
                Next JS
              </div>
              <div className="react">
                <img src={html} alt="" className="reactimg" />
                Html
              </div>
              <div className="react">
                <img src={css} alt="" className="reactimg" />
                Css
              </div>
              <div className="react">
                <img src={js} alt="" className="reactimg" />
                Javascript
              </div>
              <div className="react">
                <img src={bootstrap} alt="" className="reactimg" />
                Bootstrap
              </div>
              <div className="react">
                <img src={material} alt="" className="reactimg" />
                Material UI
              </div>
            </div>
          </div>

          <div className="frontend" data-aos="fade-left">
            <div className="frontendtitle">
              <h2> Backend</h2>
            </div>
            <div className="frontenditems">
              <div className="react">
                <img src={Node} alt="" className="reactimg" />
                Node JS
              </div>
              <div className="react">
                <img src={Express} alt="" className="reactimg" />
                Express JS
              </div>
              <div className="react">
                <img src={Mongo} alt="" className="reactimg" />
                Mongo DB
              </div>
              <div className="react">
                <img src={redis} alt="" className="reactimg" />
                Redis
              </div>
              <div className="react">
                <img src={Firebase} alt="" className="reactimg" />
                Firebase
              </div>
              <div className="react">
                <img src={Java} alt="" className="reactimg" />
                Java
              </div>
              <div className="react">
                <img src={mysql} alt="" className="reactimg" />
                Mysql
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
