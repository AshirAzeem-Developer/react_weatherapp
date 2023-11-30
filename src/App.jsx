import axios from 'axios';
import { Calendar, Clock, Compass, Droplets, Eye, Fan, MapPin, Thermometer, Wind } from 'lucide-react';
import { useEffect, useState } from 'react';
import './App.css';
import ForecastCard from './Components/ForecastCard';

function App() {

  const [data, setData] = useState("");
  const [location, setLocation] = useState("Karachi");



  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1cd8f82428dc6796d0622c89b96856f1&units=metric`).then(
      (res) => {
        console.log(res.data);
        setData(res.data)

      }
    ).catch((err) => {
      console.log(err);
    })
  }, [location])



  return (
    <>
      <div style={{ backgroundImage: "url('https://i.pinimg.com/originals/95/b1/ea/95b1eaec001975a3fae4e4fc77d50176.gif')" }} className="bg-cover bg-center  h-full lg:h-[100vh] w-[100vw] md:w-full flex flex-col items-center justify-center p-10 text-white ">

        <div className='w-fit h-full sm:w-[70%] sm:h-[100%]  backdrop-blur-sm bg-gray-900/60 rounded-xl  grid  lg:grid-cols-2 '>
          <div className='section1 grid grid-cols-1  m-4'>
            <div className=' backdrop-blur-sm h-100 p-8 rounded-md'>
              <div className='flex flex-row items-center justify-normal    bg-gray-500-300 bg-gray-400 p-3 rounded-full'>
                <MapPin color='white' size={25} />
                <input type="text" name="" id="" className='w-full bg-transparent outline-none mx-auto ms-4' onChange={(e) => setLocation(e.target.value)} />
              </div>
              <div className='py-4'>
                <h1 className='text-center  text-white text-7xl py-2'>{data ? data.main.temp : "0"}°C</h1>
                <p className='text-center text-white py-2'>{data ? data.weather[0].main : "Rainy"}</p>
                <p className='text-center text-white capitalize '>
                  {data ? data.weather[0].description : "Lorem ipsum Doller smit"}
                </p>
              </div>
              <div className='grid sm:grid-cols-2   md:grid-cols-2 lg:grid-cols-2  gap-4 my-2'>
                <div className='bg-white/30 backdrop-blur-sm p-4 rounded-md'>
                  <div className='flex items-center'>
                    <Thermometer color='white' size={20} className='me-2' />
                    Feels Like
                  </div>
                  <h1>{data ? data.main.feels_like : null}</h1>
                  <p>
                    Humidity is making it feel warmer
                  </p>


                </div>
                <div className='bg-white/30 backdrop-blur-sm p-4 rounded-md '>
                  <div className='flex items-center'>
                    <Fan color='white' size={20} className='me-2' />
                    Pressure
                  </div>
                  <h1>{data ? data.main.pressure : null} P</h1>
                  <p>
                    Estimated the Air pressure is
                  </p>


                </div>
                <div className='bg-white/30 backdrop-blur-sm p-4 rounded-md'>
                  <div className='flex items-center'>
                    <Eye color='white' size={20} className='me-2' />
                    Visibility
                  </div>
                  <h1>{data ? data.visibility : null} mi/h</h1>
                  <p>
                    Visibility stretches for several meters.
                  </p>


                </div>
                <div className='bg-white/30 backdrop-blur-sm p-4 rounded-md'>
                  <div className='flex items-center'>
                    <Droplets color='white' size={20} className='me-2' />
                    Humidity
                  </div>

                  <p>
                    {data ? data.main.humidity : null} %
                  </p>
                  <p>
                    Humidity adding a touch of moisture.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=' grid grid-rows-3 '>
            <div className='backdrop-blur-sm bg-gray-800/10 m-3 rounded-2xl '>
              <div className='flex flex-row items-center py-4 border-b-2 mx-4'>
                <Clock color='gray' size={20} />

                <p className='ms-2 text-gray-400'>
                  Hourly Forecast
                </p>


              </div>
              <div className='flex items-center justify-between p-6 text-center'>

                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
              </div>
            </div>
            <div className='backdrop-blur-sm bg-gray-800/10 m-3 rounded-2xl'>
              <div className='flex flex-row items-center py-4 border-b-2 mx-4'>
                <Calendar color='gray' size={20} />

                <p className='ms-2 text-gray-400'>
                  10-Day's Forecast
                </p>


              </div>
              <div className='flex items-center justify-between p-6 text-center'>

                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div className='backdrop-blur-sm bg-gray-800/10 m-3 rounded-2xl w-full'>
                <div className='flex flex-row items-center py-4 border-b-2 mx-4'>
                  <Thermometer color='gray' size={20} />

                  <p className='ms-2 text-gray-400'>
                    UV INDEX
                  </p>
                </div>
                <div className='p-4 text-white'>
                  <h1 className='text-2xl'>
                    3
                  </h1>
                  <p>Moderate</p>
                </div>

              </div>
              <div className='backdrop-blur-sm bg-gray-800/10 m-3 rounded-2xl w-full flex items-center justify-between'>
                <div>
                  <div className='flex flex-row items-center py-4 border-b-2 mx-4'>
                    <Wind color='gray' size={20} />

                    <p className='ms-2 text-gray-400'>
                      WIND
                    </p>
                  </div>

                  <div className='p-4 text-white'>
                    <h1>{data ? data.wind.speed : "0"} MPH-WIND </h1>
                    <h1>{data ? data.wind.deg : "0"} MPH-GUST</h1>
                  </div>

                </div>
                <div>
                  <Compass color='white' size={80} className='me-5' />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
}

export default App;
