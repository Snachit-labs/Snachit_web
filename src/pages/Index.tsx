import indexStyle from "../css/pages/landingStyle.module.css";
import landingLogo from "../assets/landingLogo.svg";
import Category from "../components/Category";
import MouseTrail from "../MouseTrail";

export default function Index() {
  return (
    <div className={indexStyle.container}>
      <MouseTrail/>
      <img
        src={landingLogo}
        alt="landingLogo"
        className={indexStyle.landingLogo}
      />
      <div className={indexStyle.inner}>
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
        <div className={indexStyle.communityDiv}>
          <div className={indexStyle.imgDiv}>
            <span className={indexStyle.leftImg}></span>
            <div className={indexStyle.rightImgDiv}>
              <span className={indexStyle.img}></span>
              <span className={indexStyle.img}></span>
              <span className={indexStyle.img}></span>
            </div>
          </div>
          <div className={indexStyle.communityTextDiv}>
            <span className={indexStyle.communityTitle}>MOMENT</span>
            <span className={indexStyle.communityTitle}>: 시간관리 커뮤니티</span>
            <span className={indexStyle.communityInfo}>사용자들의 하루 일과를 공유하고, 서로에게 동기 부여하는 습관 형성 앱 서비스.</span>
          </div>
        </div>
        <Category korText="테크"/>
        <Category korText="쇼핑"/>
        <Category korText="소셜"/>
        <Category korText="금융"/>
        <Category korText="라이프스타일"/>
      </div>
    </div>
  );
}
