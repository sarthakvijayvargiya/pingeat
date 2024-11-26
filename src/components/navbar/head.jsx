import logo from "../../assets/images/logo.png";
import { colors } from "../../utils/color-shade";
function Head() {
  return (
    <div className="w-full h-12 shadow-lg flex flex-row justify-center items-center">
      <div className="w-[70%] flex justify-between">
        <div className="flex flex-row">
          <img className="w-24 mr-2" src={logo} />
          <div className="flex">
            <p className="font-semibold border-b-2 border-black">Other</p>
            <i
              className={`fi ml-1  mt-1 fi-rr-angle-small-down ${colors.HOVERORANGE}`}
            ></i>
          </div>
        </div>
        <div className="flex flex-row gap-8 justify-center items-center">
          <div className="flex">
            <i className="fi fi-rr-briefcase-blank"></i>
            <p>Pingeat Corporate</p>
          </div>
          <div className="flex">
            <i className="fi fi-rr-search"></i>
            <p>Search</p>
          </div>
          <div className="flex">
            <i className="fi fi-tr-badge-percent"></i>
            <p>Offers</p>
          </div>
          <div className="flex">
            <i className="fi fi-rs-info"></i> <p>Help</p>
          </div>
          <div className="flex">
            <i className="fi fi-tr-sign-in-alt"></i>
            <p>Sign In</p>
          </div>
          <div className="flex">
            <i className="fi fi-tr-cart-shopping-fast"></i>
            <p>Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Head;
