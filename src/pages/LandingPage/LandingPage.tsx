import React from "react";
//CSS modules specifif & general
//import styles from "./LandingPage.module.css";
import "../../index.css";
//Imported components
import { PrimaryButton, SecondaryButton } from "../../components";

//Interface - type definition under here & porops

//Funtionalitites go under here

//The page itself with its componetns under here
const LandingPage: React.FC = () => {
  return (
    //Burger menu component:
    //Hero component
    //Log in or sing up  options section:
    <section>
      <h1 className="h1">Stedet hvor musikere finder musikere og spiller musik sammen</h1>
      <div>
        <h3 className="h3_blue"> Log ind for at finde musikere du kan spille med i hele Denmark</h3>
        <PrimaryButton label="Opret med e-mail" onClick={() => console.log("Sign up clicked")}></PrimaryButton>
        <span>
          <p>eller</p>
        </span>
        <SecondaryButton label="Log ind" onClick={() => console.log("Log in clicked")}></SecondaryButton>
      </div>
    </section>
  );
};

//export the page
export default LandingPage;
