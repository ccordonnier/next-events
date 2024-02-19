import Carousel from '@/components/home/carousel/Carousel';
import Hero from '@/components/home/hero/Hero';
import CategoriesList from '@/components/categories/CategorieList';
import EventList from '@/components/events/Events';

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Carousel></Carousel>
      <div className='py-6'></div><CategoriesList></CategoriesList>
      
      <div className='px-[10vw] py-6'><EventList columns={4}/></div>
    </>
  )
}
