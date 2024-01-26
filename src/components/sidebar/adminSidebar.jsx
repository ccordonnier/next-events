import { Fragment } from 'react';
import Link from 'next/link';
import { QrCodeIcon, ChatBubbleLeftRightIcon, BanknotesIcon, UsersIcon, PlusSmallIcon } from '@heroicons/react/20/solid';

const navigation = [
    { icon: PlusSmallIcon, title:"Ajouter évènement",href:  process.env.NEXT_PUBLIC_ADMIN_EVENT_ADD_PATH, current: false, type:"button"},
    { icon: QrCodeIcon, title:"Evènements",href: process.env.NEXT_PUBLIC_ADMIN_EVENT_PATH, current: true, type:"link"},
    { icon: ChatBubbleLeftRightIcon, title:"Communication", href:"communication", current: false, type:"link"},
    { icon: BanknotesIcon, title:"Comptabilités", href:"clients", current: false, type:"link"},
    { icon: UsersIcon, title:"Clients", href:"clients", current: false, type:"link"},
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Sidebar = () => {
    return (
      <>
        <div className='h-screen bg-white shadow fixed mt-16' style={{width:"12vw"}}>
          
            <ul className='flex flex-col gap-4'>
              {
                navigation.map((item) => (                   
                  <li key={item.title} className={classNames(
                    item.type=="button" ? "mt-2 cursor-pointer mx-2 rounded-md text-center flex justify-center text-white pink-orange-gradient" :
                    item.current
                      ? 'bg-orange-600 text-white'
                      : 'hover:bg-orange-500 hover:text-white',
                    ' px-3 py-2 text-sm font-medium'
                  )} aria-current={item.current ? 'page' : undefined}><Link href={item.href} className='flex' ><item.icon className="h-6 w-6 text-white group-hover:text-orange-600" aria-hidden="true" />{item.title}</Link></li>
                ))
              }
            </ul>

          
        </div>
      </>
    )
}

export default Sidebar;