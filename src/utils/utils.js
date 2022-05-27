export const maisVelho = (nome1, idade1, nome2, idade2) => {
  if (idade1 > idade2) {
    return `${nome1} é maior que ${nome2}`;
  } else if (idade1 < idade2) {
    return `${nome1} é menos do que ${nome2}`;
  } else return `${nome1} e ${nome2} eles tem a mesma idade`;
};
