import { PageHeader } from "antd";
import React from "react";
import { Link } from "react-router-dom";


const navigation = {
  margin: "0px 0 0px 0",
  paddingTop: "25px",
  paddingBottom: "20px",
  fontSize: "18px",
  top: "0px",
  background: "white",
  position: "fixed",
  lineHeight: "17px",
  textDecoration: "none",
  letterSpacing: "0.02em",
  textTransform: "uppercase",
  color: "black",
  overflow: "hidden",
  width: "100%"
}
const logo = {
 fontSize: "20px",
 paddingRight: "60%",
 color: "black"

}
const midContent = {
  paddingTop: "20px",
  textAlign: "center"
}

const navItem = {
    padding: "20px 24px 9px 20px",
    color: "black",
}


export default function Header() {
  return (
    <div>
      <div  style={navigation} className="row landing navigation">
        <div className="col-md-4 col-lg-4">
          <Link className="text-link" to="/homepage">
              <span style={logo}>
                    Magic Mint
              </span>
          </Link>
        </div>

        <div className="col-md-4 col-lg-4 ">
          <Link className="text-link" to="/lazyMint"><span  style= {navItem }>Mint</span></Link>
          <Link className="text-link" to="/claims"><span style ={ navItem } >Claims</span></Link>
        </div>
        <div className="col-md-7 col-lg-7">
        </div>


      </div>
    </div>

  );
}
