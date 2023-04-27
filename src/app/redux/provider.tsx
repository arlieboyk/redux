"use client";

import { store } from "./store";
import { Provider } from "react-redux";

type Children = {
  children: React.ReactNode;
};

export function Providers({ children }: Children) {
  return <Provider store={store}>{children}</Provider>;
}
