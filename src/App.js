import "./App.css";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./pages/dashboard/Dashboard.page";
import { Entry } from "./pages/entry/Entry.page";
import { AddNewTicket } from "./pages/new-ticket/AddNewTicket";
import { TicketLists } from "./pages/ticket-list/TicketLists";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard></Dashboard> */}
        {/* <AddNewTicket /> */}
        <TicketLists />
      </DefaultLayout>
    </div>
  );
}

export default App;
