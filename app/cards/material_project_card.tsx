import Button from "@mui/material/Button/Button";
import Card from "@mui/material/Card/Card";
import CardActions from "@mui/material/CardActions/CardActions";
import CardContent from "@mui/material/CardContent/CardContent";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Typography from "@mui/material/Typography/Typography";


export default function MaterialCard({imgUrl, title, description} 
  : {
      imgUrl: string, 
      title: string,
   description: string}) {
    return ( 
      <Card
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          className='transition ease-in-out hover:scale-110'
        >
          <CardMedia
            component="div"
            sx={{
              // 16:9
              pt: '56.25%',
            }}
            image={imgUrl}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2" >
              {title}
            </Typography>
            <Typography>
            {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">View</Button>
            <Button size="small">Edit</Button>
          </CardActions>
        </Card>
      );
}