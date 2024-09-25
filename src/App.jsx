import { useState } from 'react'
import DateCard from './Components/DateCard'
import Horoscopo from './Components/Horoscopo'

import './App.css'

const App = () => {
  const [zodiacData, setZodiacData] = useState({ sign: '', range: '', description: '' });

  const getZodiacSign = (date) => {
    const birthDate = new Date(date);
    const day = birthDate.getDate();
    const month = birthDate.getMonth() + 1;

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return { sign: "Acuario", range: "20 de enero - 18 de febrero", description: "El comienzo del 2024 será exitoso para Acuario, especialmente en su carrera profesional, por lo que se espera que esto siga el resto del año. Para conseguir que los buenos efectos que los astros tendrán en tu vida durante el 2024, es necesario que evoluciones en tu trabajo y que te conviertas en una persona digna de liderar a otros en tu lugar de desempeño." };
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return { sign: "Piscis", range: "19 de febrero - 20 de marzo", description: "Durante este nuevo periodo, el signo del pez deberá ser consciente de sus deseos, ambiciones y metas para conseguir. El 2024 representa un año de definiciones para Piscis, por lo que cualquier paso importante que des deberá llevar una cuota de reflexión previa. Pese a que deberás pensar antes de actuar, el 2024 sí es un año para atreverte a realizar cosas nuevas." };
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return { sign: "Aries", range: "21 de marzo - 19 de abril", description: "Un año bastante movido espera a Aries, quien buscará incesantemente la estabilidad para dar mayor firmeza a sus proyectos, alimentar de mejor manera su conocimiento y conciliar el amor en todos sus aspectos. El optimismo y una mirada más aguda acerca de los problemas serán tus mayores aliados para un comienzo de año positivo y prometedor." };
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return { sign: "Tauro", range: "20 de abril - 20 de mayo", description: "Año de definiciones para el siempre ambicioso y fuerte Tauro, quien irá teniendo cada vez más claras sus metas a medida que vaya avanzando el 2024. No te olvides de lo mucho que has trabajado durante el año anterior, ya que en el nuevo periodo las tensiones podrían hacer que actúes de manera irracional durante los periodos bajos e intentarás partir desde cero muchas veces." };
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return { sign: "Geminis", range: "21 de mayo - 20 de junio", description: "Tiempos favorables para la carrera y para el trabajo en general se acercan a la vida de Géminis durante el 2024. Será un año positivo para realizar planes de viajes, negocios, proyectos nuevos y para emprender un camino hacia el perfeccionamiento de lo que realizas como trabajo. En otros ámbitos, como la salud, las tensiones serán un punto importante para evitar, ya que cualquier tipo de estrés podría liberar malestares físicos." };
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return { sign: "Cancer", range: "21 de junio - 22 de julio", description: "Los sucesos importantes y, algunas veces, dolorosos del 2023 comenzarán a tomar sentido durante el comienzo del 2024 para Cáncer, ya que durante ese periodo te darás cuenta de que cualquier tristeza o dificultad que experimentaste sucedió para traer algo nuevo a tu camino. Muy por el contrario, a lo que es usual en este signo, Cáncer será una persona más abierta, sociable y ambiciosa durante el 2024." };
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return { sign: "Leo", range: "23 de julio - 22 de agosto", description: "El signo del león tendrá un año 2024 excelente. Será un periodo difícil en ciertos aspectos, pero las recompensas a su esfuerzo serán cuantiosas y duraderas si sabe utilizar su inteligencia para mantenerlas. Leo viene dando pasos muy seguros desde hace algún tiempo, pero no había tenido el éxito que espera realmente el rey del zodiaco." };
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return { sign: "Virgo", range: "23 de agosto - 22 de septiembre", description: "Un primer semestre bastante difícil espera a Virgo durante el 2024, algo que podrá evitar manteniendo la confianza y no decayendo ante el infortunio. Las tensiones formarán parte del comienzo del 2024 y se irá incrementando la sensación de que nada te resulta bien con el pasar de los meses, por lo que será de suma importancia que escuches la voz de la razón y que no caigas en los errores que la ansiedad te hará cometer." };
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return { sign: "Libra", range: "23 de septiembre - 22 de octubre", description: "Un 2024 muy relevante en cuanto a las decisiones importantes espera al siempre creativo y algunas veces volátil Libra. El 2024 será un punto de no retorno para Libra, ya que el signo de la balanza ha estado planeando con mucha antelación los pasos definitivos que dará durante este nuevo periodo." };
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return { sign: "Escorpio", range: "23 de octubre - 21 de noviembre", description: "El 2024 significará un periodo de mucha madurez para Escorpio. Quienes hayan caído en las redes de la irresponsabilidad y el festejo constante durante el 2023 tendrán que cambiar de actitud desde principios del 2024 para tener el éxito que esperan. Este nuevo año traerá, no solo mayor responsabilidad a la vida de Escorpio, sino que también representa el comienzo del éxito para ciertos proyectos que han estado en espera." };
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return { sign: "Sagitario", range: "22 de noviembre - 21 de diciembre", description: "Sagitario tendrá varios cambios durante el 2024, los cuales estarán regulados por una mente mucho más aguda y por una capacidad para tomar decisiones más firmes y duraderas por parte del signo del centauro. Será un año espectacular en el sentido económico y en el trabajo, pero dicho éxito solo llegará si aprendes a equilibrar las labores con las elecciones personales que harás en términos de proyectos o de negocios." };
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return { sign: "Capricornio", range: "22 de diciembre - 19 de enero", description: "La evolución que Capricornio experimentará durante el 2024 hará que este nuevo periodo no solo sea exitoso, sino también un puente hacia logros mucho mejores y más fructíferos en el futuro. Capricornio tendrá muchas razones para celebrar durante el 2024, pero lamentablemente ese no será el panorama total del año, ya que con lo positivo siempre vendrá alguna cuota de amargura que deberás aprender a sobrellevar y a mejorar con el paso de los meses." };

    return { sign: "Desconocido", range: "Fecha no válida", description: "No se ha podido determinar tu signo zodiacal" };
  };

  const handleDateChange = (date) => {
    const { sign, range, description } = getZodiacSign(date);
    setZodiacData({
      sign,
      range,
      description
    });
  };

  return (
    <>
      <div className='bg-gray-700 flex flex-col items-center justify-center rounded'>
        <h1 className="text-3xl font-bold mb-8 mt-5">Bienvenid@, aquí puedes saber tu horóscopo</h1>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 w-full px-6 mb-6">
          <div className="bg-gray-500 p-6 shadow-lg rounded-lg flex flex-col justify-center items-center">
            <DateCard onDateChange={handleDateChange} />
          </div>
          <div className='bg-gray-500 p-6 shadow-lg rounded-lg flex flex-col justify-center items-center'>
            <Horoscopo
              zodiacSign={zodiacData.sign}
              dateRange={zodiacData.range}
              description={zodiacData.description}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
