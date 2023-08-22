import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <section className="bg-gray-950  text-white">
      <div className="w-[90%] max-w-5xl mx-auto  min-h-[93vh]  pt-32 ">
        <h2 className="pb-8 text-3xl font-medium text-center">Sign in</h2>
        <form className="bg-gray-800 mx-auto flex flex-col gap-6 max-w-sm pt-10 pb-5 px-5 rounded-t-lg">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="px-2 h-8 rounded-sm outline-blue-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="px-2 h-8 rounded-sm outline-blue-400"
          />
          <button className="bg-blue-500 py-1 rounded-md hover:bg-blue-700 duration-300">
            Sign in
          </button>
        </form>
        <div className="bg-gray-800 max-w-sm mx-auto px-5 pb-10 rounded-b-lg flex items-center gap-2">
          <p>Don't have an account?</p>
          <Link to="/sign-up" className="text-[0.875rem] text-blue-300">
            Sign up
          </Link>
        </div>
      </div>
    </section>
  );
};
export default SignIn;
