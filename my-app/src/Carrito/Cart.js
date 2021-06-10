import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import accounting from "accounting"
import DeleteIcon from "@material-ui/icons/Delete"
import {useStateValue} from "../StateProvider"
import {actionTypes} from "../reducer"

const  Cart = ({img,description,title,precio,category,id}) =>{
    const [{carrito}, dispatch] = useStateValue()

    const removeItem = () => dispatch({
        type: actionTypes.REMOVE_ITEM,
        id: id,
    })

    const useStyles = makeStyles((theme) => ({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 0,
          paddingTop: '56.25%',
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
            <CardActions disableSpacing>
                <IconButton aria-label="share">
                    <DeleteIcon onClick={removeItem}/>
                </IconButton>
            </CardActions>
        </Card>
        </>
        )

};


export default Cart