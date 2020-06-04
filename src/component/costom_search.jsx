import React from "react";

const Search = ({
  onChange,
  width,
  placeholder,
  height,
  textTransform,
  padding,
  margin,
  type,
  className,
  value,
  name
}) => {
  return (
    <input
      style={{
        width: width ? width : "200px",
        height: height ? height : "5vh",
        textTransform: textTransform ? textTransform : "uppercase"
      }}
      type={type ? type : "text"}
      value={value}
      name={name ? name : null}
      padding={padding ? padding : null}
      onChange={onChange}
      className={className ? className : null}
      margin={margin ? margin : null}
      placeholder={placeholder ? placeholder : null}
    />
  );
};

export default Search;
