import { Card, CardMedia, LinearProgress, Typography } from '@mui/material'
import React from 'react'
import IconAndText from '../../atoms/IconAndText'

interface BookData {
    title: string
   img: string
  author: string
  reads: string
}

interface Props {
  bookData: BookData
}

const BookGridItem = ({bookData}: Props) => {
  return (
    <div>
      <Card>
        <CardMedia>
          <img src={bookData.img} />
        </CardMedia>

        <Typography>{bookData.title}</Typography>
        <Typography>{bookData.author}</Typography>
        <IconAndText />
        
        <LinearProgress />
      </Card>
    </div>
  )
}

export default BookGridItem