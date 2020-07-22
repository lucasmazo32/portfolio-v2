export default function yearsFromNov() {
  let months;
  const start = new Date('November 25 2019');
  const rn = new Date();
  months = (rn.getFullYear() - start.getFullYear()) * 12;
  months -= start.getMonth();
  months += rn.getMonth();
  if (months >= 12 && months < 24) {
    return { text: '1 year', months };
  }
  if (months >= 24) {
    return { text: `${Math.floor(months / 12)} years`, months };
  }
  return { text: `${months} months`, months };
}
