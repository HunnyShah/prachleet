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
        <div class="ratio ratio-1x1">
          <div><img src={data.photo} /></div>
        </div>
        <div class="ratio ratio-4x9">
          <div>4x3</div>
        </div>
        <div class="ratio ratio-16x9">
          <div>16x9</div>
        </div>
        <div class="ratio ratio-21x9">
          <div>21x9</div>
        </div>


        {/* <div>IRDB Rate: {data.rate}</div>
        <div>Casting: {data.cast}</div>
        <div dangerouslySetInnerHTML={{ __html: data.info }} /> */}
      </div>
    </div>
  );
}

export default Description;
