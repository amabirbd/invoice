import React, { useState, useEffect, useContext } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { ItemContext } from "../App";

export default function SearchBar() {
  const [myOptions, setMyOptions] = useState([]);

  const [value, setValue] = React.useState(myOptions[0]);

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
        itemContext.itemDispatch({ type: "addItem", payload: value });
      });
  }, []);

  return (
    <div>
      <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
      <br />
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        id="controllable-states-demo"
        options={myOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Add Item" />}
      />
    </div>
  );
}
