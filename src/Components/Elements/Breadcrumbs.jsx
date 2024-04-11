export default function BreadCrumbs(props) {
    const { text1, text2 } = props;
  
    return (
      <div className="text-base breadcrumbs">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>{text1}</a>
          </li>
          <li>
            <a>{text2}</a>
          </li>
        </ul>
      </div>
    );
  }