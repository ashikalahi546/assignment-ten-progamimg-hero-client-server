import { useLoaderData } from "react-router-dom";


const TouristViewDetails = () => {
    const newdata = useLoaderData()
    console.log(newdata.length)
    const { _id, image, profile, title, description, price } = newdata ;
    return (
        <div>
            <img src={image} alt="" />
        </div>
    );
};

export default TouristViewDetails;