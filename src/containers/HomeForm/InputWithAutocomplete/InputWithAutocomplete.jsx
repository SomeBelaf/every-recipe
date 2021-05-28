import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
/*---------------Import Material UI components---------------*/
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";

function findId(dataArr, value) {
  let id;
  if (dataArr && dataArr !== []) {
    dataArr.forEach((item) => {
      if (item.title === value.toLowerCase()) id = item.id;
    });
  }
  return id;
}

function InputWithAutocomplete(props) {
  const {
    name,
    loading,
    value,
    changeValue,
    data,
    changeRecipeId,
    onEnterPress,
  } = props;

  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (data && data !== []) setOptions(data.map((item) => item.title));
  }, [data]);

  useEffect(() => {
    changeRecipeId(findId(data, value));
  }, [value, data, changeRecipeId]);

  return (
    <Autocomplete
      freeSolo
      autoComplete
      includeInputInList
      filterSelectedOptions
      disableClearable
      autoHighlight
      getOptionSelected={(option, val) => option === val}
      getOptionLabel={(option) => option}
      options={options}
      loading={loading}
      onInputChange={(event, newInputValue) => {
        changeValue(newInputValue);
      }}
      onChange={(event, newValue) => {
        setOptions(newValue ? [newValue, ...options] : options);
        changeValue(newValue);
      }}
      value={value}
      renderInput={(params) => (
        <TextField
          variant="outlined"
          onKeyDown={(e) => onEnterPress(e)}
          name={name}
          {...params}
          placeholder="Search"
          InputProps={{
            ...params.InputProps,
            endAdornment: loading ? (
              <CircularProgress color="inherit" size={20} />
            ) : (
              params.InputProps.endAdornment
            ),
          }}
        />
      )}
    />
  );
}

InputWithAutocomplete.propTypes = {
  loading: PropTypes.bool.isRequired,
  onEnterPress: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
  changeRecipeId: PropTypes.func.isRequired,
};

export default InputWithAutocomplete;
