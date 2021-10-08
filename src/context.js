import React, { useContext, useState, useEffect, useCallback } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const urlName = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  const urlId = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

  const [loading, setLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("a");
  const [db, setDb] = useState([]);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [singleCocktail, setSingleCocktail] = useState([]);

  const getCocktailData = (drinks) => {
    const newDrinks = drinks.map((drink) => {
      const {
        idDrink,
        strAlcoholic,
        strDrink,
        strDrinkThumb,
        strGlass,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strInstructions,
      } = drink;

      const items = {
        id: idDrink,
        name: strDrink,
        category: strAlcoholic,
        image: strDrinkThumb,
        glass: strGlass,
        ingredients: [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
        ],
        instruction: strInstructions,
      };

      return items;
    });

    return newDrinks;
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    const searchUrl = `${urlName}${searchKeyword}`;
    const response = await fetch(searchUrl);
    const data = await response.json();
    // console.log(data.drinks);
    const { drinks } = data;

    if (drinks) {
      const newDrinks = getCocktailData(drinks);
      console.log(newDrinks);
      setDb(newDrinks);
    } else {
      setDb([]);
    }
    setLoading(false);
  });

  const fetchSingleCocktail = async (id) => {
    setLoading(true);
    const response = await fetch(`${urlId}${id}`);
    const data = await response.json();
    const { drinks } = data;

    if (drinks) {
      const newDrink = getCocktailData(drinks);
      setSingleCocktail(newDrink[0]);
    } else {
      setSingleCocktail({});
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [searchKeyword]);

  return (
    <AppContext.Provider
      value={{
        loading,
        db,
        searchKeyword,
        setSearchKeyword,
        sidebarActive,
        setSidebarActive,
        fetchSingleCocktail,
        singleCocktail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
