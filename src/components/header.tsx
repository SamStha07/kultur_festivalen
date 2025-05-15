import { Icons } from './icons';

export const Header = () => {
  return (
    <header className="sticky top-0 z-[100]">
      <nav>
        <div className="container m-auto px-4">
          <div className="flex justify-between pt-7">
            <Icons.logo />
            <button>
              <Icons.hamburgerIcon />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
