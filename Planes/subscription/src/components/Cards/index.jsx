import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  button:{
    justifyContent: 'center'
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.logo}
          title="Tekrisk"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          {props.characters && props.characters.map((i,ind) => (
            <Typography key={ind} variant="body2" color="textSecondary" component="p">
              {i.desc}
            </Typography>
          ))}
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.button}>
        <Button size="small" variant="contained" color="primary">
          {props.textButton}
        </Button>
      </CardActions>
    </Card>
  );
}
