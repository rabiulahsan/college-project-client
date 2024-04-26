import Swal from "sweetalert2";
import PageBanner from "../../Components/PageBanner/PageBanner";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import UseAuth from "../../Hook/UseAuth";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const [users, setUsers] = useState([]);
  const { user } = UseAuth();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const loggedUser = users.filter((u) => u.email == user?.email);
  // console.log(loggedUser[0]);
  const admitted = loggedUser[0]?.admitted;
  console.log(admitted);

  const details = {
    image:
      "https://brand.cornell.edu/assets/images/photography/UP_2017_1304_147_select.jpg",
    name: "Update Your Profile",
  };

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
    const userBody = {
      ...data,
    };
    console.log(userBody);

    fetch(`http://localhost:5000/users/${loggedUser[0]?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userBody),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount == 1) {
          reset();
          navigate("/profile");
          Toast.fire({
            icon: "success",
            title: "Profile update successfully",
          });
        }
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <PageBanner details={details}></PageBanner>
      <SectionTitle heading="Update Profile"></SectionTitle>
      <div className="mx-[8%] mb-[6%]">
        <form onSubmit={handleSubmit(onSubmit)} className="relative">
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            {/* name  */}
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                defaultValue={loggedUser[0]?.name}
                placeholder="Name"
                {...register("name", { required: true, maxLength: 40 })}
                className="input-style"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>

            {/* email  */}
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                readOnly
                type="text"
                placeholder="Email"
                value={user?.email}
                {...register("email", { required: true, maxLength: 25 })}
                className="input-style"
              />
            </div>

            {/* College  */}
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">College</span>
              </label>
              {admitted ? (
                <input
                  type="text"
                  placeholder="College Name"
                  defaultValue={loggedUser[0]?.college_name}
                  {...register("college_name", {
                    required: true,
                    maxLength: 40,
                  })}
                  className="input-style"
                />
              ) : (
                <p className="font-semibold text-lg text-green-500">
                  At first you have to admit a college
                </p>
              )}

              {errors.college && (
                <span className="text-red-600">College is required</span>
              )}
            </div>

            {/* phone  */}
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">Phone</span>
              </label>
              <input
                type="text"
                defaultValue={loggedUser[0]?.phone}
                placeholder="Phone"
                {...register("phone", { required: true, maxLength: 30 })}
                className="input-style"
              />
              {errors.phone && (
                <span className="text-red-600">phone is required</span>
              )}
            </div>

            {/* address  */}
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">Address</span>
              </label>
              <textarea
                className="textarea textarea-bordered input-style"
                placeholder="Address"
                defaultValue={loggedUser[0]?.address}
                {...register("address", { required: true })}
              ></textarea>
              {errors.address && (
                <span className="text-red-600">address is required</span>
              )}
            </div>
          </div>
          <input
            className="green-small-btn cursor-pointer font-bold absolute bottom-0 right-0"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateProfile;
