import React from "react";
import "./css/styles.css";
import * as Sentry from "@sentry/browser";

Sentry.init({dsn: "https://ae06363733c640dfa0c19ef206eacba2@sentry.io/1842911"});
ReactDOM.render(<App />, document.getElementById('root'));