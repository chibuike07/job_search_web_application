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
  name,
  list,
  required,
  id
}) => {
  return (
    <input
      style={{
        width: width ? width : null,
        height: height ? height : null,
        textTransform: textTransform ? textTransform : "uppercase"
      }}
      type={type ? type : "text"}
      value={value ? value : ""}
      name={name ? name : null}
      padding={padding ? padding : null}
      id={id ? id : null}
      list={list ? list : null}
      onChange={onChange}
      className={className ? className : null}
      margin={margin ? margin : null}
      placeholder={placeholder ? placeholder : null}
      required={required ? required : null}
    />
  );
};

export default Search;
