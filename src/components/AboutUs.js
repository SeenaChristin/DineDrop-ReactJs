import { useContext } from "react";
import UserContext from "../utils/UserContext";

const AboutUs = () =>{
    const {user} = useContext(UserContext);
    return (
       <div className="mt-28">
        <h1>This is the About Us page of the React Project</h1>
        <h4>{user.name}-{user.email}</h4>
       </div>
    )
}

export default AboutUs;