import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import UseAuth from "../../Hook/UseAuth";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import PageBanner from "../../Components/PageBanner/PageBanner";
import { useParams } from "react-router-dom";
import UseAllColleges from "../../Hook/UseAllColleges";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const CollegeFormPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [colleges] = UseAllColleges();
  const param = useParams();
  // console.log(param.id);

  const loadedData = colleges.filter((clg) => clg._id === param.id);
  console.log(loadedData);
  //create object for pagebanner section
  const details = {
    image: loadedData[0]?.image,
    name: loadedData[0]?.name,
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { user } = UseAuth();

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
      dateOfBirth: startDate,
      college_name: loadedData[0]?.name,
      college_id: param.id,
    };
    console.log(newCollege);

    //todo here will be update . here you update the user
    // fetch(`http://localhost:5000/`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newCollege),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.data.insertedId) {
    //       reset();
    //       Toast.fire({
    //         icon: "success",
    //         title: "New blogs create successfully",
    //       });
    //     }
    //   });
  };
  return (
    <div>
      <Navbar></Navbar>
      <PageBanner details={details}></PageBanner>
      <SectionTitle heading="Admission Form"></SectionTitle>
      <div className="mx-[8%] mb-[6%]">
        <form onSubmit={handleSubmit(onSubmit)} className="relative">
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            {/* name  */}
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                // readOnly
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
                // readOnly
                type="text"
                placeholder="Email"
                value={user?.email}
                {...register("std_email", { required: true, maxLength: 25 })}
                className="input-style"
              />
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

            {/* date of birth */}
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">Date of Birth</span>
              </label>
              <DatePicker
                selected={startDate} // use state to store selected date
                onChange={(date) => setStartDate(date)} // handle date change
                dateFormat="MM/dd/yyyy" // format for displaying date
                className="input-style"
              />
            </div>

            {/* image url  */}
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="Image URL"
                {...register("image", { required: true, maxLength: 1000 })}
                className="input-style"
              />
              {errors.image && (
                <span className="text-red-600">ImageURL is required</span>
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

export default CollegeFormPage;
