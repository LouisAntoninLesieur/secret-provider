"use client"

import Navbar from "./components/Navbar";
import HomeListItem from "./components/HomeListItem";

export default function Home() {

  const els = [
    {title: "Home", description: "Home description", link: "/"}, 
    {title: "Contact", description: "Contact description", link: "/contact"}, 
    {title: "CV", description: "CV description", link: "/cv"}, 
    {title: "Game", description: "Game description", link: "/game"}]

  return (
    <>
      <Navbar />

      <ul className="flex flex-col gap-4">
        {els.map((el) => {
          return <HomeListItem key={el.title} title={el.title} description={el.description} link={el.link} />
        })}
      </ul>
    </>
  );
}
