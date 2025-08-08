import { BsThermometerHalf } from "react-icons/bs";
import { BsWind } from "react-icons/bs";
import { BiSolidDropletHalf } from "react-icons/bi";
import { GiSunset } from "react-icons/gi";
import { GiSunrise } from "react-icons/gi";
import { TiArrowUpThick,TiArrowDownThick } from "react-icons/ti";

const TempuratureAndDetail = ({
    weather:
    {
        details,temp,sunrise,sunset,temp_max,temp_min,speed,humidity,feels_like,icon
    },
    units,
}) => {

    const verticalDetails = [{
        id:1,
        Icon:BsThermometerHalf,
        title:"Real Feel",
        value:`${feels_like.toFixed()}°`
    },{
        id:2,
        Icon:BiSolidDropletHalf,
        title:"Humidity",
        value:`${humidity.toFixed()}%`
    },{
        id:3,
        Icon:BsWind,
        title:"Wind",
        value:`${speed.toFixed()} ${units === "metric" ? "km/h" : "m/s" }`
    }];


    const HorizontalDetails = [{
        id:1,
        Icon:GiSunrise,
        title:"Sunrise",
        value:sunrise
    },{
        id:2,
        Icon:GiSunset,
        title:"Sunset",
        value:sunset
    },{
        id:3,
        Icon:TiArrowUpThick,
        title:"High",
        value:`${temp_max.toFixed()}°`
    },{
        id:4,
        Icon:TiArrowDownThick,
        title:"Low",
        value:`${temp_min.toFixed()}°`
    }];

  return (
    <div className="">
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
            <p className="">{details}</p>
        </div>
        <div className="flex flex-row items-center justify-between py-3 ">
            <img 
                src={icon} 
                alt="weather icon" 
                className="w-20"
            />
            <p className="text-5xl">{temp.toFixed()}&deg;</p>
            <div className="flex flex-col items-start space-y-3">
                {verticalDetails.map(({id,title,value,Icon})=>(
                    <div key={id} className="flex items-center justify-center text-sm font-light ">
                    < Icon size={18} className="mr-1"/>
                    {title}:<span className="font-medium ml-1">{value}</span>
                </div>
                ))}
            </div>
        </div>


        <div className="flex flex-row items-center justify-center space-x-10 py-3 text-sm">
            {
                HorizontalDetails.map(({id,Icon,title,value})=> (
                    <div key={id} className="flex flex-row items-center">
                        <Icon size={30}  />
                        <p className="font-light ml-1">
                            {`${title}:`}
                            <span className="font-medium ml-1">{value}</span>
                        </p>
                    </div>
                ))
            }
            
        </div>

    </div>
    
  )
}

export default TempuratureAndDetail