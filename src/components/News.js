import React,{useEffect,useState} from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
 import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {
  
  const [articles   , setArticles   ] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

 const capitalization =(string)=>{
return string.charAt(0).toUpperCase() + string.slice(1)
  }
  
    document.title=`${capitalization (props.category)}-News-24`;
  
  const UpdateNews=async()=>{
    props.setProgress(10) 
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0da65b3d02644bc8b5325486312b7779&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url); 
    props.setProgress(30)
    let parseData = await data.json();
    props.setProgress(70)
    console.log(parseData);
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
        props.setProgress(100)
  }
  
  useEffect(() => {
    UpdateNews()
    // eslint-disable-next-line
  },[]);
   


  const fetchMoreData = async() => {
                 
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0da65b3d02644bc8b5325486312b7779&page=${page}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url); 
    let parseData = await data.json();
   
    setArticles( articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
  };

return (
    <>
           <h1 className="text-center " style={{margin:"35px 0px", marginTop:"95px"}}>News-24 Top {capitalization (props.category)} Headlines</h1>
       {loading && <Spinner/>}
       <InfiniteScroll
 dataLength={articles} 
 next={fetchMoreData}
 hasMore={articles!==totalResults}
 loader={<Spinner/>}>
   
   <div className="container my-3">
       <div className="row">
         { articles && articles.map((element,index) => {
           return (
             <div className="col-md-4" key={index}>
               <Newsitems title={element?.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 40) : ""}imgurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}  source={element.source.name} />
             </div>
           );
         })}
       </div>
       </div>
         </InfiniteScroll>
    </>
  )
}

News.propTypes={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
 
    }
    News.defaultProps={
      country:"in",
      pageSize:5,
      category:'general'
    }
export default News;



