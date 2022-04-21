import { Route, Routes } from "solid-app-router"
import { lazy } from "solid-js"
const Id = lazy(() => import("./pages/docs/id"))
const Index = lazy(() => import("./pages/index"))

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/docs/*" element={<Id />}></Route>

      </Routes>
    </>
  )
}
export default App