import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard/index";
import { THEME } from "./styles/theme";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={THEME}>
          <Dashboard />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
