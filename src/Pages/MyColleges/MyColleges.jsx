import { useForm } from "react-hook-form";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Swal from "sweetalert2";
import UseAuth from "../../Hook/UseAuth";
import { useEffect, useState } from "react";
import useAdmitted from "../../Hook/useAdmitted";
import FadeAnimations from "../../Components/Animations/FadeAnimations";
import { Player } from "@lottiefiles/react-lottie-player";

const MyColleges = () => {
  const [review, setreview] = useState([]);
  const { user } = UseAuth();
  const { admitted } = useAdmitted();

  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => {
        setreview(data);
      })
      .catch((error) => console.error(error));
  }, [user]);
  console.log(review);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // for swal notification
  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    showConfirmButton: false,
    timer: 6000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const onSubmit = (data) => {
    const reviewBody = {
      ...data,
      image: user?.photoURL,
      name: user?.displayName,
      email: user?.email,
    };
    console.log(reviewBody);

    fetch(`http://localhost:5000/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewBody),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount == 1 || data.insertedId) {
          Toast.fire({
            icon: "success",
            title: "Review has given successfully",
          });
        }
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      {admitted ? (
        <div className="mx-[8%] mb-[6%]">
          <form onSubmit={handleSubmit(onSubmit)} className="relative">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
              {/* review  */}
              <div className="form-control w-full mb-4">
                <label className="label block text-gray-700 text-sm font-bold">
                  <span className="label-text font-semibold">Description</span>
                </label>
                <textarea
                  className="textarea textarea-bordered input-style"
                  placeholder="Provide review here"
                  defaultValue={review[0]?.review}
                  {...register("review", { required: true })}
                ></textarea>
                {errors.review && (
                  <span className="text-red-600">Review is required</span>
                )}
              </div>

              {/* rating  */}
              <div className="form-control w-full max-w-xs">
                <label className="label block text-gray-700 text-sm font-bold">
                  <span className="label-text font-semibold">
                    Select Rating
                  </span>
                </label>
                <div className="input-group">
                  <select
                    {...register("rating", { required: true })}
                    className="select select-bordered text-black"
                  >
                    <option selected value="">
                      Select Rating
                    </option>
                    <option selected={review[0]?.rating == "1"} value="1">
                      1
                    </option>
                    <option selected={review[0]?.rating == "2"} value="2">
                      2
                    </option>
                    <option selected={review[0]?.rating == "3"} value="3">
                      3
                    </option>
                    <option selected={review[0]?.rating == "4"} value="4">
                      4
                    </option>
                    <option selected={review[0]?.rating == "5"} value="5">
                      5
                    </option>
                  </select>
                  {errors.rating && (
                    <span className="text-red-600 text-sm">
                      Rating need to be given
                    </span>
                  )}
                </div>
              </div>
            </div>
            <input
              className="green-small-btn cursor-pointer font-bold absolute bottom-0 right-0"
              type="submit"
              value="Add review"
            />
          </form>
        </div>
      ) : (
        <div className="pt-[7%] mb-[5%]">
          <FadeAnimations
            direction="down"
            once={false}
            delay={0.3}
            duration={0.5}
          >
            <Player
              className="h-[300px] "
              autoplay
              loop
              src="/empty.json"
            ></Player>
          </FadeAnimations>

          <p className="text-2xl font-bold text-center mt-[3%]">
            You have not admitted yet
          </p>
        </div>
      )}

      <Footer></Footer>
    </div>
  );
};

export default MyColleges;
