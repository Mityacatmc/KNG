import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";

//ОБРАБОТКА
bridge.send("VKWebAppInit");
  
// Проверяет, поддерживается ли событие на текущей платформе
if (bridge.supports("VKWebAppResizeWindow")) {
  bridge.send("VKWebAppResizeWindow", {"width": 800, "height": 1000});
}

ReactDOM.render(<App />, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
