import React from 'react'
import { LaunchProfileQuery } from './../../generated/graphql'
import './LaunchProfile.css'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

interface Props {
    data: LaunchProfileQuery
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

const LaunchProfile: React.FC<Props> = ({ data }) => {
    const classes = useStyles();

    return (
        <div className='mainLaunch_Profile_div' >

            <div className='main_launch_heading_div'>
                <Container maxWidth='sm'>
                    <Typography className='main_launch_heading' variant="h1" component="h2">
                        About Rocket
                    </Typography>
                </Container>
            </div>
            <Container maxWidth='xs'>
                <Typography style={{ color: "white" }} variant='h4' component="h4">
                    <div className='launch_flight_heading' >

                        <div className='flight_number' >Flight no</div>
                        <div>:</div>
                        <div>{data.launch?.flight_number} </div>
                    </div>
                </Typography>
            </Container>

            <Container maxWidth='sm' >
                <div className='launch_Success_heading' >
                    <Typography style={{ color: "white" }} variant='h4' component="h4">
                        {data.launch?.launch_success ? (
                            <p >Success</p>
                        ) : (
                                <p>Failed</p>
                            )}
                    </Typography>
                </div>

                <div className='launch_mission_heading'>
                    <Typography style={{ color: "white" }} variant='h4' component="h6">
                        <div className='text_underline'>Mission name</div>
                        <div style={{ marginTop: 20 }}  >{data.launch?.mission_name}</div>
                    </Typography>
                </div>


                <div className='launch_mission_heading' >
                    <Typography style={{ color: "white" }} variant='h4' component="h6">
                        <div className='rocket_nname' >
                            Rocket name
                            </div>
                        <div style={{ marginTop: 20 }} >
                            {data.launch?.rocket &&
                                ` (${data.launch.rocket.rocket_name} )`}
                        </div>
                    </Typography>
                </div>

                <div className='launch_mission_heading' >
                    <Typography style={{ color: "white" }} variant='h4' component="h4">
                        <div  >
                            Details
                        </div>
                        <div style={{ marginTop: 20 }}>
                            <p className='paragraph' >{data.launch?.details}</p>
                        </div>
                    </Typography>
                </div>
            </Container>

            <div><h1 style={{ textAlign: 'center', color: 'white', textDecoration: 'underline' }}>Images</h1></div>
            <Container maxWidth='lg' className='containnnner' >

                <div id='images_Container' className={classes.root}>
                    <Grid container spacing={2}>
                        <Grid item  >

                            <div style={{ textAlign: 'center' }} >
                                {data.launch?.links?.flickr_images === null || data.launch?.links?.flickr_images === undefined || data.launch?.links?.flickr_images.length < 1 ? <h1>No image</h1> : data.launch?.links?.flickr_images.map((image , ind) => 
                                image ? <img width={300} height={200} key={ind} alt={image} src={image}/> : null )}
                            </div>
                        </Grid>
                    </Grid>

                </div>
            </Container>

        </div>
    )
}

export default LaunchProfile


// {data.launch?.links?.flickr_images?.map((image,ind)=>
//     image ? <  img src={image} width={300} height={200} key={ind} alt={image} ></img> : null
//     )}