import Map from "./Map";
import { useApiGet, TApiResponse } from "./useApiHook";

export default function App() {
  const apiData: TApiResponse = useApiGet(
    "https://restcountries.com/v3.1/alpha?codes=de,fr,be,&fields=capital,latlng"
  );
 // if (!apiData.loading) console.log(apiData.data);

  return (
    <div className="App">
      <Map />
    </div>
  );
}
