import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from './chat';
import { LeftNav } from "./LeftNav";

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh' }}>
        <LeftNav />
        <Routes>
          <Route path="/" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
