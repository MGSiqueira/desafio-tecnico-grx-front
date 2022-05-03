import React, { useState, useEffect } from "react";
import api from "../helper/api";

export default function AnswersInfo() {
  const [apiInfo, setApiInfo] = useState();

  const getInfo = async () => {
    const { data } = await api.get('/answers');
    setApiInfo(data);
  }

  useEffect(() => { getInfo(); }, []);

  return (
    console.log(apiInfo, 'aqui')
  )
}