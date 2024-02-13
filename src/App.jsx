import { useEffect, useState } from 'react'
import './App.css'

const url = import.meta.env.VITE_API_URL;

function App() {
  const [v, setV] = useState(null);

  useEffect(() => {
    // if(v === null) return;

    fetch("http://localhost:3000/", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      }
    })
      .then((data) => {
        data.json().then((value) => setV(value));
        // data.json();
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  console.log(v);
  return (
    <>
      <div>hello {v?.name}</div>
    </>
  )
}

export default App
