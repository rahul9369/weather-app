import React, { useState } from "react";
import "./Teampapp.css";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { IoRefreshCircleOutline } from "react-icons/io5";
import { IoIosPartlySunny } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
function Teampapp() {
  const [city, setCity] = useState("Agra");

  return (
    <div className="Page">
      <div className="Nav">
        <h3 style={{ padding: "0px", margin: "0px" }}>
          <TiWeatherPartlySunny />
          Weather 99
        </h3>
        <p style={{ padding: "0px", margin: "0px" }}>
          <IoRefreshCircleOutline />
          Refresh
        </p>
      </div>
      <div className="Screen">
        <div className="Location">
          <h4 style={{ padding: "0px", margin: "0px" }}>
            <FaLocationDot />
            Mau,Uttar Pradesh
          </h4>
          <CiSearch className="Icon" />
          <input
            className="Search"
            type="search"
            placeholder="search your city here...."
            style={{ padding: "8px", margin: "0px", borderRadius: "5px" }}
          />
        </div>
        <hr />
        <div className="Date2">
          <p style={{ marginLeft: "50px", paddingRight: "70px" }}>
            20 jan 2023
          </p>
          <p style={{ marginLeft: "50px", paddingRight: "70px" }}>
            21 jan 2023
          </p>
          <p style={{ marginLeft: "50px", paddingRight: "40px" }}>
            22 jan 2023
          </p>
          <p style={{ marginLeft: "50px", paddingRight: "50px" }}>
            23 jan 2023
          </p>
          <p style={{ marginLeft: "50px", paddingRight: "70px" }}>
            25 jan 2023
          </p>
        </div>
        <div className="Main">
          <div className="Date1">
            <p style={{ margin: "0px" }}>Select Date:</p>
            <input type="date" />
            <h5>High Temperature</h5>
            <h5>Low Temperature</h5>
            <h5>Humidity</h5>
            <h5>Sunrise Time</h5>
            <h5>Sunset Time</h5>
          </div>

          <div className="Date">
            <h3>
              <IoIosPartlySunny />
              Sunny
            </h3>
            <hr />
            <p>
              23<sup>o</sup>C/63<sup>o</sup>F
            </p>
            <p>
              23<sup>o</sup>C/63<sup>o</sup>F
            </p>
            <p>76%</p>
            <p>06:21AM</p>
            <p>05:53PM</p>
          </div>

          <div className="Date">
            <h3>
              {" "}
              <IoIosPartlySunny />
              Sunny
            </h3>
            <hr />
            <p>
              23<sup>o</sup>C/63<sup>o</sup>F
            </p>
            <p>
              23<sup>o</sup>C/63<sup>o</sup>F
            </p>
            <p>76%</p>
            <p>06:21AM</p>
            <p>05:53PM</p>
          </div>
          <div className="Date">
            <h3>
              {" "}
              <IoIosPartlySunny />
              Sunny
            </h3>
            <hr />
            <p>
              23<sup>o</sup>C/63<sup>o</sup>F
            </p>
            <p>
              23<sup>o</sup>C/63<sup>o</sup>F
            </p>
            <p>76%</p>
            <p>06:21AM</p>
            <p>05:53PM</p>
          </div>

          <div className="Date">
            <h3>
              {" "}
              <IoIosPartlySunny />
              Sunny
            </h3>
            <hr />
            <p>
              23<sup>o</sup>C/63<sup>o</sup>F
            </p>
            <p>
              23<sup>o</sup>C/63<sup>o</sup>F
            </p>
            <p>76%</p>
            <p>06:21AM</p>
            <p>05:53PM</p>
          </div>

          <div className="Date">
            <h3>
              {" "}
              <IoIosPartlySunny />
              Sunny
            </h3>
            <hr />
            <p>
              23<sup>o</sup>C/63<sup>o</sup>F
            </p>
            <p>
              23<sup>o</sup>C/63<sup>o</sup>F
            </p>
            <p>76%</p>
            <p>06:21AM</p>
            <p>05:53PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teampapp;
