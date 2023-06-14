
   const ShimmerUi = () =>{
        return(
            <>
            <div className="filter">
            <button 
            className="filter-btn"
            >Top-rated Restaurants
            </button>
            </div>
            <div className="shimmer-container">
                {Array(10).fill("").map((e,index)=>(
                  <div key={index} className="res-card shimmer" ></div>
                ))}
            </div>
            </>
        );
    };
    
export default ShimmerUi;