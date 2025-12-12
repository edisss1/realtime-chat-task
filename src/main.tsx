import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import Router from "./Router.tsx"
import { HashRouter } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext.tsx"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <HashRouter>
            <AuthProvider>
                <Router />
            </AuthProvider>
        </HashRouter>
    </StrictMode>
)
