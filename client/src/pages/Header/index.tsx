import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const user = {
    _id: "kajsdjka",
    role: "user",
  };

  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/search"}>
        <FaSearch />
      </Link>
      <Link to={"/cart"}>
        <FaShoppingBag />
      </Link>

      {user?._id ? (
        <>
          <button>
            <FaUser />
          </button>
          <dialog open={true}>
            <div>
              {user?.role === "admin" && (
                <Link to={"/admin/dashboard"}>Admin</Link>
              )}
            </div>
            <Link to={"/orders"}>Orders</Link>
            <button>
              <FaSignOutAlt />
            </button>
          </dialog>
        </>
      ) : (
        <Link to={"/login"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
