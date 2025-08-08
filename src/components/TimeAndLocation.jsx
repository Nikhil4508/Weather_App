

const TimeAndLocation = ({weather:{formattedToLocalTime,name,country}}) => {
  
  return (
    <div className=''>
        <div className="flex items-center justify-center my-6">
            <p className="text-xl font-extralight">
                {/* tuesday,14 may 2024 | Local time: 07:21 PM */}
                {formattedToLocalTime}
            </p>
        </div>
        <div className="text-3xl font-semibold flex items-center justify-center my-3">
            {/* India, IN */}
            {`${name},${country}`}
        </div>
    </div>
  )
}

export default TimeAndLocation