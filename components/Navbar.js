const Navbar = () => {
  return (
    <div className="bg-white pt-6">
      <nav
        className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
        aria-label="Global"
      >
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#">
              <span className="sr-only">nersystem</span>
              <img
                src="/nersystem.svg"
                alt="nersystem logo"
                className="h-8 w-auto sm:h-10"
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
