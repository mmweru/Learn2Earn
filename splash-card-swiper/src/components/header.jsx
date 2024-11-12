import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Header = () => {
  return (
    <>
      <nav className="py-4 px-8 flex justify-between items-center">
        {/* Add left padding */}
        <Link>
          <img src="/logo.png" className="h-20 ml-4" /> {/* Add padding before the logo */}
        </Link>
        
        {/* Position button on the far right */}
        {/* <Button variant="outline" className="ml-auto">Login</Button> */}


      </nav>
    </>
  );
};

export default Header;
