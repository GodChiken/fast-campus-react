import React from "react";
import { render } from "react-dom";
import "./css/styles.css";
import ScrollBox from "./component/class/ScrollBox";

const App = () => <ScrollBox />;
render(<App />, document.getElementById("root"));