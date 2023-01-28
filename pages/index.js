import { useState } from 'react'
import AllTickets from './components/cards/AllTickets'
import CreateTicket from './components/cards/CreateTicket'
import TicketDetail from './components/cards/TicketDetail'
import MainLayout from './components/MainLayout'

export default function Home() {
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [adminAddress, setAdminAddress] = useState(
    '0x5CBDf5f9E468dF3888e04155668CcAfC6F6C4dcf'
  )
  return (
    <MainLayout>
      <div className="max-w-6xl w-full flex flex-1 h-full flex-row  justify-between  ">
        {/* <h1 className="text-lg underline text-white">Hello World!</h1> */}
        <AllTickets position selectTicket={setSelectedTicket} />
        {adminAddress === '0x5CBDf5f9E468dF3888e04155668CcAfC6F6C4dcf' ? (
          <CreateTicket />
        ) : (
          <>{selectedTicket && <TicketDetail ticket={selectedTicket} />}</>
        )}
      </div>
    </MainLayout>
  )
}
