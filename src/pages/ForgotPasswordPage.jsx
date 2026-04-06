import ContentForgotPassword from "../component/ContentForgotPassword";

const ForgotPasswordPage = () => (
  <main className="bg-[#2948FF] h-[130vh] w-full flex justify-center items-center -z-2 absolute">
    <img
          className="absolute -z-1 w-[936px] h-[936px]"
          src="/src/assets/Ellipse 1 (1).svg"
          alt="dim background"
        />
    <section className="flex w-[550px] h-[446px] absolute">
      <div className="bg-white flex-1 rounded-2xl">
        <ContentForgotPassword /></div>
    </section>
  </main>
);
export default ForgotPasswordPage;