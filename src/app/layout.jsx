
"use client"
import { Provider } from "react-redux";
import { store } from "../store/redux";

export default function RootLayout({
  children,
}) {
  return (
    <Provider store={store}>
          {children}
    </Provider>
  )
}
