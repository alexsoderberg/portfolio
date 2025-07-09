import { useState } from "react";

interface HamburgerMenuButtonProps {
  onClick?: ((opened: boolean) => void) | ((opened: boolean) => Promise<void>);
}

const HamburgerMenuButton = (props: HamburgerMenuButtonProps) => {

  const [opened, setOpened] = useState(false)

  const handleClick = () => {
    setOpened((previouslyOpened) => {
      if (props.onClick) {
        props.onClick(!previouslyOpened)
      }
      return !previouslyOpened
    })
  }

  <button
    onClick={handleClick}
    className={`w-12 hover:gap-2 ${opened ? "gap-2" : "gap-1"
      } transition-all items-center flex flex-col overflow-hidden focus:outline-none`}
    aria-expanded="false"
  >
    <span
      className={`block transition-all h-[2px] ${opened ? "rotate-45 ml-2" : ""
        } origin-left w-[28px] bg-white`}
    />
    <span
      className={`block ${opened ? "opacity-0" : ""
        } transition-all h-[2px] origin-left w-[28px] bg-white`}
    />
    <span
      className={`block transition-all h-[2px] ${opened ? "-rotate-45 ml-2" : ""
        } origin-left w-[28px] bg-white`}
    />
  </button>
}

export default HamburgerMenuButton