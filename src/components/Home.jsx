import AddTouristsSpot from "./AddTouristsSpot";
import AllTouristsSpot from "./AllTouristsSpot";
import Hero from "./Hero";
import MyList from "./MyList";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AddTouristsSpot></AddTouristsSpot>
            <AllTouristsSpot></AllTouristsSpot>
            <MyList></MyList>
        </div>
    );
};

export default Home;