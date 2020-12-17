import React from 'react'
import { LaunchListQuery } from './../../generated/graphql'
import "./Launch.css"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container';
// import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography'

interface Props {
  data: LaunchListQuery;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const LaunchList: React.FC<Props> = ({ data }) => {
  const classes = useStyles();

  return (
    <div className='launch_list_main_div'>
      <div className='launch_image_main_div'>
        <Container  maxWidth='sm'>
          <Typography className='Launch_heading' variant="h1" component="h2">
            Launches
</Typography>
        </Container>
      </div>
      <div id='list_contaiber_div' className={classes.root}>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          {!!data.launches && data.launches.map((launches, ind) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={ind} >
                <Paper id='Launch_List_grid' className={classes.paper} >
                  <p>{launches?.mission_name}</p>
                  <p>{launches?.launch_year}</p>
                  <Link to={`/launch/${launches?.flight_number}`}>
                    <button className='launch_button' >Details</button>
                  </Link>
                </Paper>
              </Grid>
            
            )
          })}
        </Grid>
        </Container>
      </div>

    </div>
  )
}

export default LaunchList;


