type CalorieDisplayProps = {
    calories: number,
    text: string
}

function CalorieDisplay({calories, text} : CalorieDisplayProps) {

     // Determinar el color para las calorías gastadas o consumidas
  let textColor = '';
  if (text === 'Gastadas') {
    textColor = 'text-orange-500';
  } else if (text === 'Consumidas') {
    textColor = 'text-green-500';
  }

  // Determinar el color para la diferencia de calorías
  if (text === 'Diferencia') {
    if (calories < 0) {
      textColor = 'text-red-500'; // Diferencia negativa
    } else if (calories > 0) {
      textColor = 'text-blue-500'; // Diferencia positiva
    } else {
      textColor = 'text-gray-500'; // Diferencia cero
    }
  }
  
  return (
    <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
      <span className={`font-black text-6xl ${textColor}`}>
        {calories}
      </span>
      {text}
    </p>
  );
}

export default CalorieDisplay