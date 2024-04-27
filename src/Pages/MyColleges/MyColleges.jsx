import { useForm } from "react-hook-form";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Swal from "sweetalert2";
import UseAuth from "../../Hook/UseAuth";

const MyColleges = () => {
  const { user } = UseAuth();
  const {
    register,
    handleSubmit,
    reset,
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
        if (data.modifiedCount == 1) {
          reset();
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
                {...register("review", { required: true })}
              ></textarea>
              {errors.review && (
                <span className="text-red-600">Review is required</span>
              )}
            </div>

            {/* rating  */}
            <div className="form-control w-full max-w-xs">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">Select Rating</span>
              </label>
              <div className="input-group">
                <select
                  {...register("rating", { required: true })}
                  className="select select-bordered text-black"
                >
                  <option selected value="">
                    Select Rating
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
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

      <Footer></Footer>
    </div>
  );
};

export default MyColleges;
