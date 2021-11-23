import Loader from "react-loader-spinner";
import "./Skeleton.css";

export default function Skeleton() {
  return (
    <Loader
      className="Skeleton"
      type="Circles"
      color="#006eff"
      height={40}
      width={40}
      timeout={3000} //3 secs
    />
  );
}
