import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



function CommentCard ({post, user}) {
  return(

    <Box sx={{ minWidth: 275, paddingBottom: "1rem"}}>
                      
                      
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          {/* <p>{comment.content}</p> */}
        </Typography>
      </CardContent>
    </Card>
  </Box>

  )
}


export default CommentCard