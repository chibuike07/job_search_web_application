// import React from "react";
// import CustomInput from "./custom_search";

// const BusinessSearch = ({ handleChange, value, handleSubmit }) => {
//   const {
//     job_search,
//     location,
//     sort_by,
//     LocationOptions,
//     sortByOption,
//     businessSearch
//   } = value;
//   console.log(businessSearch);

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <CustomInput
//           placeholder={"job search"}
//           name={"job_search"}
//           onChange={handleChange}
//           value={job_search}
//         />
//         <CustomInput
//           placeholder={"location"}
//           name={"location"}
//           onChange={handleChange}
//           value={location}
//           list={"location"}
//         />
//         <CustomInput
//           onChange={handleChange}
//           defaultValue={"best_match"}
//           name={"sort_by"}
//           value={sort_by}
//           textTransform={"lowerCase"}
//           list={"sortBy"}
//         />
//         <button>click</button>
//         <datalist id={"location"}>
//           <option value={LocationOption[0]} defaultChecked />
//           {LocationOption &&
//             LocationOptions.map((value, i) => <option key={i} value={value} />)}
//         </datalist>
//         <datalist id={"sortBy"}>
//           {sortByOption &&
//             sortBy.map((values, i) => <option value={values} key={i} />)}
//         </datalist>
//       </form>
//     </div>
//   );
//   // https://en.wikipedia.org/wiki/List_of_U.S._state_abbreviations
// };

// export default BusinessSearch;
