import React, { useState, useEffect } from "react";
/*---------------Import hooks---------------*/
import { useMakeRequest } from "../../hooks/useMakeRequest";
import { useDebounce } from "../../hooks/useDebounce";
/*---------------Import react-router---------------*/
import { useHistory } from "react-router-dom";
/*---------------Import components---------------*/
import InputWithAutocomplete from "./InputWithAutocomplete/InputWithAutocomplete";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
/*---------------Import Material UI components---------------*/
import Grid from "@material-ui/core/Grid";

// import testData from "../../test-data-auto.json";

function HomeForm(props) {
  const history = useHistory();

  const [makeRequest, data, hasError, error, isLoading] = useMakeRequest();

  const [value, setValue] = useState("");
  const [currentRecipeId, setCurrentRecipeId] = useState();

  const debounceValue = useDebounce(value, 2000);

  const changeValue = (data) => setValue(data);
  const changeRecipeId = (data) => setCurrentRecipeId(data);

  /*Функция для изменения url на страницу в нужным рецептом при нажатии Enter */
  const onEnterPress = (event) => {
    if (event.keyCode === 13 && event.shiftKey === false) {
      event.preventDefault();
      if (currentRecipeId !== undefined)
        history.push(`/recipe/${currentRecipeId}`);
    }
  };

  /*Cделать запрос для получения названий рецептов для автокомплита */
  useEffect(() => {
    if (debounceValue) {
      makeRequest(
        `https://api.spoonacular.com/recipes/autocomplete?apiKey=105c45c3c46749d4a2344c632ce5f2de&number=5&query=${debounceValue}`
      );
    }
  }, [makeRequest, data, debounceValue]);

  return (
    <form>
      <Grid container direction="column">
        <Grid item xs={12}>
          <InputWithAutocomplete
            name={"recipeId"}
            loading={isLoading}
            value={value}
            changeValue={changeValue}
            changeRecipeId={changeRecipeId}
            data={data}
            onEnterPress={onEnterPress}
          />
        </Grid>
        {error && (
          <Grid item xs="auto">
            <ErrorMessage
              hasError={hasError}
              errorInfo={error}
              variant={"h5"}
              height="3rem"
              margin="auto 2.5rem"
            />
          </Grid>
        )}
      </Grid>
    </form>
  );
}

export default HomeForm;
