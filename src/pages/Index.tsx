import indexStyle from "../css/pages/landingStyle.module.css";
import landingLogo from "../assets/landingLogo.svg";

export default function Index() {
  return (
    <div className={indexStyle.container}>
      <img
        src={landingLogo}
        alt="landingLogo"
        className={indexStyle.landingLogo}
      />
    </div>
  );
}
