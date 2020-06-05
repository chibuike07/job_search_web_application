import React from "react";
import yelp from "./Yelp";
import BusinessSearch from "./Parent.component";
import { LocationOption, sortBy } from "./location_options";

class Parent extends React.Component {
  state = {
    job_search: "",
    location: "",
    sort_by: "",
    LocationOptions: [],
    sortByOption: sortBy,
    businessSearch: []
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = async e => {
    const { location, sort_by, job_search } = this.state;
    e.preventDefault();
    // console.log(stateProps);
    if (location !== "" && sort_by !== "" && job_search !== "") {
      alert("yes");
      // let res = await yelp.searchYelp("Starbucks", "MX", "best_match");
      let res = await yelp.searchYelp(job_search, location, sort_by);
      this.setState({ businessSearch: res });
      console.log(res);
    } else {
      alert("no");
    }
  };

  handleLocationOptions = () => {
    let states = LocationOption && Object.keys(LocationOption);
    this.setState({ LocationOptions: states });
  };

  componentDidMount() {
    this.setState({ sort_by: "best_match" });
    this.handleLocationOptions();
  }
  render() {
    return (
      <div>
        <BusinessSearch
          value={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
export default Parent;
