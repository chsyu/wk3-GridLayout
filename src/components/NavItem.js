import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";
import { setPage } from "../actions"

export default function NavItem(props) {
  const { children, to, className, activeClassName, onClose } = props;
  const { state, dispatch } = useContext(StoreContext);
  const url = to === "/admin/feed-products" ? to : `/products${to}`;

  const onClick = () => {
    setPage(dispatch, to, children);
    onClose && onClose();
  };

  return (
    <Link to={url}>
      <div
        onClick={onClick}
        className={`
            ${className} 
            ${state.navBar.activeItem === to ? activeClassName : ""}`}
      >
        {children}
      </div>
    </Link>
  );
}
