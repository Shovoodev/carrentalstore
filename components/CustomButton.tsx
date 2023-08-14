import Image from "next/image";


const CustomButton = () => {
  return (
    <div>
      <button disabled= {false}
      type={"button"}
      className={`custon-btn accent-orange-500 justify-center`}
      >
            button
      </button>
    </div>
  )
}

export default CustomButton
