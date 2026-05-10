import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Button } from "~/components/ui/button";
import { useNavigate } from "react-router";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="home-bg p-14 font-bold text-white max-w-[1100px] mx-auto my-14 flex justify-between items-center">
          <div className="w-1/3">
            <h2 className="mb-4">Paradise Nursery</h2>
            <Button onClick={()=>{navigate("/about")}} className="bg-white text-green-600 w-[150px] cursor-pointer">
              Get Started</Button>

          </div>

          <p className="w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusamus, repudiandae quisquam dignissimos sapiente tempora fuga
            reprehenderit provident iusto ea cum, harum deserunt reiciendis
            hic dolore molestiae incidunt odio labore architecto illo culpa
            corrupti ducimus perspiciatis ex nostrum? Iure, omnis.
            Totam quos veniam recusandae, quia dolorem error accusamus
            ullam maiores saepe quae? Optio tempora explicabo odit est
            tenetur recusandae officiis illum aliquam quos ipsa rerum
            eligendi nulla nostrum corrupti, pariatur ipsum porro neque
            nam voluptatem placeat omnis corporis dolor quo.
          </p>
        </div>
      </div>
    </>
  )
}
