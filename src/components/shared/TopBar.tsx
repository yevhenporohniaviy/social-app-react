import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { useEffect } from "react";
import { useUSerContext } from "@/context/AuthContext";


const TopBar = () => {
  const { user } = useUSerContext();
  const navigate = useNavigate();
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  
  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess]); 
  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={130}
            height={325}
          />
        </Link>

        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="shad-button_ghost"
            onClick={() => signOut()}
          >
            <img src="/assets/icons/logout.svg" alt="logo" />
          </Button>
          <Link to={`/profile/${user.id}`} className="flex-center gap-3">
            <img
              className="h-8 w-8 rounded-full"
              src={user.imageUrl || '/assets/icons/profile-placeholder.svg'}
              alt="avatar user" />
          </Link>
        </div>
      </div>
    </section>
  );
}
 
export default TopBar;