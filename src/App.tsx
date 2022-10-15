import { MantineProvider } from "@mantine/core";
import "./App.css";
import { AppContext } from "./contexts/AppContexts";

function App() {
  return (
    <AppContext.Provider value={{}}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <div className="w-full h-[100vh] bg-slate-800  flex justify-center items-center">
          <h1 className=" text-white"> React tailwind SWR Mantine Template</h1>
        </div>
      </MantineProvider>
    </AppContext.Provider>
  );
}

export default App;
