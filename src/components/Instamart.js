import { useState } from "react";

const Section = ({title,description,isVisible,setVisible})=>{
     return(
        <div className="border border-solid border-black p-1 m-1 w-[80vw]">
        <h2 className="text-xl font-bold p-1 m-2">{title}</h2>
        {isVisible? 
        (   <>
            <button className="border border-solid border-black p-1 m-2"
             onClick={()=>setVisible(false)}
            >Hide</button>
            <p className="text-sm p-1 m-1">{description}</p>
            </>
        ):
        (
            <button className="border border-solid border-black p-1 m-2"
            onClick={()=>setVisible(true)}
            >Show</button>
        )}
        </div>
     )
};

const Instamart = ()=>{
    const [visibleSection,setVisibleSection] = useState("about");
    return(
        <div className="mt-28">
         <h1 className="text-3xl p-2 m-1 ">Instamart Page</h1>

       <Section title={"About Instamart"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis scelerisque odio, ac eleifend lacus. Sed semper purus sit amet nulla pulvinar, vehicula pulvinar sem venenatis. In tempor sapien ante, at rhoncus magna aliquet ut. Pellentesque volutpat augue sed fringilla dictum. Phasellus laoreet quis metus sit amet interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris tempus nulla sapien, sit amet ornare erat interdum sed. Donec porttitor nulla euismod metus pretium, non finibus diam venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum rutrum arcu eget laoreet. In hac habitasse platea dictumst. Curabitur congue mattis mi, ac consequat nisl accumsan vel. Proin lacus ligula, dapibus vitae luctus vel, ultricies a sem. Donec vel laoreet nulla."}
        isVisible = {visibleSection === "about"}
       setVisible = {(flag)=>(flag)?setVisibleSection("about"):setVisibleSection("")}
       />

       <Section title={"Team"} description={"In non libero sit amet dolor semper imperdiet. Curabitur imperdiet finibus arcu, et feugiat tellus efficitur quis. Pellentesque leo sapien, commodo eget tellus eu, fringilla blandit elit. Nullam ut nibh eget ligula volutpat dictum et id turpis. Pellentesque lacus libero, commodo vitae dui sit amet, interdum vestibulum sapien. Fusce gravida varius condimentum. Nullam ut ornare nulla. Curabitur vitae urna a sapien eleifend auctor. Proin nec condimentum felis. Integer rutrum tellus posuere scelerisque scelerisque. Vivamus sed ornare lacus. Cras lobortis consequat dapibus. Nunc nibh lectus, mollis sed porttitor in, cursus at sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean at dignissim lectus."}
       isVisible = {visibleSection === "team"}
       setVisible = {(flag)=>(flag)?setVisibleSection("team"):setVisibleSection("")}
       />

       <Section title={"Careers"} description={"In eget quam nibh. Vestibulum cursus feugiat tincidunt. In hac habitasse platea dictumst. Integer mollis purus ipsum, ut ultrices nunc egestas ut. Vestibulum auctor efficitur augue sit amet elementum. Nulla enim lectus, ultrices eget hendrerit id, dapibus a nulla. Sed efficitur placerat nunc id laoreet. Praesent dignissim aliquam ultricies. Phasellus blandit lorem ut egestas convallis. In tincidunt non risus at cursus. Integer luctus lectus fringilla, tempus felis eu, aliquet mi. Pellentesque pretium tristique elementum. Sed eget venenatis metus. Nam semper vel sem id porta. Nam quis nunc eget nulla ornare lobortis."}
       isVisible = {visibleSection === "careers"}
       setVisible = {(flag)=>(flag)?setVisibleSection("careers"):setVisibleSection("")}
       />

       <Section title={"Products"} description={"Maecenas lobortis nunc nec cursus tempus. Suspendisse potenti. Phasellus maximus turpis non purus dapibus sagittis. Vivamus sem nisi, sodales a nunc eget, vehicula sagittis sem. Ut vitae nunc at leo malesuada consectetur molestie in felis. Praesent pulvinar leo vel dui venenatis, sit amet iaculis sapien imperdiet. Sed enim odio, mattis eu turpis vel, ultricies viverra nulla. Nunc scelerisque lectus sollicitudin pellentesque porta. Mauris sodales lorem quis felis suscipit rutrum."}
       isVisible = {visibleSection === "products"}
       setVisible = {(flag)=>(flag)?setVisibleSection("products"):setVisibleSection("")}
       />
        </div>
    )
};

export default Instamart;