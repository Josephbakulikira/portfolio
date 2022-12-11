import React, {useState, useEffect} from "react";
import "./style.css";
import ReactPaginate from 'react-paginate'
import projects from '../../constants/projects'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'
import Slide from 'react-reveal/Slide'

function GetItems(currentItems ) {
return (
  
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
    {currentItems &&
        currentItems.map((item) => (
        <div
            key={item.id}
            className="thecontainerproject  shadow-lg shadow[#040c16] group container flex justify-center items-center mx-auto content-div"
            style={{ background: `url(${item.image})` }}
        >
            <div className="titleText opacity-0 group-hover:opacity-100">
            <span style={{textAlign: 'center', fontSize: '20px'}} className=" py-2 font-bold text-white tracking-wider">
                <p>{item.title}</p>
            </span>
            <div className="flex justify-center py-1">
            <hr className="w-40"/>
              </div>
            <span className="titleText" style={{textAlign: 'center'}}>
              <p>{item.description.substr(0, 50)}...</p>
            </span>
            <div className="pt-8 flex justify-center">
              {
                item.tags.map((tag, index)=>{
                  return <span className="mytag" key={tag + index + item.title}>#{tag}</span>
                })
              }
            </div>
            <div className=" text-center">
                <a target="_blank" href={item.demo_url}>
                <button className="titleText mybutton buttondemo text-center px-4 py-3 m-2 text-white font-bold text-lg">
                    Demo
                </button>
                </a>
                <a target="_blank" href={item.github_url}>
                <button className="titleText mybutton buttoncode text-center px-4 py-3 m-2 text-white font-bold text-lg">
                    Code
                </button>
                </a>
            </div>
            </div>
        </div>
        ))}
    </div>
);
}
function ProjectSection({itemsPerPage}) {
    const [itemOffset, setItemOffset ]  = useState(0)

    const endOffset = itemOffset + itemsPerPage
    const currentItems = projects.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(projects.length/itemsPerPage)

    // Invoke when user click to request another page
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % projects.length;
        setItemOffset(newOffset)
    }
  

  

  return (
    <Slide bottom> 
    <div
      name="projects"
      className="projectSection w-full md:h-screen text-gray-300 "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-content-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-teal-600">
            Projects
          </p>
          <p className="py-6 tagfamily">
            {"<p> "}Check out some of my recent project{" </p>"}
          </p>
        </div>

        {GetItems(currentItems)}
        <ReactPaginate
        breakLabel="..."
        nextLabel={<BsArrowRight size={40}/>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel= {<BsArrowLeft size={40}/>}
        renderOnZeroPageCount={null}
        pageClassName="mypaginationlist"
        className="mypagination"
        activeClassName="mypaginationactive"
        />
      </div>
      
    </div>
    </Slide>

  );
}
export default ProjectSection;
