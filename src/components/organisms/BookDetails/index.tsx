import { Grid, Typography } from "@mui/material";
import React from "react";
import BookDetailThumbnail from "../../atoms/Thumbnail";
import BookDetailsTabs from "../../molecules/Tabs";

interface BookData {
  title: string;
  img: string;
  author: string;
  reads: string;
}

interface Props {
  book: BookData;
}

const BookDetails = ({book}: Props) => {
  return (
    <div>
      <Grid container>
        <Grid item>
          <Typography>{book.title}</Typography>
          <Typography>Tagline</Typography>
          <Typography>Author</Typography>
          <BookDetailsTabs />
        </Grid>
        <Grid item>
          <BookDetailThumbnail img={book.img}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default BookDetails;