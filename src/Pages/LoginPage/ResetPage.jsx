import { useRef } from "react";
import UseAuth from "../../Hook/UseAuth";
import Swal from "sweetalert2";

const ResetPage = () => {
  const emailRef = useRef(null);
  const { resetEmail } = UseAuth();

  const handleResetPass = () => {
    const email = emailRef.current.value;
    if (!email) {
      Swal.fire("Enter an email");
      return;
    }
    resetEmail(email)
      .then(() => Swal.fire("Check your email"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center bg-[#cecceb] h-screen">
      <div className="bg-white shadow-md rounded">
        <input
          type="text"
          ref={emailRef} // Assign the ref here
          placeholder="Enter your email"
        />
        <button onClick={handleResetPass} className="green-btn">
          Get Reset Link
        </button>
      </div>
    </div>
  );
};

export default ResetPage;
