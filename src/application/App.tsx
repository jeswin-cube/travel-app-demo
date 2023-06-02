import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../features/routing";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App font-plex overflow-x-hidden">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
