import { AppLayout } from "./layouts/AppLayout";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Analytics } from "./components/Analytics/Analytics";

function App() {
  return (
    <AppLayout>
      <Dashboard />
      <Analytics/>
    </AppLayout>
  )
}

export default App
