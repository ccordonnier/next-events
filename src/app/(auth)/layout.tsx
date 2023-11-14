"use client"
import Link from "next/link"
import { Provider } from "react-redux";
import { store } from "../../store/redux";

export default function EventsLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <Provider store={store}>
      <section>
        {children}
      </section>
      </Provider>
    )
  }