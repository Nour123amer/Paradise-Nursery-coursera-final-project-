
import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";



export default function Navbar() {
  const router = useNavigate();
  const [open, setOpen] = useState(false);
  const count = useSelector((state) => state.counter.count);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-green-500/90 backdrop-blur-md border-b ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">

        {/* Logo */}
        <h1 className="text-xl font-bold text-white">
          Paradise Nursery
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">

          <Link
            href="/about"
            className="text-white hover:text-black font-medium transition"
          >
            About
          </Link>
            <Link
                    href="/products"
                    className="text-white hover:text-black font-medium transition"
                  >
                    Products
                  </Link>
          <Link
            href="/cart"
            className="text-white hover:text-black font-medium transition relative"
          >
            <ShoppingCart />
            <span className="absolute -top-3 -right-2">{count}</span>
          </Link>

        </nav>


        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="cursor-pointer">
                {open ? <X /> : <Menu />}
              </Button>
            </SheetTrigger>

            {/* ✅ Full Screen */}
            <SheetContent side="left" className="w-full h-full p-6">

              <div className="flex flex-col h-full">

                {/* Top (Logo + Close) */}
                <div className="flex items-center justify-between mb-10">
                  <h1 className="text-xl font-bold">AI Editor</h1>
                  <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                    <X />
                  </Button>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-6 text-lg">
                  <Link
                    href="/about"
                    className="text-white hover:text-black font-medium transition"
                  >
                    About
                  </Link>

                  <Link
                    href="/products"
                    className="text-white hover:text-black font-medium transition"
                  >
                    Products
                  </Link>

                  <Link
                    href="/cart"
                    className="text-white hover:text-black font-medium transition relative"
                  >
                    <ShoppingCart />
                    <span className="absolute -top-3 -right-2">{count}</span>
                  </Link>
                </div>


              </div>

            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}