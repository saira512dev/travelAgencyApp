import { sidebarItems } from "@/constants";
import { cn } from "@/lib/utils";
import { Link, NavLink } from "react-router";

type Props = {
  handleClick?: (value: handleClick) => void;
};

const NavItems = ({ handleClick }: Props) => {
  const user = {
    name: "Saira",
    email: "sairaabdullapa@gmail.com",
    image:
      "https://www.google.com/imgres?imgurl=https://images.pexels.com/photos/18549580/pexels-photo-18549580/free-photo-of-woman-in-headscarf-reading-book-by-tree.jpeg?auto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&imgrefurl=https://www.pexels.com/search/hijab%2520back/&h=750&w=500&tbnid=Xmu0EIwI5BeDZM&source=sa.im&tbnh=678&tbnw=452&usg=AI4_-kSjYu7G2gwA-SCw-J1z-FL77paZRg&vet=1&docid=-EHHFSggaNF-pM",
  };

  return (
    <section className="nav-items">
      <Link to="/" className="link-logo">
        <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
        <h1>TourVisto</h1>
      </Link>
      <div className="container">
        <nav>
          {sidebarItems.map(({ id, href, icon, label }) => (
            <NavLink to={href} key={id}>
              {({ isActive }: { isActive: boolean }) => (
                <div
                  className={cn("group nav-item", {
                    "bg-primary-100 !text-white": isActive,
                  })}
                  onClick={handleClick}
                >
                  <img
                    src={icon}
                    alt={label}
                    className={`group-hover:brightness-0 size-0 group-hover:invert 
                  ${isActive ? "brightness-0 invert" : "text-dark-200"} `}
                  />
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>
        <footer className="nav-footer">
          <img src="./assets/images/profile.jpg" alt="user-image" />
          <article>
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </article>
          <button
            onClick={() => {
              console.log("logout");
            }}
            className="cursor-pointer"
          >
            <img
              src="/assets/icons/logout.svg"
              alt="logout"
              className="size-6"
            />
          </button>
        </footer>
      </div>
    </section>
  );
};

export default NavItems;
