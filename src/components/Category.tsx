import categoryStyle from "../css/components/categoryStyle.module.css";
import { useNavigate } from "react-router";

type Props = {
  korText: string;
};

export default function Category({ korText }: Props) {
  const navigate = useNavigate();

  const engText: Record<string, string> = {
    테크: "Technology",
    쇼핑: "Shopping",
    소셜: "Social",
    금융: "Finance",
    라이프스타일: "Life Style",
  };

  const items = [
    {
      title: "Code Mate",
      subtitle: ": 개발자 Q&A 챗봇",
      description:
        "초보 개발자들의 자주 묻는 에러에 대해 실시간으로 답변하고 해결책을 제시하는 AI 챗봇 서비스.",
      to: "/detail",
    },
    {
      title: "Dev Hub",
      subtitle: ": 협업 커뮤니티 플랫폼",
      description:
        "개발자들이 코드 리뷰, 프로젝트 협업, 기술 토론을 자유롭게 할 수 있는 공간.",
      to: "/detail",
    },
    {
      title: "Bug Tracker",
      subtitle: ": 팀별 이슈 관리 시스템",
      description:
        "프로젝트의 버그를 체계적으로 추적하고 해결 과정을 시각화하는 생산성 툴.",
      to: "/detail",
    },
    {
      title: "AI Docs",
      subtitle: ": 문서 자동 생성 도우미",
      description:
        "API나 코드에서 자동으로 기술 문서를 생성해주는 인공지능 문서화 도구.",
      to: "/detail",
    },
  ];

  return (
    <div className={categoryStyle.categoryDiv}>
      <div className={categoryStyle.categoryTitleDiv}>
        <span className={categoryStyle.categoryKorTitle}>{korText}</span>
        <span className={categoryStyle.categoryEngTitle}>
          {engText[korText]}
        </span>
      </div>

      <div className={categoryStyle.categoryContent}>
        {items.map((item, idx) => (
          <div
            key={idx}
            className={categoryStyle.categoryContentItem}
            onClick={() => navigate(item.to)}
          >
            <div className={categoryStyle.itemImg}></div>
            <div className={categoryStyle.itemTextDiv}>
              <span className={categoryStyle.itemText}>{item.title}</span>
              <span className={categoryStyle.itemText}>{item.subtitle}</span>
              <span className={categoryStyle.itemInfo}>{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
