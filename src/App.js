import React, { useEffect, useState } from "react";

import Axios from "./config/Axios";
import Header from "./components/Header";

import styled from "@emotion/styled";

const Card = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  padding-top: 40px;

  h1 {
    font-size: 2.6rem;
  }
`;

function App() {
  const [data, setData] = useState({});

  const [todasLasPreguntas, setTodasLasPreguntas] = useState();

  const geyData = async () => {
    const respose = await Axios.get();

    setData(respose.data.results);
  };

  useEffect(() => {
    geyData();
  }, []);

  console.log(data);
  return (
    <>
      <Card>
        <h1>BlackBox Vision</h1>
      </Card>
      <Header
        todasLasPreguntas={todasLasPreguntas}
        setTodasLasPreguntas={setTodasLasPreguntas}
        data={data}
      />
    </>
  );
}

export default App;
