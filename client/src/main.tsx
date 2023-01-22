import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import MuiTheme from "./_components/MuiTheme/MuiTheme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <MuiTheme>
      <App />
    </MuiTheme>
);
