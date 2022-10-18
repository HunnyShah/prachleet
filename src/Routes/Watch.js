import React from "react";
import axios from "axios";

class Watch extends React.Component {
  // calling variables from database
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
    };
  }

  componentDidMount() {
    axios({
      // Assigning api key to fetch data
      url: "https://prachleet-backend.herokuapp.com/api/descs",
      method: "GET",
    }).then((res) => {
      console.log(res);

      this.setState({
        movieList: res.data,
      });
    });
  }

  render() {
    // Assigning state
    const { movieList } = this.state;
    return (
      <div>
        <section className="movielist">
          {movieList.map((movie) => (
            <div className="movie" key={movie.id}>
             <a href={`/description/`+ movie.id} > <img
                src={movie.photo}
                alt="movielist1"
                className="movieimg"
              ></img>
              </a>
              <h4>{movie.name}</h4>
            </div>
          ))}
        </section>
        
      </div>
    );
  }
}
export default Watch;
