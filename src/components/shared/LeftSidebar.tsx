import { sidebarLinks } from "@/constants";
import { useUSerContext } from "@/context/AuthContext";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { cn } from "@/lib/utils";
import { INavLink } from "@/types";
import { useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Button } from "../ui/button";

const LeftSidebar = () => {
  const { pathname } = useLocation();
  const { user } = useUSerContext();
  const navigate = useNavigate();
  const { mutate: signOut, isSuccess } = useSignOutAccount();

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess]); 

  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={170}
            height={36}
          />
        </Link>
        <Link className="flex gap-3 items-center" to={`/profile/${user.id}`}>
          <img
            className="h-14 w-14 rounded-full"
            src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
            alt="avatar user"
          />
          <div className="flex flex-col ">
            <p className="body-bold">{user.name}</p>
            <p className="small-regular text-light-3">@{user.name}</p>
          </div>
        </Link>
        <ul className=" flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;

            return (
              <li
                className={cn(
                  "group leftsidebar-link",
                  isActive && "bg-primary-500"
                )}
                key={link.label}
              >
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4"
                >
                  <img
                    src={link.imgURL}
                    className={`group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <Button
        variant="ghost"
        className="shad-button_ghost"
        onClick={() => signOut()}
      >
        <img src="/assets/icons/logout.svg" alt="logo" />
        <p className="small-medium lg:base-medium">
          Logout
        </p>
      </Button>
    </nav>
  );
}
 
export default LeftSidebar;