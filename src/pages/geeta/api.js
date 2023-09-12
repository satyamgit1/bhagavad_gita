// import React, { useState } from "react";

// function Api() {
//   const [chapters, setchapters] = useState([]);
  

//   React.useEffect(() => {
//     let url =  "https://bhagavadgitaapi.in/chapters/"
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setchapters(data);
//         //   setshow(data["results"]);
//       });
//   }, []);

//   return (
//     <>
    
      
//       {/* <h1>  Category :  {show?.type}</h1>
//       <img src= {show?.image?.medium} width="250" height="250"  />
//       <div  dangerouslySetInnerHTML={{__html:show?.summary}} /> 
//       <h1>{show?.genres.map((genre)=><button className="btn">{genre}</button>)}</h1> */}
      
//     </>
//   );
// }
// export default Api;
