import React, { useState, useEffect } from "react";
import api from "../helper/api";
import { isolateQnty, sumQnty } from "../helper/formatQnty";
import './css/AnswersInfo.css';

export default function AnswersInfo() {
  const [apiInfo, setApiInfo] = useState();
  const [qntyArray, setQnty] = useState();

  const getInfo = async () => {
    const { data } = await api.get('/answers');
    setApiInfo(data);
  }

  const total = (array) => {
    let totalSum = 0
    array.forEach((array) => totalSum += array[1])
    return totalSum;
  }

  useEffect(() => { getInfo(); }, []);
  
  useEffect(() => {
    if (apiInfo === '' || apiInfo === undefined) return undefined;
    setQnty(Object.entries(sumQnty(isolateQnty(apiInfo))))
  }, [apiInfo])

  if (apiInfo === undefined || qntyArray === undefined) return <div>Loading...</div>;
  if (apiInfo === '') return <div>Sem respostas salvas</div>
  return (
    <div className='result-container'>
      <div className='total-div'>
        <div>Total</div>
        <div className='values'>{ total(qntyArray) }</div>
      </div>
      { qntyArray.sort((a, b) => b[1] - a[1])
        .map((item, i) => (
          <div key={ i } className='result-div'>
            <div className='qnty-container'>
              <div>{ item[0] }</div>
              <div className='values'>{ item[1] }</div>
            </div>
            <div className='percentage-container'>
              <div>{ `% ${item[0]}` }</div>
              <div className='values'>{ (100 * item[1] / total(qntyArray)).toFixed(2) + '%' }</div>
            </div>
          </div>
          )
        )
      }
    </div>
  );
};
