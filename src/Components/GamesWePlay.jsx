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
import Rust from "../Assets/Games_We_Play/rust.png";

const GamesWePlay = () => {
  return (
    <>
      <Container className='games-we-play-container'>
        <Card className='game-image-card'>
          <CardMedia image={Diablo3} className='game-image'></CardMedia>
        </Card>
        <Card className='game-image-card'>
          <CardMedia image={Starcraft2} className='game-image'></CardMedia>
        </Card>
        <Card className='game-image-card'>
          <CardMedia image={Rust} className='game-image'></CardMedia>
        </Card>
      </Container>
    </>
  );
};

export default GamesWePlay;
