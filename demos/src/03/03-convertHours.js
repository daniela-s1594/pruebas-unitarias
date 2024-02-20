// Tarea:crear una funcion nueva y sacar pruebas

function HoursConvert(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const residue = (seconds % 3600) % 60;
  return `${hours}:${minutes}:${residue}`;
}

module.exports = HoursConvert;
