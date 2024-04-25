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
    const newBlog = {
      ...data,
      email: user?.email,
    };
    console.log(newBlog);
    fetch(`http://localhost:5000/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBlog),
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
            {/* place name  */}
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">Place Name</span>
              </label>
              <input
                type="text"
                placeholder="Place Name"
                {...register("placeName", { required: true, maxLength: 25 })}
                className="input-style"
              />
              {errors.class_name && (
                <span className="text-red-600">Class Name is required</span>
              )}
            </div>

            {/* writer  */}
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">Writer</span>
              </label>
              <input
                readOnly
                type="text"
                value={user?.displayName}
                {...register("writer", { required: true, maxLength: 120 })}
                className="input-style"
              />
            </div>

            {/* location  */}
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">Location</span>
              </label>
              <input
                type="text"
                placeholder="Location"
                {...register("location", { required: true, maxLength: 30 })}
                className="input-style"
              />
              {errors.location && (
                <span className="text-red-600">Location is required</span>
              )}
            </div>

            {/* category */}
            <div className="form-control w-full max-w-xs">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">
                  Select Category
                </span>
              </label>
              <div className="input-group">
                <select
                  {...register("category", { required: true })}
                  className="select select-bordered text-black"
                >
                  <option selected value="">
                    Select Category
                  </option>
                  <option value="hike">Hike</option>
                  <option value="national-park">National Park</option>
                  <option value="village">Village</option>
                  <option value="city">City</option>
                  <option value="lake">Lake</option>
                  <option value="forest">Forest</option>
                  <option value="beach">Beach</option>
                  <option value="gracier">Gracier</option>
                  <option value="canyon">Canyon</option>
                  <option value="monument">Monument</option>
                  <option value="waterfall">Waterfall</option>
                  <option value="mountain">Mountain</option>
                </select>
                {errors.category && (
                  <span className="text-red-600 text-sm">
                    Category need to be selected
                  </span>
                )}
              </div>
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

            {/* country  */}
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">Country</span>
              </label>
              <input
                type="text"
                placeholder="Country"
                {...register("country", { required: true, maxLength: 30 })}
                className="input-style"
              />
              {errors.country && (
                <span className="text-red-600">Country is required</span>
              )}
            </div>
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered input-style"
                placeholder="Description"
                {...register("description", { required: true })}
              ></textarea>
              {errors.description && (
                <span className="text-red-600">Description is required</span>
              )}
            </div>
          </div>
          <input
            className="orange-small-btn cursor-pointer font-bold absolute bottom-0 right-0"
            type="submit"
            value="Add Blog"
          />
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CollegeFormPage;
