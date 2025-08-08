
const TopButton = ({setQuery}) => {

  const country = [{
    id:1,
    name:"India"
  },{
    id:2,
    name:"Russia"
  },{
    id:3,
    name:"Japan"
  },{
    id:4,
    name:"Australia"
  }]

  return (
    <nav className='flex items-center justify-around my-6'>
      {country.map((city) => (
        <button 
          key={city.id} 
          className='text-lg font-medium hover:bg-gray-500/30 px-4 py-2 transtion ease-in rounded-md'
          onClick={()=> setQuery({q:city.name})}
        >
          {city.name}
        </button>
      ))}
    </nav>
  )
}

export default TopButton