import Map from "./Map";
import { useApiGet, TApiResponse } from "./useApiHook";
import { pick } from "./pick";

export default function App() {
  const apiData: TApiResponse = useApiGet(
    "https://restcountries.com/v3.1/alpha?codes=de,fr,be,&fields=capital,latlng"
  );
  const filteredData = apiData.data.map((Entry) =>
    pick(Entry, "capital", "latlng")
  );
  if (!apiData.loading) console.log(filteredData);

  return (
    <div className="App">
      <Map />
    </div>
  );
}
