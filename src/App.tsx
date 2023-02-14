import Map from "./Map"
import { useApiGet, TApiResponse } from './useApiHook';


export default function App() {

  const data: TApiResponse = useApiGet(
    'https://restcountries.com/v3.1/alpha?codes=de,fr,be,&fields=capital,latlng'
  );
  if (!data.loading) console.log(data);


  return (
    <div className="App">
         <Map />
    </div>
  )
}
