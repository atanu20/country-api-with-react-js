import React, { useState, useEffect } from 'react'
import Card from './Card'
import axios from 'axios'
import Navbar from './Navbar'
import ReactPaginate from 'react-paginate';

const Home = () => {
    const [pageNo, setPageNo] = useState(0)
    const perpage=20;
    const pagevisit=pageNo * perpage;
    const [data, setData] = useState([])

    const getData = async () => {
        const res = await axios.get('https://restcountries.eu/rest/v2/region/asia')
        // console.log(res.data)
        setData(res.data)
    }

    useEffect(() => {
        getData()

    }, [])

    
    const dataall=data.slice(pagevisit,pagevisit+perpage);
    const boxno=Math.ceil(data.length / perpage)
    const pageChange=({selected})=>{
        setPageNo(selected)
    }

    if (!data.length) {
        return (
            <>
                <Navbar />
                <div className="container p-5 text-center">
                    <h2>Loading. . .</h2>
                </div>

            </>
        )

    }


    return (
        <>
            <Navbar />
            <div className="home">
                <div className="container pb-5">
                    <div className="row">

                        {
                            dataall?.map((val, ind) => {
                                return (
                                    <>
                                        <Card

                                            key={ind}
                                            country={val.name}
                                            capital={val.capital}
                                            flag={val.flag}
                                            region={val.region}
                                            subregion={val.subregion}
                                            population={val.population}
                                            borders={val.borders}
                                            languages={val.languages}

                                        />

                                    </>
                                )
                            })
                        }







                    </div>
                    <div className="row">
                    <ReactPaginate 
                previousLabel={"Prev"}
                nextLabel={"Next"}
                pageCount={boxno}
                onPageChange={pageChange}
                containerClassName={"pagination"}
                // previousLinkClassName={"prevbutton"}
                // nextLinkClassName={"nextbutton"}
                // disabledClassName={"pagedisable"}
                activeClassName={"activebutton"}
                
                />
             
                    </div>
                </div>

            </div>


        </>
    )
}

export default Home
