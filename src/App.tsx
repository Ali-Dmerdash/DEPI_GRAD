import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import React from "react";
import "./AddDoctors.css";
type Props = {};

const AddDoctors = (props: Props) => {
  return (
    <div className="grey-background">
    <div className="grey-background">
      <form action="">
      <form action="">
        <h3>Add Doctor</h3>
        <div className="row gx-5">
          <div className="col-xsm-12 col-lg-5">
            <div>
              <label className="form-label">Doctor Name</label>
              <input className="form-control" type="text" placeholder="Name" />
            </div>
            <div>
              <label>Doctor Email</label>
              <input type="text" placeholder="Email" />
            </div>
            <div>
              <label>Doctor Password</label>
              <input type="password" placeholder="Password" />
            </div>
            <div>
              <label>Experience (in years)</label>
              <input type="number" placeholder="Number of years" />
            </div>
            <div>
              <label>Fees</label>
              <input type="number" placeholder="Fees" />
            </div>
          </div>
          <div className="col-xsm-12 col-lg-6">
            <div>
              <label>Specialty</label>
              <input type="text" placeholder="Specialty" />
            </div>
            <div>
              <label>Education</label>
              <input type="text" placeholder="Education" />
            </div>
            <div>
              <label>Address</label>
              <input type="text" placeholder="Address 1" />
              <input className="mt-3" type="text" placeholder="Address 2" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button className="btn mt-3 ">Add Doctor</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddDoctors;
