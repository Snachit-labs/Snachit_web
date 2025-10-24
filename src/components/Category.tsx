import categoryStyle from "../css/components/categoryStyle.module.css"

type Props ={
    korText : string;
}

export default function Category({korText}:Props){
    const engText:{ [key:string]: string} = {
        "테크" : "Technology",
        "쇼핑" : "Shoppping",
        "소셜" : "Social",
        "금융" : "Finance",
        "라이프스타일" : "Life Style"
    }

    return(
        <div className={categoryStyle.categoryDiv}>
          <div className={categoryStyle.categoryTitleDiv}>
            <span className={categoryStyle.categoryKorTitle}>{korText}</span>
            <span className={categoryStyle.categoryEngTitle}>{engText[korText]}</span>
          </div>
          <div className={categoryStyle.categoryContent}>
            <div className={categoryStyle.categoryContentItem}>
              <div className={categoryStyle.itemImg}></div>
              <div className={categoryStyle.itemTextDiv}>
                <span className={categoryStyle.itemText}>Code Mate</span>
                <span className={categoryStyle.itemText}>: 개발자 Q&A 챗봇</span>
                <span className={categoryStyle.itemInfo}>초보 개발자들의 자주 묻는 에러에 대해 실시간으로 답변하고 해결책을 제시하는 AI 챗봇 서비스.</span>
              </div>
            </div><div className={categoryStyle.categoryContentItem}>
              <div className={categoryStyle.itemImg}></div>
              <div className={categoryStyle.itemTextDiv}>
                <span className={categoryStyle.itemText}>Code Mate</span>
                <span className={categoryStyle.itemText}>: 개발자 Q&A 챗봇</span>
                <span className={categoryStyle.itemInfo}>초보 개발자들의 자주 묻는 에러에 대해 실시간으로 답변하고 해결책을 제시하는 AI 챗봇 서비스.</span>
              </div>
            </div><div className={categoryStyle.categoryContentItem}>
              <div className={categoryStyle.itemImg}></div>
              <div className={categoryStyle.itemTextDiv}>
                <span className={categoryStyle.itemText}>Code Mate</span>
                <span className={categoryStyle.itemText}>: 개발자 Q&A 챗봇</span>
                <span className={categoryStyle.itemInfo}>초보 개발자들의 자주 묻는 에러에 대해 실시간으로 답변하고 해결책을 제시하는 AI 챗봇 서비스.</span>
              </div>
            </div><div className={categoryStyle.categoryContentItem}>
              <div className={categoryStyle.itemImg}></div>
              <div className={categoryStyle.itemTextDiv}>
                <span className={categoryStyle.itemText}>Code Mate</span>
                <span className={categoryStyle.itemText}>: 개발자 Q&A 챗봇</span>
                <span className={categoryStyle.itemInfo}>초보 개발자들의 자주 묻는 에러에 대해 실시간으로 답변하고 해결책을 제시하는 AI 챗봇 서비스.</span>
              </div>
            </div>
          </div>
        </div>
    )
}