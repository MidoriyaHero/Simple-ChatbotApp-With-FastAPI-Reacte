import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Chat from './chat';

function App() {
  return(
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Chat/>} />
      </Routes>
    </Router>
    </>
  )
}
export default App;