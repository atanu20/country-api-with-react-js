import React from 'react'
import CountUp from 'react-countup';




const Card = ({country,capital,flag, region,subregion,population,borders,languages}) => {
    // console.log(borders)
    const border=()=>{
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
    return (
        <>
        <div className="col-lg-4 col-md-4 col-12 mb-3">
                        <div className="card p-3">
                            <div className="card-top ">
                                <div className="top-name">
                                <h1 className="name">{country}</h1>
                                <h5>{capital}</h5>
                                </div>
                                <div className="top-img">
                                    <img src={flag} alt={country} className="flag" />
                                </div>
                            </div>    
                            <h5> <strong>Population:</strong> <CountUp start={0} end={population} duration={2.75} separator="," /></h5> 
                            <p> <strong>Region: </strong>{region}({subregion}) </p> 
                            
                               {
                                   borders.length? <p> <strong>Nearby Countries: </strong>
                                   {
                                       border()
                                   }
                               </p> : null
                               }
                               <div className="row pl-3">
                               {
                                   languages?.map((val,ind)=>{
                                       return(
                                        <span key={ind} class="badge badge-pill badge-info p-2 m-1">{val.name}</span>
                                       )
                                   })
                               }
                               </div>
                               
                             
                            

                         </div>
          </div>
            
        </>
    )
}

export default Card
