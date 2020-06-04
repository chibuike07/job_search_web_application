import React from "react";
import yelp from "./Yelp";
import CustomInput from "./custom_search";
import { LocationOption } from "./location_options";
const BusinessSearch = ({ handleChange, value, handleSubmit }) => {
  const { job_search, location, sort_by, LocationOptions } = value;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CustomInput
          placeholder={"job search"}
          name={"job_search"}
          onChange={handleChange}
          value={job_search}
        />
        <CustomInput
          placeholder={"location"}
          name={"location"}
          onChange={handleChange}
          value={location}
          list={"location"}
        />
        <CustomInput
          onChange={handleChange}
          defaultValue={"best_match"}
          name={"sort_by"}
          value={sort_by}
          textTransform={"lowerCase"}
        />
        <button>click</button>
        <datalist id={"location"}>
          {LocationOption &&
            LocationOptions.map((value, i) => <option key={i} value={value} />)}
        </datalist>
      </form>
    </div>
  );
  // https://en.wikipedia.org/wiki/List_of_U.S._state_abbreviations
};

class Parent extends React.Component {
  state = {
    job_search: "",
    location: "",
    sort_by: "",
    LocationOptions: []
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
      console.log(res);
      //   return false;
    } else {
      alert("no");
      //   return false;
    }
  };
  handleLocationOptions = () => {
    console.log(LocationOption);
    let states = LocationOption && Object.keys(LocationOption);
    this.setState({ LocationOptions: states });
  };
  componentDidMount() {
    this.handleLocationOptions();
  }
  render() {
    console.log(this.state.LocationOptions);
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
