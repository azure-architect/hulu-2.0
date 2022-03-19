
import {
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
    HomeIcon
} from '@heroicons/react/outline'
import Image from 'next/image';
import NavItem from './NavItem';
const Header = () => {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl' >
                <NavItem title='HOME' Icon={HomeIcon} />
                <NavItem title='TRENDING' Icon={ LightningBoltIcon }  />
                <NavItem title='VERIFIED' Icon={BadgeCheckIcon} />
                <NavItem title='COLLECTIONS' Icon={CollectionIcon} />
                <NavItem title='SEARCH' Icon={SearchIcon} />
                <NavItem title='ACCOUNT' Icon={UserIcon} />
            </div>
            <div >
                <Image className='object-contain'
                    src="https://thisis.hulu.com/img/hulu-preloader-animation-green.gif"
                    width={200} height={100} />
            </div>
        </header>
    );
}

export default Header;