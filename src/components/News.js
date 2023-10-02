import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Loading from "./Loading";
function News(props) {
  const [state, setState] = useState([]);
  const [pages,setPages]=useState(1);
   const [num,setnum]=useState(5);
   const [load,setload]=useState(true);
   const [cat,setcat]= useState('general');
   let totalResults=0;
  useEffect(() => {
    
    const fetchData = async () => {
    
      try {
          const url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=404f5b9ef47346a6b4aa5d913ac35ab6&page=${pages}&pageSize=5`
        const data = await fetch(
          url
        );
        setload(true);
        const parsedata = await data.json();
        setState(parsedata.articles);
        totalResults= parsedata.totalResults;
        setload(false);
            console.log(num)
      } catch (error) {
        console.log("Fetching issue", error);
      }
    };
   
    fetchData(); // Call the fetchData function here to trigger the API request

  },[pages,num,props]); // Empty dependency array to run this effect once after initial render
 // [pages,num,props]
  const handleclick1 = ()=> {
    
    setnum(num-5);
    setPages(pages-1);
    //console.log('pre cliked ',pages)
        
  }
  const handleclick2 = ()=> {
    //console.log('next called ',pages)
    
    setnum(num+5);
    setPages(pages+1);
}


  return (
    <div className="container my-3 text-center mx-auto " >
      <h2 style={{margin: "35px 20px"}} >This is {props.category} components</h2>
        {load && <Loading/>}
      <div className="row">
        {
        
        
        
        
        
        state.map((article) => (
          <div className="col-md-4" key={article.url}>
            <NewsItems
              title={article.title}
              desc={article.description}
              imgurl={article.urlToImage}
              url={article.url}
              time={article.publishedAt}
              author={article.author}
              badge={article.source.name}
            />
          </div>
        ))}
      </div>
    <div className="d-flex justify-content-between">
      <button type="button" disabled={pages === 1? true:false} onClick={handleclick1} className="btn btn-dark">&larr; prev</button>
      <button type="button"  disabled={num >= 37? true:false} onClick={handleclick2
      } className="btn btn-dark">next &rarr;</button>
      </div>
    </div>
  );
}

export default News;
