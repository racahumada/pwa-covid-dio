function formatNumber(value) {
  return value.toLocaleString('pt-BR', {
    maximumFractionDigits: 2,
  });
}

export default formatNumber;
