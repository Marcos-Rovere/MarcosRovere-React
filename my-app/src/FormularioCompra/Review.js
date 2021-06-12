import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Total from "../Carrito/Total"
import { FilterCenterFocus } from '@material-ui/icons';




const products =  []
  

const addresses = ["as","asc","ascac"];
const payments = [
  { name: 'Card type', detail: '' },
  { name: 'Card holder', detail: '' },
  { name: 'Card number', detail: '' },
  { name: 'Expiry date', detail: '' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
    marginLeft: "34%"
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {


  const classes = useStyles();

  return (
    <React.Fragment>
      <div style={{textAlign:"center"}}>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        <ListItem className={classes.listItem}>
          <Typography variant="subtitle1" className={classes.total}>
            <Total />
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
      </div>
    </React.Fragment>
  );
}