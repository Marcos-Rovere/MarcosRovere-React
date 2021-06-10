import React, {useState} from "react"
import { Link } from "react-router-dom";
import "./styleCatalogo.css"
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AddShoppingCart } from "@material-ui/icons";
import accounting from "accounting"
import {actionTypes} from "../reducer"
import {useStateValue} from "../StateProvider"


const Items = ({img,description,title,precio,stock,id,category})=>{
        
        const [StockTotal, setStockTotal] = useState(stock);
        const [StockComprado, setStockCompra] = useState (0);
    
        const Sumar = () => {
            if (StockTotal !== 0 & StockComprado > -1){
                setStockCompra (StockComprado + 1)
                setStockTotal (StockTotal - 1)
            }
            
        }
        const Resta = () => {
            if (StockTotal >= 0 & StockComprado > 0){
                setStockCompra (StockComprado - 1)
                setStockTotal (StockTotal + 1)
            }
        }
        const [{carrito}, dispatch] = useStateValue()
        const addToCarrito = () =>{
          dispatch ({
            type: actionTypes.ADD_TO_CARRITO,
            item: {
              img:img
              ,title,precio,stock,id,category
            }
          })
        }

        const useStyles = makeStyles((theme) => ({
            root: {
              maxWidth: 345,
            },
            action:{
                marginTop: "1rem",
            },
            media: {
              height: 0,
              paddingTop: '56.25%', // 16:9
            },
            expand: {
              transform: 'rotate(0deg)',
              marginLeft: 'auto',
              transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
              }),
            },
            expandOpen: {
              transform: 'rotate(180deg)',
            },
            
          }));
          
          
        const classes = useStyles();
          
        const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    return (
        <>
        <Card className={classes.root}>
        <CardHeader
            action={
            <Typography className={classes.action} gutterBottom variant="h5" component="h2">
                {accounting.formatMoney(precio)}
            </Typography>
            }
            title={title}
            subheader={category}
        />
        <CardMedia
            className={classes.media}
            image={img}
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            Cantidad Disponibles: {StockTotal}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="share" onClick={addToCarrito}>
            <AddShoppingCart />
            </IconButton>
            <IconButton
            className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon />
            </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                minutes.
            </Typography>
            </CardContent>
        </Collapse>
        </Card>
        </>
        )
          
    
    // return(
    //     <React.Fragment>
    //     <div style={{margin:"20px"}}>
    //                 <div className="card" style={{textAlign:"center"}}>
    //                     <img src={img} className="card-img-top" alt="Producto"></img>
    //                     <div className="card-body">
    //                         <h3 className="card-title">{title}</h3>
    //                         <p className="card-text">{description}</p>
    //                         <h5 className="card-text">{precio}</h5>
    //                         <p className="card-text">Cantidad Disponible: {StockTotal}</p>
    //                         <p  className="btn btn-primary"><Link to={`/items/${id}`} style={{color:"black"}}>Descripcion</Link></p>
    //                         <div className="row compra">
    //                         <button onClick={Resta} className="btn btn-outline-primary botonStock">- </button>
    //                         <input class="form-control" style={{width:"45px"}} placeholder={StockComprado}></input>
    //                         <button onClick={Sumar} className="btn btn-outline-primary">+</button>
    //                         <button className="buttoComprar">Comprar</button>
    //                     </div>
    //                     </div>
    //                 </div>
    //     </div>
    //     </React.Fragment>
    // )

}
export default Items


