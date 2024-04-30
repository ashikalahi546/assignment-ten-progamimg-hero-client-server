import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleList = ({ singleList,setTravelars,travelars }) => {
  const { image, country, seasonality, total, short, _id, sport } = singleList;

 const handleDelete = (_id) =>{
  console.log(_id)
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {

    
console.log('delete confirm')

fetch(`https://assignment-server-rho-snowy.vercel.app/${_id}`,{
    method:"DELETE"
})
.then(res => res.json())
.then(data => {
    console.log(data)
    if(data.deletedCount  > 0){
      Swal.fire({
        title: "Deleted!",
        text: "your Travelar has been deleted.",
        icon: "success"
      });
        const remaining = travelars.filter(tra =>tra._id !==_id)
      setTravelars(remaining)
    
    }
})
}
  });


 }
  return (
    <div>
      <div className="w-8/12 mx-auto border border-[#2A8790] shadow rounded-lg p-7 flex gap-6 items-center mb-10">
        <div className="">
          <img className="w-80 h-56" src={image} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-medium">{sport}</h1>
          <p>{short}</p>
          <div className="flex items-center gap-0.5">
            <MdLocationOn className="text-pink-500" />
            <span className="font-medium">{country}</span>
          </div>
          <div>
            <div>
              <h3 className="flex gap-1 items-center ">
                <span className="text-2xl font-bold ">${total}</span>
                <span>/per person</span>
              </h3>
            </div>
            <div className="mt-2">
           <Link to={`/updatetravelars/${_id}`}>
           <button className="bg-pink-500 hover:bg-pink-600 duration-150 delay-150 px-4 py-2 rounded-lg text-white font-medium">
                Update
              </button>
           </Link>
              <button onClick={()=>handleDelete(_id)} className="ml-5 hover:bg-[#F35050] border border-[#F35050]  duration-150 delay-150 px-4 py-2 rounded-lg text-[#F35050] hover:text-white font-medium">
                Delate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleList;
