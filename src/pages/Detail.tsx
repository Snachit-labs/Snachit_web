import detailStyle from "../css/pages/detailStyle.module.css";
import bgTexture from "../assets/bgTexture.jpg";

export default function Detail() {
  return (
    <div className={detailStyle.container}>
      <div className={detailStyle.inner}>
        <div className={detailStyle.topDiv}>
          <div className={detailStyle.category}>
            <span className={detailStyle.korText}>테크</span>
            <span className={detailStyle.engText}>Technology</span>
          </div>
          <div className={detailStyle.titleDiv}>
            <span className={detailStyle.title1}>MOMENT</span>
            <span className={detailStyle.title2}>: 시간관리 커뮤니티</span>
          </div>
          <span className={detailStyle.info}>
            사용자들의 하루 일과를 공유하고, 서로에게 동기 부여하는 습관 형성 앱
            서비스.
          </span>
        </div>
        <div className={detailStyle.contentDiv}>
          {" "}
          <div className={detailStyle.itemL}>
            <div className={detailStyle.textDiv}>
              <span className={detailStyle.textTitle}>
                실시간 타임라인 기록 및 목표 확인
              </span>
              <span className={detailStyle.textContent}>
                [기록] 원터치로 현재 활동(공부, 운동, 휴식 등) 시작/종료 기록
                (스톱워치/타이머 기능 내장). [목표] 오늘 완료해야 할 습관 목록
                및 진행률 직관적 표시. [요약] 당일 활동 시간 및 목표 달성 현황
                즉시 확인.
              </span>
            </div>
            <img
              src={bgTexture}
              alt="texutre"
              className={detailStyle.bgTexture}
            />
          </div>
          <div className={detailStyle.itemR}>
            <img
              src={bgTexture}
              alt="texutre"
              className={detailStyle.bgTexture}
            />
            <div className={detailStyle.textDiv}>
              <span className={detailStyle.textTitle}>
                실시간 타임라인 기록 및 목표 확인
              </span>
              <span className={detailStyle.textContent}>
                [기록] 원터치로 현재 활동(공부, 운동, 휴식 등) 시작/종료 기록
                (스톱워치/타이머 기능 내장). [목표] 오늘 완료해야 할 습관 목록
                및 진행률 직관적 표시. [요약] 당일 활동 시간 및 목표 달성 현황
                즉시 확인.
              </span>
            </div>
          </div>
          <div className={detailStyle.itemL}>
            <div className={detailStyle.textDiv}>
              <span className={detailStyle.textTitle}>
                실시간 타임라인 기록 및 목표 확인
              </span>
              <span className={detailStyle.textContent}>
                [기록] 원터치로 현재 활동(공부, 운동, 휴식 등) 시작/종료 기록
                (스톱워치/타이머 기능 내장). [목표] 오늘 완료해야 할 습관 목록
                및 진행률 직관적 표시. [요약] 당일 활동 시간 및 목표 달성 현황
                즉시 확인.
              </span>
            </div>
            <img
              src={bgTexture}
              alt="texutre"
              className={detailStyle.bgTexture}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
