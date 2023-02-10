import Layout from "../components/Layout";
import Link from "next/link";
import { useState } from "react";

import { skills, experiences, projects } from "../profile";

const Index = () => {
  const [Alerta, setAlart] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    setAlart(true);
  };

  const Aler = () => {
    if (Alerta) {
      return (
        <div className="" style={{width:'100%'}}>
          <div 
          className="card-header text-center p-1 m-2 alert-info"
           role="alert"
           onClick={() => setAlart(false)}
           >
          <h2 className="card-text" >829-902-9330</h2>
        </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <Layout>
      {/* Header Card */}
      <header className="row">
        <Aler />
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="/moises.jpeg"
                  alt="Moises justo"
                  className="img-fluid"
                  width="200"
                />
              </div>
              <div className="col-md-8">
                <h1>Moises Justo</h1>
                <h3>Full Stack Developer</h3>
                <p>
                  Hola, me presento como tu mejor opción confiable y sincera,
                  manejo todo lo que esta en mi skills, dándote la confianza de
                  mis años en experiencia en el mercado programando.
                  <br />
                  <br />
                  Contáctame no te arrepentirás de mi, te lo prometo.
                </p>
                
                  <button className="btn btn-outline-light" onClick={handleClick}>Contratarme</button>
                
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Second section */}

      <section className="row">
        <div className="col-md-4 py-2">
          <div className="card bg-light animate__animated animate__fadeInLeft">
            <div className="card-body">
              <h1>Skills</h1>

              {/* Skill Progress  */}
              {skills.map(({ skill, percentage }, i) => (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress ">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-8 py-2">
          {/* Experience */}
          <div className="card bg-light animate__animated animate__fadeInRight">
            <div className="card-body">
              <h1>Experience</h1>

              <ul>
                {/* List Item Experience */}
                {experiences.map(({ title, from, to, description }, index) => (
                  <li key={index}>
                    <h3>{title}</h3>
                    <h5>
                      {from} {to ? `- ${to}` : "- current"}
                    </h5>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
              <Link href="/hireme">
                <a className="btn btn-light">saber más</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Porfolio */}
      <section>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-dark">
              <div className="row">
                <div className="col-md-12 my-2">
                  <h1 className="text-center text-light">Portfolio</h1>
                </div>
                {projects.map(({ name, description, image }, index) => (
                  <div className="col-md-4 p-2" key={index}>
                    <div className="card h-100">
                      <div className="overflow">
                        <img
                          src={`/${image}`}
                          alt=""
                          className="card-img-top"
                        />
                      </div>
                      <div className="card-body">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <a href="#" onClick={()=>alert('Aun estoy preparando esta area')}>GitHub</a>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="col-md-12 mt-4">
                  <div className="text-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
