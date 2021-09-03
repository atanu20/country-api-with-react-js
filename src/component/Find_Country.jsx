import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import CountUp from 'react-countup';
import axios from 'axios';
import Chart from './Chart';

const Find_Country = () => {
    const [data, setData] = useState([])
   
    const [select, setSelect] = useState("")
    const [show, setShow] = useState(false)

    const getData = async () => {
        const res = await axios.get('https://restcountries.eu/rest/v2/region/asia')
       
        setData(res.data)
    }

    useEffect(() => {
        getData()

    }, [])
    const inputHandel = (e) => {

        setSelect(e.target.value)
        setShow(true)
        // setShowData(showdata.filter((val)=>val.name===select))
        // console.log(showdata.filter((val) => val.name === select))


    }


    const border=(borders)=>{
        let dat=""
        for(let i=0;i< borders.length;i++)
        {
            if(i===borders.length-1)
            {
                dat += borders[i] 
            }
            else{
                dat += borders[i]+", " 
            }
        }
        return dat
       
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
        <><Navbar />
            <div className="find-country">
                <div className="container">
                    <div className="row">



                        {

                            show && (
                                <>
                                    {
                                        data?.filter((vall) => vall.name === select).map((val, ind) => {
                                            return (
                                                <div className="col-md-8 col-12 mx-auto">
                                                    <div className="card p-3">
                                                        <div className="row">
                                                            <div className="col-md-6 col-12 mx-auto ">
                                                                <div className="upbox ">
                                                                    <div className="top-name">
                                                                        <h1 className="titname">{val.name}</h1>
                                                                        <h5>{val.capital}</h5>
                                                                        <br />
                                                                        <h5> <strong>Population:</strong> <CountUp start={0} end={val.population} duration={2.75} separator="," /></h5>

                                                                    </div>
                                                                    <div className="top-img">
                                                                        <img src={val.flag} alt="hii" className="flagbig" />
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className="col-md-6 col-12 mx-auto pl-4">

                                                                <h5> <strong>Region : </strong>{val.region} </h5>
                                                                <h5><strong>subregion : </strong> {val.subregion}</h5>
                                                                <p><strong>Languge : </strong>
                                                                {
                                                                    val.languages?.map((va,ind)=>{
                                                                        return(
                                                                            <>
                                                                                <span>{va.name},</span>
                                                                            </>
                                                                        )
                                                                    })
                                                                }

                                                                
                                                                </p>
                                                                {
                                                                    val.borders.length? <p> <strong>Nearby Countries: </strong>
                                                                    {
                                                                        border(val.borders)
                                                                    }
                                                                </p> : null
                                                                }
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            )
                                        })
                                    }

                                </>
                            )



                                }



                            < div className="col-md-8 col-12 mx-auto p-5">

                        <div class="form-group">

                            <select class="form-control" onChange={inputHandel}>

                                <option value="" selected disabled hidden>Select One Country</option>
                                {

                                    data?.map((val, ind) => {
                                        return (
                                            <option key={ind} value={val.name}>{val.name}</option>
                                        )
                                    })
                                }

                            </select>

                        </div>

                        {
                            show && (
                                <>
                                    {
                                        data?.filter((vall) => vall.name === select).map((val, ind) => {
                                            return (
                                                <Chart
                                                    key={ind}
                                                    country={val.name}
                                                    population={val.population}
                                                    area={val.area}

                                                />
                                            )
                                        })
                                    }

                                </>
                            )
                        }








                    </div>



                </div>
            </div>
        </div>

        </>
    )
}

export default Find_Country
