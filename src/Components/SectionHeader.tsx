import "../Styles.css/SectionHeader.css";
interface Props {
  text: string;
  classNameValue?: string;
  image?: string;
}

function SectionHeader({ text, classNameValue, image }: Props) {
  return (
    <div className="section-header__div">
      <p className="section-header__text">{text}</p>
    </div>
  );
}

export default SectionHeader;
