/* eslint-disable no-unused-vars */

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Career from "./pages/Career";
import Catalog from "./pages/Catalog";
import Game from "./pages/Game";
import Location from "./pages/Location";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import NavBar from "./features/Reusable/NavBar";
import Footer from "./features/Reusable/Footer";
import { AnimatePresence } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <AnimatePresence>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="game" element={<Game />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="location" element={<Location />} />
            <Route path="careers" element={<Career />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
