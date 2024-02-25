/* @refresh reload */
import { render } from "solid-js/web";

import "./styles.scss";
import '/node_modules/modern-normalize/modern-normalize.css';

import App from "./App";

render(() => <App />, document.getElementById("root"));
