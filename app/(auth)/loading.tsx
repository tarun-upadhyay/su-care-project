import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import TopLoadingBar from "../Components/Navbar/TopAlertBar/TopLoadingBar";
// Five-line loading skeleton
const loading = () => {
  return (
    <div className="w-4/5 m-auto">
      <TopLoadingBar />
      <Skeleton count={5} />{" "}
    </div>
  );
};

export default loading;
