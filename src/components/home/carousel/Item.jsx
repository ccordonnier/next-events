import classes from './Carousel.module.css';
import Image from 'next/image';

const Item = (props) =>{
  return (
    <div className={classes.Card}>
      <div className={classes.image} >
        <Image src={"/Evenements/"+props.image} layout='fill' objectFit='cover'/>
      </div>
      <div className={classes.categories}> 
        <span className={classes.chic}>Chic</span>
        <span className={classes.deguisements}>Déguisements</span>
        <span className={classes.danse}>Danse</span>
      </div>
      <div className={classes.details}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.location}><span>{"\\!/"}</span> {props.city}</div>
        <div style={{display:"flex"}}>
            <div className={classes.date}><span>{"(L)"}</span> {props.date.getDate()}/{props.date.getMonth()}/{props.date.getFullYear()}</div>
        </div>
      </div>
      
    </div>
  );
};

export default Item;
