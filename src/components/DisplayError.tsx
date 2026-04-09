import snorlaxImage from "../assets/snorlax-sleeping-error.png"

const DisplayError = () => {
  return (
    <div className=' bg-white w-80 h-80 rounded-2xl mt-7 flex flex-col items-center justify-center'>
        <img src={snorlaxImage} className="w-64 h-64"/>
        <p>Pokemon not found!</p>
    </div>
  )
}

export default DisplayError