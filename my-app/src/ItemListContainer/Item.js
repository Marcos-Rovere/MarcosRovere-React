import React, {useState} from "react"
import { Link } from "react-router-dom";
import "./styleCatalogo.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { AddShoppingCart } from "@material-ui/icons";
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import accounting from "accounting"
import {actionTypes} from "../reducer"
import {useStateValue} from "../StateProvider"



const Items = ({img,description,title,precio,stock,id,category})=>{
        
        const [StockTotal, setStockTotal] = useState(stock);
        const [StockComprado, setStockCompra] = useState (0);
    
        const [{carrito}, dispatch] = useStateValue()

        const removeItem = () => dispatch({
            type: actionTypes.REMOVE_ITEM,
            id: id,
        })
        
        const Sumar = () => {
            if (StockTotal !== 0 & StockComprado > -1){
                setStockCompra (StockComprado + 1)
                setStockTotal (StockTotal - 1)
                addToCarrito ()
            }
            
        }
        const Resta = () => {
            if (StockTotal >= 0 & StockComprado > 0){
                setStockCompra (StockComprado - 1)
                setStockTotal (StockTotal + 1)
                removeItem ()
            }
        }
        
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
            <br></br>
            Cantidad Comprada: {StockComprado}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="share" onClick={Sumar}>
            <AddShoppingCart />
            </IconButton>
            <IconButton style={{marginRight:"30px", marginLeft:"30px"}}>
            <p  className="btn btn-primary"><Link to={`/items/${id}`} style={{color:"black"}}>Descripcion</Link></p>
            </IconButton>
            <IconButton aria-label="share" onClick={Resta}>
            <RemoveShoppingCartIcon />
            </IconButton>
        </CardActions>
        </Card>
        </>
        )
}
export default Items


