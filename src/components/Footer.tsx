function Footer() {
  return (
    <div className="flex z-10 mx-6 py-2 justify-end bottom-0 right-0 gap-x-2 items-center">
      <span>Updated July 2024</span>
      <a href="https://github.com/gomisroca/portfolio" target="_blank" rel="noopener noreferrer">
        <img
          loading="lazy"
          alt="Github logo"
          src="./github-mark.svg"
          className="invert-0 dark:invert h-[20px]"
        />
      </a>
    </div>
  )
}

export default Footer
