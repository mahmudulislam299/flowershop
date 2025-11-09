import React, { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import KeyboardDatePickerExample from "./Calendar";

export const ProductDetailsHome = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [value, setValue] = useState("standard");
  const [data, setData] = useState({});

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5001";

  useEffect(() => {
    getData();
  }, [id]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const getData = async () => {
    try {
      const res = await axios.get(`${API_URL}/flower/homepage/${id}`);
      setData(res.data);
      console.log("ProductDetailsHome data:", res.data);
    } catch (err) {
      console.error("Error fetching product details (home):", err);
    }
  };

  return (
    <div className="product-container">
      <h1>{data.name}</h1>
      <h4>Price : {data.price}</h4>
      <hr style={{ display: "flex", width: "90%" }} />

      <div style={{ display: "flex", width: "90%" }}>
        <img
          src={data.image}
          alt={data.name || "Product"}
          style={{ margin: "auto", width: "450px" }}
        />

        <hr />
        <div style={{ margin: "auto", width: "50%" }}>
          <FormControl>
            <FormLabel id="size-group">Select Size</FormLabel>
            <RadioGroup
              aria-labelledby="size-group"
              name="size-radio-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="standard"
                control={<Radio />}
                label="Standard-color"
              />
            </RadioGroup>
          </FormControl>

          <hr style={{ width: "60%" }} />

          <FormGroup style={{ marginLeft: "40%" }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="PICK UP IN STORE"
            />
          </FormGroup>

          <div style={{ width: "20%", height: "50%", margin: "auto" }}>
            <input
              type="text"
              placeholder="Enter Pin Code"
              style={{ marginBottom: "5%" }}
            />
            <h4>Delivery Date</h4>
            {/* <KeyboardDatePickerExample /> */}
            <h5>Use Address Book</h5>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                onClick={() => navigate(`/payment`)}
              >
                Checkout
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};
