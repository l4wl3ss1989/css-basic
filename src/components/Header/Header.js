import React from 'react';

import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems';

const Header = props => {
    return (
        <header>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default Header;