// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../App.css";

// function GetApi() {
//   const baseURL = "https://anime-facts-rest-api.herokuapp.com/api/v1";
//   const [state, setState] = useState([]);
//   useEffect(() => {
//     axios.get(baseURL).then((res) => {
//       setState(res.data.data);
//       console.log(res.data.data);
//     });
//   }, []);

//   return (
//     <div className="Cards">
//       {state.map((e) => (
//         <div className="card">
//           <img className="imgRes" src={e.anime_img} alt="..." />
//           <div className="caption">
//             <h5>{e.anime_name}</h5>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default GetApi;
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

function GetApi() {
  //   const baseURL = "https://anime-facts-rest-api.herokuapp.com/api/v1";
  const baseURL = "https://api.instantwebtools.net/v1/airlines";
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setState(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="Cards">
      {state.map((e, index) => (
        <div key={index} className="card">
          <img className="imgRes" src={e.flags.svg} alt="..." />
          <div className="caption">
            <h5>{e.name.common}</h5>
            <Link to={`/details/${e.ccn3}`}>
              <button className="btn btn-success">More details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GetApi;