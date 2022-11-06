import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function ReadApi() {
  const { cId } = useParams();

  const baseURL = `https://api.jikan.moe/v4/anime?q=bleach&sfw${cId}`;
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setAPIData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [baseURL]);

  return (
    <div>
      {APIData.map((data, index) => {
        return (
          <div key={index}>
            <ul className="Anime-info">
              <h1> {data.data.synopsis} </h1>
              <br />
              <img className="img" src={data.data.images.jpg.large_image_url} alt="..." />
              <li>Date anime got aired: {data.data.aired}</li>
              <li>duration : {data.data.duration.toLocaleString("time")}</li>
              <li>episods : {data.data.episodes.toUpperCase()}</li>

              <br />
              <Link to="/data">
                <button className="btn btn-success"> back </button>
              </Link>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default ReadApi;
  //   console.log("This is params ", cId);