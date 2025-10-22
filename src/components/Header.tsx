import headerStyle from "../css/components/headerStyle.module.css";

export default function Header() {
  return (
    <>
      <header className={headerStyle.header}>
        <div className={headerStyle.headerLogoDiv}>
          <span className={headerStyle.snach}>SNACH</span>
          <span className={headerStyle.it}>IT</span>
        </div>
      </header>
    </>
  );
}
