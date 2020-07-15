import React from "react";
import yelp from "./Yelp";
import CustomInput from "./custom_search";
import Styles from "./search.module.css";
import FoundView from "./Found_view";
import { LocationOption, sortBy } from "./location_options";

const BusinessSearch = ({ handleChange, value, handleSubmit }) => {
  const { input_wrapper, form, inputLabel, btn } = Styles;
  const {
    job_search,
    location,
    sort_by,
    LocationOptions,
    sortByOption
  } = value;

  return (
    <div>
      <div>
        <div className={input_wrapper}>
          <form onSubmit={handleSubmit} className={form}>
            <div className={inputLabel}>
              <label htmlFor="job_search">what are you looking for</label>
              <CustomInput
                placeholder={"job search"}
                name={"job_search"}
                onChange={handleChange}
                value={job_search}
                id={"job_search"}
                width={"25vw"}
              />
            </div>
            <div className={inputLabel}>
              <label htmlFor="locations">
                what location are you looking at
              </label>
              <CustomInput
                placeholder={"location"}
                name={"location"}
                onChange={handleChange}
                value={location}
                list={"location"}
                id={"locations"}
                width={"25vw"}
              />
            </div>
            <div className={inputLabel}>
              <label htmlFor="sort">search terms</label>
              <CustomInput
                onChange={handleChange}
                defaultValue={"best_match"}
                name={"sort_by"}
                value={sort_by}
                textTransform={"lowerCase"}
                list={"sortBy"}
                id={"sort"}
                width={"25vw"}
              />
            </div>
            <datalist id={"location"}>
              <option value={LocationOption[0]} />
              {LocationOption &&
                LocationOptions.map((value, i) => (
                  <option key={i} value={value} />
                ))}
            </datalist>
            <datalist id={"sortBy"}>
              {sortByOption &&
                sortBy.map((values, i) => <option value={values} key={i} />)}
            </datalist>
            <div className={btn}>
              <button>search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  // https://en.wikipedia.org/wiki/List_of_U.S._state_abbreviations
};

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
    if (location !== "" && sort_by !== "" && job_search !== "") {
      let result = Object.values(LocationOption[location]).join("");
      let res = await yelp.searchYelp(job_search, result, sort_by);
      this.setState({ businessSearch: res });
    } else {
      alert("sorry search not found");
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
        <FoundView foundSearch={this.state.businessSearch} />
      </div>
    );
  }
}
export default Parent;
