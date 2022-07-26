import {Card, Typography} from '@mui/material';
import React from 'react'

interface BookData {
  title: string;
  author: string;
  reads: string;
  img: string;
}

interface Props {
  bookData: BookData;
}

const BookListItem = ({bookData}: Props) => {
  return (
    <div>
      <Card>
        <img src={bookData.img} alt="" />
        <Typography>{bookData.title}</Typography>
        <Typography>{bookData.author}</Typography>
      </Card>
    </div>
  );
}

export default BookListItem