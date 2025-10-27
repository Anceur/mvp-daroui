import { Routes, Route } from "react-router-dom";
import NostalgieSidebar from './components/Sidebar';
import NostalgieNavbar from './components/Navbar';
import NostalgieDashboard from './pages/Dashboard';
import OrdersManagement from './pages/Orders';
import KitchenDisplay from './pages/Kitchen';
function App() {

  return (
    <div className="flex">
      <NostalgieSidebar />

      <main className="flex-1 p-6 bg-[var(--color-bg)]">
        <NostalgieNavbar />
        <Routes>
          <Route path="/" element={<NostalgieDashboard />} />
          <Route path="/orders" element={<OrdersManagement />} />
          <Route path="/kitchen" element={<KitchenDisplay />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
