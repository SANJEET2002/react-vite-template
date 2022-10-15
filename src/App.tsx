import { MantineProvider } from "@mantine/core";
import { Card } from "flowbite-react/lib/esm/components/Card";
import "./App.css";
import { AppContext } from "./contexts/AppContexts";

function App() {
  return (
    <AppContext.Provider value={{}}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <div className="w-full h-[100vh] bg-slate-800  flex justify-center items-center">
          <h1 className=" text-white"> React tailwind SWR Mantine Template</h1>
          <div className="max-w-sm">
            <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
        </div>
      </MantineProvider>
    </AppContext.Provider>
  );
}

export default App;
