
import {
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
    HomeIcon
} from '@heroicons/react/outline'
import Image from 'next/image';
import { useRouter } from 'next/router'
import HeaderItem from './HeaderItem';
const Header = () => {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl' >
                <HeaderItem title='HOME' Icon={HomeIcon} />
                <HeaderItem title='TRENDING' Icon={ LightningBoltIcon }  />
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
                <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
                <HeaderItem title='SEARCH' Icon={SearchIcon} />
                <HeaderItem title='ACCOUNT' Icon={UserIcon} />
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