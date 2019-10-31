import React from "react";

// SCSS
import "../Stylesheets/GamesWePlay.scss";

// Material UI Components
import { Container } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { Card } from "@material-ui/core";

// Assets
import Diablo3 from "../Assets/Games_We_Play/diablo3.jpg";
import Starcraft2 from "../Assets/Games_We_Play/starcraft2.jpg";
import Rust from "../Assets/Games_We_Play/rust.jpg";
import BrawlStars from "../Assets/Games_We_Play/brawlstars.jpg";

const GamesWePlay = () => {
  return (
    <>
      <Container className='games-we-play-container'>
        <h1 className='games-we-play-header'>SQUAD UP!</h1>
        <Container className='game-image-card-container'>
          <Card className='game-image-card'>
            <CardMedia image={Starcraft2} className='game-image' />
          </Card>
          <Card className='game-image-card'>
            <CardMedia image={Diablo3} className='game-image' />
          </Card>
          <Card className='game-image-card'>
            <CardMedia image={Rust} className='game-image' />
          </Card>
          <Card className='game-image-card'>
            <CardMedia image={BrawlStars} className='game-image' />
          </Card>
        </Container>
      </Container>
    </>
  );
};

export default GamesWePlay;
