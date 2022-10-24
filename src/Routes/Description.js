import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function Description() {
  // calling variables from database
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (data.length == 0) {
      axios({
        // Assigning api key to fetch data
        url: `https://prachleet-backend.herokuapp.com/api/descs/` + id,
        method: "GET",
      }).then((res) => {
        console.log(res);
        var test = res.data;
        setData(test);
      });
    }
  });

  return (
    <div id="connect">
      {/* {connects && connects.map((connect)=>{
            return(
              <div key={connect.id} className="con_flex ">
                <a href="{connect.link}"><img src={"http://127.0.0.1:8000/storage/"+connect.image }className="con_img" /></a>
              </div>
            ) 
          })} */}

      <div>
        <div className="desciptionpage">
          <img className="desimg" src={data.photo} />
          <div className="des">
            <h2>{data.name}</h2>
          <div className="rate"><span className="ratespan">IMDB Rate:</span> {data.rate}</div>
          <h5><span className="castspan">Casting:</span> {data.cast}</h5>
          <div dangerouslySetInnerHTML={{ __html: data.info }} />
          </div>
        </div>


        {/* <div>IRDB Rate: {data.rate}</div>
        <div>Casting: {data.cast}</div>
        <div dangerouslySetInnerHTML={{ __html: data.info }} /> */}
      </div>
    </div>
  );
}

export default Description;
