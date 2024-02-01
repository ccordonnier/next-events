import classes from './Carousel.module.css';
import Image from "next/legacy/image";

const Item = ({event}) =>{

  return (
    <div className={classes.card}>
      <div className={classes.image} >
        <Image src={"/evenements/"+event.imageEvent} alt={"Photo de "+event.title} layout='fill' objectFit='cover'/>
      </div>
      <div className={classes.categories}> 
        <span className={classes.chic}>Chic</span>
        <span className={classes.deguisements}>Déguisements</span>
        <span className={classes.danse}>Danse</span>
      </div>
      <div className={classes.details}>
        <div className={classes.title}>{event.title}</div>
        <div className={classes.location}><span>{"\\!/"}</span> {event.city}</div>
        <div style={{display:"flex"}}>
            <div className={classes.date}><span>{"(L)"}</span> {event.date.getDate()}/{event.date.getMonth()}/{event.date.getFullYear()}</div>
        </div>
      </div>
      
    </div>
  );
};

export default Item;
