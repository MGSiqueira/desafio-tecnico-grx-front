import React, { useState, useEffect } from "react";
import api from "../helper/api";
import { isolateQnty, sumQnty } from "../helper/formatQnty";

export default function AnswersInfo() {
  const [apiInfo, setApiInfo] = useState();

  const getInfo = async () => {
    const { data } = await api.get('/answers');
    setApiInfo(data);
  }

  useEffect(() => { getInfo(); }, []);

  if (apiInfo === undefined) return <div>Carregando</div>;
  if (apiInfo === '') return <div>Sem respostas salvas</div>
  return (
      console.log(Object.entries(sumQnty(isolateQnty(apiInfo))))
  );
};
