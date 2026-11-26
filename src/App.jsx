
import { Route, Routes } from "react-router";
import LibraryLogin from "./components/LibraryLogin";
import Office from "./components/Office";
import LibraryMain from "./components/LibraryMain";
import LibraryHeader from "./components/LibraryHeader";



export default function App() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-4">
      <Routes>
      <Route path="/" element={<LibraryLogin />} />
      <Route path="/office" element={<Office />} />
      <Route path="/main" element={<LibraryMain />} />
    </Routes>
    </div>
  )
}

