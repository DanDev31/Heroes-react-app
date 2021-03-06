import { BrowserRouter, Routes, Route } from "react-router-dom";


import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                  
                    {/* <Route path="/login" element={<LoginScreen />} /> */}

                    <Route path="/login" element={

                        <PublicRoutes>
                            <LoginScreen /> 
                        </PublicRoutes>
                        
                    } />


                    <Route path="/*" element={

                        <PrivateRoutes>
                            <DashboardRoutes />
                        </PrivateRoutes>
                        
                    
                    } />

                    {/* <Route path="/*" element={<DashboardRoutes />} /> */}


                </Routes>
            </div>
        </BrowserRouter>
    );
};
