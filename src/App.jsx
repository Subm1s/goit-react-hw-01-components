import "./App.css";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import Friends from "./components/Friends";
import Transaction from "./components/Transaction";

import user from "./data/user.json";
import data from "./data/data.json";
import transaction from "./data/transaction-history.json";
import friends from "./data/friends.json";

function App() {
  return (
    <main className="App">
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <Friends friends={friends} />
      <Transaction items={transaction} />
    </main>
  );
}

export default App;
