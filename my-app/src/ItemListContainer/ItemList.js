import React from "react"
import Item from "./Item"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: "2rem",
    },
  }));

const ItemList = ({productos}) =>{
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root}>
                <Grid container spacing={4}>
                    {productos.map((dato)=>
                        <Grid item xs={12} sm={6} lg={4}>
                            <Item key={dato.id} img={dato.imag} title={dato.title} description={dato.description}precio={dato.precio} stock={dato.stock} id={dato.id} category={dato.categoryId}/>
                        </Grid>)}
                </Grid>
            </div>
            </React.Fragment>  
    )
}
export default ItemList