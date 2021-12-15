import React, { useState, useEffect, useContext } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { ItemContext } from "../App";

export default function SearchBar() {
  const [myOptions, setMyOptions] = useState([]);

  const [value, setValue] = React.useState();

  const itemContext = useContext(ItemContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res.data);
        for (var i = 0; i < res.length; i++) {
          myOptions.push(res[i].title);
        }
        setMyOptions(myOptions);
      });
  }, []);

  return (
    <div>
      <br />
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          itemContext.itemDispatch({ type: "addItem", payload: value });
        }}
        id="controllable-states-demo"
        options={myOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Add Item" />}
      />
    </div>
  );
}
