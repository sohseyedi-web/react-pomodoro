import Select from "../common/Select";
import { Link } from "react-router-dom";
import * as RiIcon from "react-icons/ri";

const Profile = () => {
  return (
    <>
      <h4 className="title">
        سلام ، سهیل سیدی
      </h4>
      <Select title="درباره پومودورو" type="org" />
      <Select title="درباره ما" type="fake" />
      <div className="my-5 flex items-center justify-center gap-x-8">
        <Link
          to={"https://github.com/sohseyedi-web"}
          className="scale-100 hover:scale-110 transition-all duration-300"
        >
          <RiIcon.RiGithubLine size={28} />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/sohseyedi/"}
          className="scale-100 hover:scale-110 transition-all duration-300"
        >
          <RiIcon.RiLinkedinLine size={28} />
        </Link>
        <Link
          to={"https://soheils.vercel.app/"}
          className="scale-100 hover:scale-110 transition-all duration-300"
        >
          <RiIcon.RiComputerLine size={28} />
        </Link>
      </div>
    </>
  );
};

export default Profile;
