import React from 'react'
import "./Home.css"
import Container from '@material-ui/core/Container';
import ReactPlayer from 'react-player'
import { Jumbotron } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     paper: {
//         padding: theme.spacing(2),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//     },
// }));


function Home() {
    // const classes = useStyles();
    return (
        <div className='main_div'>

            {/* first image */}
            <div className='first_div'>
                <Container maxWidth="lg">
                    <div className='Heading'>
                        <p className='paragraph'>UPCOMING TEST</p>
                        <h1 className='heading'>STARSHIP HIGH-<br />ALTITUDE FLIGHT<br /> TEST</h1>
                        <button className='button'>WATCH</button>
                    </div>
                </Container>
            </div>

            {/* second image */}
            <div className='second-div'>
                <Container className='container' maxWidth="lg">
                    <div className='Heading_2'>
                        <p className='paragraph_2'>RECENT LAUNCH</p>
                        <h1 className='heading_2'>CRS-21 MISSION</h1>
                        <button className='button_2'>WATCH</button>
                    </div>

                </Container>
            </div>

            {/* video player */}
            <div style={{ backgroundColor: "black" }}>
                <Container className='container' maxWidth="md">
                    <div className='video'>
                        <ReactPlayer url="https://www.youtube.com/watch?v=gmJgW-yMAIg" controls={true} width={900} height={500} />
                    </div>
                </Container>
            </div>


            <Jumbotron className='third-div' >

                <Container className='main_container' maxWidth="lg">
                    <div className='Heading_3'>
                        <p className='paragraph_3'>18/10/20</p>
                        <h1 className='heading_3'>Kennedy Center<br />SpaceX</h1>
                        <p className='long_para'>NASA selected SpaceX to develop a lunar optimized Starship to transport crew between lunar orbit and the surface of the Moon as part of NASA’s Artemis program.</p>
                        <button className='button_3'>WATCH</button>
                    </div>

                </Container>
            </Jumbotron>

            <div style={{backgroundColor:'black'}}>
            <Container className='footer_container' maxWidth="lg">
            <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3} lg={2}  >
            <span style={{fontWeight:'lighter'}} >SPACEX © 2020</span>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}  >
            <span> <a className='anchor' href="https://twitter.com/SpaceX?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">TWITTER</a></span>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}  >
            <span> <a className='anchor' href="https://www.youtube.com/spacex">YOUTUBE</a> </span>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}  >
            <span> <a className='anchor' href="https://www.instagram.com/spacex/?hl=en">INSTAGRAM</a> </span>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}  >
            <span><a className='anchor' href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQEP9_9_qIuKHQAAAXZNSPpICETb0Rw5rpLl1Z1Ml3VL6z9PK75CM8DtI89qGE3bSOXZtT644awloguI-dDZpDwbogkminaTN1tkDTx0hcY0fuNAKkcw_vPej2VCupCcpeBKa9A=&originalReferer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fspacex">LINKEDIN</a></span>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}  >
            <span> <a className='anchor' href="https://www.spacex.com/media/privacy_policy_spacex.pdf">PRIVACY POLICY</a></span>
            </Grid>       
              </Grid>
              </Container>
            </div>
            
        </div>
    )
}

export default Home





