import AddTouristsSpot from "./AddTouristsSpot";
import AllTouristsSpot from "./AllTouristsSpot";
import Hero from "./Hero";
import MyList from "./MyList";
import TouristsSpot from "./TouristsSpot";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <TouristsSpot/>
            <AddTouristsSpot></AddTouristsSpot>
            <AllTouristsSpot></AllTouristsSpot>
            <MyList></MyList>
        </div>
    );
};

export default Home;