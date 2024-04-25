import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import UseAuth from "../../Hook/UseAuth";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import PageBanner from "../../Components/PageBanner/PageBanner";
import { useParams } from "react-router-dom";
import UseAllColleges from "../../Hook/UseAllColleges";

const CollegeFormPage = () => {
  const [colleges] = UseAllColleges();
  const param = useParams();
  console.log(param.id);

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
      email: user?.email,
    };
    console.log(newCollege);
    fetch(`http://localhost:5000/`, {
      method: "POST",
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
            title: "New blogs create successfully",
          });
        }
      });
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
                type="text"
                placeholder="Name"
                {...register("std_name", { required: true, maxLength: 25 })}
                className="input-style"
              />
              {errors.std_name && (
                <span className="text-red-600">Student Name is required</span>
              )}
            </div>

            {/* email  */}
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                {...register("std_email", { required: true, maxLength: 25 })}
                className="input-style"
              />
              {errors.std_email && (
                <span className="text-red-600">Email is required</span>
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
