import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface MusicCardTypes {
  name: string;
  src: string;
  author: string;
  image: string;
  alt: string;
}

export const MusicCard: React.FC<MusicCardTypes> = ({
  name,
  src,
  author,
  image,
  alt,
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        minWidth: "500px",
        maxHeight: "200px",
        margin: "10px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6">
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {author}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <audio src={src} controls></audio>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151, padding: "5px" }}
        image={image}
        alt={alt}
      />
    </Card>
  );
};

export default MusicCard;
