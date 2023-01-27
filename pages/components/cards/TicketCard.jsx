import Lottie from 'lottie-react'
import LiveIcon from '../../../public/assets/live.json'
import doneIcon from '../../../public/assets/done.json'

const TicketCard = ({ cleared }) => {
  return (
    <div className="w-full flex flex-row bg-lightBg p-4 m-3 cursor-pointer justify-between">
      <div className="flex flex-col">
        <h1 className="text-white text-sm font-medium">Tix No: 1245</h1>
        <p className="text-gray-400 text-xs font-thin">12-01-2023</p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-white text-sm font-medium">$500</h1>
        <p className="text-gray-400 text-xs font-thin">Ntinda</p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-white text-sm font-medium">UAJ-543-J</h1>
        <div className="flex flex-row items-center justify-between">
          {cleared ? (
            <>
              <p className="text-green-500 text-xs font-thin">CLEARED</p>
              <Lottie
                animationData={doneIcon}
                loop={true}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </>
          ) : (
            <>
              <p className="text-red-600 text-xs font-thin">PENDING</p>
              <Lottie
                animationData={LiveIcon}
                loop={true}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </>
          )}
          {/* <p className="text-green-600 text-xs font-thin">PEND</p> */}
        </div>
      </div>
    </div>
  )
}

export default TicketCard
