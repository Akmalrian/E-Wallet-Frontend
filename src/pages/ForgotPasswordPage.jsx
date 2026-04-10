import ContentForgotPassword from "../component/ContentForgotPassword";

const ForgotPasswordPage = () => (
  <main className="bg-primary h-[130vh] w-full flex justify-center items-center -z-2 absolute">
    <img
          className="absolute -z-1 w-234 h-234"
          src="/image/Ellipse 1 (1).svg"
          alt="dim background"
        />
    <section className="flex md:w-137.5 w-87.5 md:h-111.5 h-105 absolute">
      <div className="bg-white flex-1 rounded-2xl">
        <ContentForgotPassword /></div>
    </section>
  </main>
);
export default ForgotPasswordPage;