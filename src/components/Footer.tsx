import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="flex z-10 mx-6 py-2 justify-end bottom-0 right-0 gap-x-2 items-center">
      <span>Updated July 2024</span>
      <Link to="https://github.com/gomisroca/portfolio">
        <img
          alt="Github logo"
          src="./github-mark.svg"
          className="invert-0 dark:invert h-[20px]"
        />
      </Link>
    </div>
  )
}

export default Footer
