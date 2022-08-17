import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: {
            theme: {
              primary: "#4aed88"
            }
          }
        }}
      ></Toaster>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/editor/:roomId' element={<EditorPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
