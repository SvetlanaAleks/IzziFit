import objectFitImages from "object-fit-images";
import Sliders from "./modules/Sliders";
import Menu from "./modules/Menu";
import Animate from "./modules/Animate";

$(function () {
  objectFitImages();
  Sliders.init();
  Animate.init();
  Menu.init();
});
