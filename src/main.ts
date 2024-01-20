import "./style.css";
import sum from "./sum.ts";

const app = document.querySelector<HTMLDivElement>("#app")!;
app.innerHTML = sum(1, 2, 3).toString();
