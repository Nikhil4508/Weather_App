const Forecast = ({ title, data }) => {
    return (
      <div>
        <div className="flex items-center justify-start mt-6">
          <p className="font-medium uppercase">{title}</p>
        </div>
        <hr className="my-1" />
        <div className="flex items-center justify-between">
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <p className="font-light text-sm">{item.title}</p>
                <img
                  src={item.icon}
                  alt="weather icon"
                  className="w-12 my-1"
                />
                <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
              </div>
            ))
          ) : (
            <p className="text-sm font-light">No forecast data available</p>
          )}
        </div>
      </div>
    );
  };
  
  export default Forecast;
  