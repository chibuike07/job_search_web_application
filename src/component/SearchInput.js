import React from "react";
import yelp from "./Yelp";
import CustomInput from "./costom_search";
const BusinessSearch = ({ handleChange, value, handleSubmit }) => {
  const { job_search, location, sort_by } = value;
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
        />
        <CustomInput
          onChange={handleChange}
          defaultValue={"best_match"}
          name={"sort_by"}
          value={sort_by}
          textTransform={"lowerCase"}
        />
        <button>click</button>
      </form>
    </div>
  );
};

class Parent extends React.Component {
  state = {
    job_search: "",
    location: "",
    sort_by: ""
    // apiCall: yelp
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
