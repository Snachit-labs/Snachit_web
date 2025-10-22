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
      <div className={indexStyle.landingTextDiv}>
        <span className={indexStyle.text1}>당신의 아이디어,</span>
        <div className={indexStyle.text2Div}>
          <span className={indexStyle.aliveText}>살아있는 서비스</span>
          <span className={indexStyle.makeText}>로 만드세요.</span>
        </div>
        <div className={indexStyle.text3Div}>
          <span>
            실시간 피드백과 업데이트 이력이 쌓여가는 역동적인 아카이브.
          </span>
          <span>당신의 잠재력을 지속적인 발전으로 증명하세요.</span>
        </div>
      </div>
    </div>
  );
}
