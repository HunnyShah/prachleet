import React from "react";
import axios from "axios";

class Wishlist extends React.Component {
  // calling variables from database
  constructor(props) {
    super(props);
    this.state = {
      wishList: [],
    };
  }

  componentDidMount() {
    axios({
      // Assigning api key to fetch data
      url: "https://prachleet-backend.herokuapp.com/api/wishlist",
      method: "GET",
    }).then((res) => {
      console.log(res);
      var test = res.data;
      this.setState({
        wishList: test,
      });
    });
  }

  render() {
    // Assigning state

    return (
      <div id="connect">
        {/* {connects && connects.map((connect)=>{
            return(
              <div key={connect.id} className="con_flex ">
                <a href="{connect.link}"><img src={"http://127.0.0.1:8000/storage/"+connect.image }className="con_img" /></a>
              </div>
            ) 
          })} */}
        {this.state.wishList.map(function (wish, i) {
          return (
            <div>
              {wish.id}
              <img src={wish.photo} />
            </div>
          );
        })}
      </div>
    );
  }
}
export default Wishlist;
