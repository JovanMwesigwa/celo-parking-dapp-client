import AllTickets from './components/cards/AllTickets'
import CreateTicket from './components/cards/CreateTicket'
import TicketDetail from './components/cards/TicketDetail'
import MainLayout from './components/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <div className="max-w-6xl w-full flex flex-1 h-full flex-row  justify-between  ">
        {/* <h1 className="text-lg underline text-white">Hello World!</h1> */}
        <AllTickets position />
        <TicketDetail />
      </div>
    </MainLayout>
  )
}
