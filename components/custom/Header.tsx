import Image from "next/image"
import Container from "./Container"
import Link from "next/link"
import { Button } from "../ui/button"

const Header = () => {
  return (
    <header className=" w-full h-[70px]">
      <Container>
        <nav className="flex items-center justify-between p-3">
          <Image src="/velar-logo.svg" width={40} height={40} alt="Velar Logo" />
          
          <div className="flex items-center gap-3">
            <Link href="#">Features</Link>
            <Link href="#">My Scents</Link>
            <Link href="#">About</Link>
          </div>
          <div className="">
            <Button>Get Started</Button>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header