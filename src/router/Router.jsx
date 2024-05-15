import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import DashoadrPage from "../pages/DashoadrPage"
import AuthPage from "../pages/AuthPage"
import AdminPage from "../pages/AdminPage"
import PageNotFound from "../pages/404"
import { useQuery } from "@tanstack/react-query"
import { getProfile } from "../services/user"
import Loader from "../components/modules/Loader"
import DetailsPage from "../pages/DetailsPage"


function Router() {
  const {data , isLoading , error} = useQuery(["profile"], getProfile)

  console.log({data , isLoading , error})

  if(isLoading) return <Loader/>
  return (
    <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/dashboard" element={data ? <DashoadrPage/> : <Navigate to="/auth"/>}/>
        <Route path="/auth" element={data? <Navigate to="/dashboard"/>:<AuthPage/> }/>
        <Route path="/admin" element={data && data.data.role==="ADMIN" ? <AdminPage/>:<Navigate to="/"/>}/>
        <Route path="/posts/:id" element={<DetailsPage/>}/>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}

export default Router