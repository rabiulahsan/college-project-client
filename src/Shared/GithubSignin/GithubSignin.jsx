import { FiGithub } from "react-icons/fi";
import UseAuth from "../../Hook/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
const GithubSignin = () => {
  const { user, githubLogin } = UseAuth();
  // console.log(user);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGithubSignIn = () => {
    if (user) {
      alert("At first logout");
      return;
    } else {
      githubLogin()
        .then((result) => {
          const loggedInUser = result.user;
          const saveUser = {
            name: loggedInUser.displayName,
            email: loggedInUser.email,
            admitted: false,
          };
          fetch("https://college-facilities-server.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then(() => {
              navigate(from, { replace: true });
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <div
      className=" flex text-center  cursor-pointer font-semibold"
      onClick={handleGithubSignIn}
    >
      <span className="bg-black w-full p-2 text-white relative">
        <span className="text-2xl absolute left-4">
          <FiGithub></FiGithub>
        </span>
        Sign in With Github
      </span>
    </div>
  );
};

export default GithubSignin;
