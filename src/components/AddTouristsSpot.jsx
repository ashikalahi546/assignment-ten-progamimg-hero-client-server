import Swal from "sweetalert2";

const AddTouristsSpot = () => {
  const handleAddTourist = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const country = form.country.value;
    const sport = form.sport.value;
    const seasonality = form.seasonality.value;
    const location = form.location.value;
    const average = form.average.value;
    const time = form.time.value;
    const total = form.total.value;
    const image = form.image.value;
    const short = form.short.value;

    const allAddValue = {
      name,
      email,
      country,
      sport,
      seasonality,
      location,
      average,
      time,
      total,
      image,
      short,
    };
    console.log(allAddValue);
    fetch("https://assignment-server-rho-snowy.vercel.app/travelers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allAddValue),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "user add successfully",
            icon: "success",
            confirmButtonText: "Success",
          });
        }
        console.log(data);
      });
  };

  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold text-center">
        Add <span className="text-pink-500">Tourists Sport</span>
      </h1>
      <form onSubmit={handleAddTourist} className="w-8/12 mx-auto">
        <div className="flex gap-5 mt-5">
          <input
            type="text"
            placeholder="User name"
            name="name"
            className="input input-bordered input-primary w-full"
          />
          <input
            type="text"
            placeholder="Enter Your Email"
            name="email"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div className="flex gap-5 mt-5">
          <input
            type="text"
            placeholder="Country name"
            name="country"
            className="input input-bordered input-primary w-full"
          />
          <input
            type="text"
            placeholder="Sport name"
            name="sport"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div className="flex gap-5 mt-5">
          <input
            type="text"
            placeholder="Seasonality"
            name="seasonality"
            className="input input-bordered input-primary w-full"
          />
          <input
            type="text"
            placeholder="Location"
            name="location"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div className="flex gap-5 mt-5">
          <input
            type="text"
            placeholder="Average cost per person"
            name="average"
            className="input input-bordered input-primary w-full"
          />
          <input
            type="text"
            placeholder="Travel Time"
            name="time"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div className="flex mt-5 gap-5">
          <div className="flex flex-col gap-5  w-6/12">
            <input
              type="text"
              placeholder="Total visitor per year?"
              name="total"
              className="input input-bordered input-primary w-full"
            />
            <input
              type="text"
              placeholder="Upload an image"
              name="image"
              className="input input-bordered input-primary w-full"
            />
          </div>

          <textarea
            name="short"
            className="textarea textarea-primary w-6/12"
            placeholder="Short Description"
          ></textarea>
        </div>
        <div className="w-20 mx-auto mt-5">
          <button className="bg-pink-500 px-6 py-2 text-white rounded-lg font-medium hover:bg-pink-600 duration-150 delay-150">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTouristsSpot;
