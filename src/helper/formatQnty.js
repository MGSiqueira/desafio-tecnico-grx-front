export const isolateQnty = (infos) => {
  if (infos === '' || infos === undefined) return undefined;
  const qntyList = infos.map((info) => {
    const objArray = Object.entries(info);
    const filtered = objArray.filter(([_key, value]) => typeof value === 'number');
    const onlyQnty = Object.fromEntries(filtered);
    return onlyQnty;
  })
  return qntyList;
}

export const sumQnty = (objArray) => {
  const qnty = { QuantidadePositiva: 0,
    QuantidadeNegativa: 0,
    QuantidadeNaoAvaliada: 0,
  }

  objArray.forEach((obj) => {
    qnty.QuantidadePositiva += obj.QuantidadePositiva;
    qnty.QuantidadeNegativa += obj.QuantidadeNegativa;
    qnty.QuantidadeNaoAvaliada += obj.QuantidadeNaoAvaliada;
  });

  return qnty;
}
