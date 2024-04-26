import Swal from "sweetalert2";
import PageBanner from "../../Components/PageBanner/PageBanner";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import UseAuth from "../../Hook/UseAuth";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const UpdateProfile = () => {
  const [users, setUsers] = useState([]);
  const { user } = UseAuth();
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const loggedUser = users.filter((u) => u.email == user?.email);
  console.log(loggedUser[0]);

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
    const newCollege = {
      ...data,
      user_id: user?._id,
      email: user?.email,
    };
    console.log(newCollege);

    fetch(`http://localhost:5000/users/${loggedUser[0]?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCollege),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.insertedId) {
          reset();
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
                placeholder="Name"
                value={user?.displayName}
                {...register("std_name", { required: true, maxLength: 25 })}
                className="input-style"
              />
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
                {...register("std_email", { required: true, maxLength: 25 })}
                className="input-style"
              />
            </div>

            {/* Colooege  */}
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">College</span>
              </label>
              <input
                type="text"
                placeholder="College"
                {...register("college", { required: true, maxLength: 40 })}
                className="input-style"
              />
              {errors.college && (
                <span className="text-red-600">College is required</span>
              )}
            </div>

            {/* subject  */}
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">Subject</span>
              </label>
              <input
                type="text"
                placeholder="Subject"
                {...register("subject", { required: true, maxLength: 30 })}
                className="input-style"
              />
              {errors.subject && (
                <span className="text-red-600">subject is required</span>
              )}
            </div>

            {/* phone  */}
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">Phone</span>
              </label>
              <input
                type="text"
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
