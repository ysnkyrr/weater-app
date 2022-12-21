import yagmurlu from "./images/rainy.jpg";
import bulutlu from "./images/cloud.jpg";
import sisli from "./images/fuggy.jpg";
import karli from "./images/snowy.jpg";
import firtinali from "./images/storm.jpg";
import gunesli from "./images/sunnyy.jpg";

function PushMg({ mg }) {
  switch (mg) {
    case "Rain":
      return <img className="background-img" src={yagmurlu} alt="Rainy" />;
    case "Drizzle":
      return <img className="background-img" src={yagmurlu} alt="Drizzle" />;
    case "Clear":
      return <img className="background-img" src={gunesli} alt="Sunny" />;
    case "Mist":
      return <img className="background-img" src={sisli} alt="Mist" />;
    case "Snow":
      return <img className="background-img" src={karli} alt="Snow" />;
    case "Storm":
      return <img className="background-img" src={firtinali} alt="Storm" />;
    case "Clouds":
      return <img className="background-img" src={bulutlu} alt="Clouds" />;
    default:
      return <img className="background-img" src={gunesli} alt="Sunny" />;
  }
}
export default PushMg;
