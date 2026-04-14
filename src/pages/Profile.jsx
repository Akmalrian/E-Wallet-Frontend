import HeaderDashboard from "../component/header/HeaderDashboard";
import NavigationDashboard from "../component/header/NavigationDashboard";
import ProfilePicture from "../component/section/ProfilePicture";

const Profile = () => (
  <main>
    <section className="grid grid-cols-[1fr_3fr_1.5fr] gap-15 font-montserrat">
        <nav>
            <NavigationDashboard />
        </nav>
        <div>
          <ProfilePicture />
        </div>
    </section>
  </main>
);
export default Profile;
