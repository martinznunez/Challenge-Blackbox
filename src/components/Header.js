import styled from "@emotion/styled";
import { useState, useEffect } from "react";

const ContainerCaja = styled.div`
  width: 600px;
  display: flex;
  height: 500px;
  margin: auto;
  text-align: center;
  flex-direction: column;
  background-color: rgb(0, 128, 128);
  text-transform: uppercase;
  color: #fff;

  margin-top: 10px;

  p {
    font-size: 1.2rem;
    margin: auto;
    padding: 10px;
    width: 95%;
  }

  span {
    font-size: 1.3rem;
    color: red;
  }

  button {
    padding: 10px;
    width: 300px;
    margin: auto;
    height: auto;
    cursor: pointer;
  }
  button:hover {
    box-shadow: inset 0 0 20px rgba(49, 138, 172, 0.5),
      0 0 20px rgba(49, 138, 172, 0.4);
    outline-color: rgba(49, 138, 172, 0);
    outline-offset: 80px;
    text-shadow: 1px 1px 6px #fff;
  }
`;
const MensajePuntos = styled.h6`
  color: rgba(0, 0, 255, 1);
  text-transform: uppercase;
  font-size: 2rem;
  text-align: center;
`;

const Header = ({ data, setTodasLasPreguntas, todasLasPreguntas }) => {
  const [posicionPregunta, setPosicionPregunta] = useState(0);

  const [puntaje, setPuntaje] = useState(0);

  useEffect(() => {
    setTodasLasPreguntas(data[posicionPregunta]);
  }, [data, posicionPregunta, setTodasLasPreguntas]);

  const onClickEvent = (response) => {
    const respuestaSelec = response;

    let respuestaCorrecta = data[posicionPregunta].correct_answer;

    validarPreguntas(respuestaCorrecta, respuestaSelec);
  };

  const validarPreguntas = (respuestaSelec, respuestaCorrecta) => {
    if (respuestaCorrecta === respuestaSelec) {
      alert("Correcta!!");
      setTodasLasPreguntas(data[posicionPregunta]);

      if (data[posicionPregunta].type === "boolean") {
        setPuntaje(puntaje + 5);
      } else if (data[posicionPregunta].type === "multiple") {
        setPuntaje(puntaje + 10);
      }
    } else {
      alert("Respuesta Incorrecta ");
      setTodasLasPreguntas(data[posicionPregunta]);
    }

    setPosicionPregunta(posicionPregunta + 1);
  };

  let respuestasPosibles;
  if (todasLasPreguntas) {
    respuestasPosibles = [
      todasLasPreguntas.correct_answer,
      ...todasLasPreguntas.incorrect_answers,
    ].sort();
  }

  return (
    <>
      {todasLasPreguntas ? (
        <ContainerCaja>
          <h2>{todasLasPreguntas.category}</h2>
          <span>{todasLasPreguntas.difficulty}</span>
          <p>{todasLasPreguntas.question}</p>
          {` tu puntaje es de ${puntaje} Puntos`}

          {respuestasPosibles.map((respuestas) => (
            <button key={respuestas} onClick={() => onClickEvent(respuestas)}>
              {respuestas}
            </button>
          ))}
        </ContainerCaja>
      ) : (
        <MensajePuntos>
          Tu puntaje es de <br></br> {puntaje}
        </MensajePuntos>
      )}
    </>
  );
};

export default Header;
