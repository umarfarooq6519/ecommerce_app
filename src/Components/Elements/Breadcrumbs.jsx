import { Link } from "react-router-dom";

export default function BreadCrumbs(props) {
  const { text1, text2 } = props;

  return (
    <div className="text-base breadcrumbs">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={`/${text1}`}>{text1}</Link>
        </li>
        {text2 ? (
          <li>
            <Link to={`/${text1}/${text2}`}>{text2}</Link>
          </li>
        ) : null}
      </ul>
    </div>
  );
}
