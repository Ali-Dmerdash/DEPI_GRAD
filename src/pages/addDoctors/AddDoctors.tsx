import { Grid2 } from "@mui/material";
import "./AddDoctors.css";
import { IoPersonCircleSharp } from "react-icons/io5";
type Props = {};

const AddDoctors = (props: Props) => {
  return (
    <div>
      <form action="">
        <h3>Add Doctor</h3>
        <div>
          <div>
            <IoPersonCircleSharp style={{ fontSize: "7rem" }} />
          </div>
          <div>
            <span>Upload Doctor Picture</span>
          </div>
        </div>
        <Grid2 container spacing={5}>
          <Grid2 size={7}>
            <div>
              <label>Doctor Name</label>
              <input type="text" placeholder="Name" />
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
          </Grid2>
          <Grid2 size={5}>
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
              <input type="text" placeholder="Address 2" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button style={{ width: "100%" }}>Add Doctor</button>
            </div>
          </Grid2>
        </Grid2>
      </form>
    </div>
  );
};

export default AddDoctors;
