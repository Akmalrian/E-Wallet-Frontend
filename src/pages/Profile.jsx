import { useEffect } from "react";
import HeaderDashboard from "../component/header/HeaderDashboard";
import NavigationDashboard from "../component/header/NavigationDashboard";
import ProfilePicture from "../component/section/ProfilePicture";

function Profile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main>
      <section className="grid grid-cols-[1fr_3fr_1.5fr] gap-15 font-montserrat max-md:grid-cols-1 max-md:gap-0">
        <nav>
          <NavigationDashboard />
        </nav>
        <div>
          <ProfilePicture />
        </div>
      </section>
    </main>
  );
}
export default Profile;
