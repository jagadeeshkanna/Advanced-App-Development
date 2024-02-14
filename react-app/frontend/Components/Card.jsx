import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Button, CardActionArea, CardActions } from '@mui/material';
import './Card.css'
export default function MultiActionAreaCard() {
  return (
    <>
    <center>
    <div className='card-1-box'>

    <Card sx={{ maxWidth: 345, height:500 }}>
      <CardActionArea sx={{paddingTop:"30px"}}>
        <center>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" className='card-image-2'/>
        </center>
        <CardContent>
            <center>

          <Typography gutterBottom variant="h5" component="div">
            Wipro
          </Typography>
            
          <Typography variant="body2" color="text.secondary">
          Wipro is a global IT services company based in Bangalore, India, founded in 1945. 
      It's a leading player in software development, infrastructure management, business process outsourcing, and consulting. 
      Known for innovation and sustainability, Wipro serves diverse industries with a commitment to social responsibility.
          </Typography>
          
        </center>
        </CardContent>
      </CardActionArea>
        <center>

        <Button size="small" color="success" variant="contained"
        sx={{
            width:"300px",
        }}>
          Share
        </Button>
        <br></br><br></br>
        <Button size="small" color="success"
         sx={{
            width:"300px"
        }}>
          Read more
        </Button>
        </center>
    </Card>
    <Card sx={{ maxWidth: 345, height:500 }}>
    <CardActionArea sx={{paddingTop:"30px"}}>
      <center>
      <img src="https://logowik.com/content/uploads/images/zoho-new9282.logowik.com.webp" className='card-image-2'/>
      </center>
      <CardContent>
          <center>

        <Typography gutterBottom variant="h5" component="div">
          Zoho
        </Typography>
          
        <Typography variant="body2" color="text.secondary">
        Zoho, founded in 1996 and based in Chennai, India, provides user-friendly cloud-based software, 
        including CRM and project management tools. Catering to various industries,
         Zoho is recognized for its innovation and affordability, making it a popular choice for businesses seeking efficient solutions.
        </Typography>
        
      </center>
      </CardContent>
    </CardActionArea>
      <center>

      <Button size="small" color="success"variant="contained"
      sx={{
        width:"300px",
      }}>
        Share
      </Button>
      <br></br><br></br>
      <Button size="small" color="success" 
       sx={{
         width:"300px"
        }}>
        Read more
      </Button>
      </center>
  </Card>
  <Card sx={{ maxWidth: 345,height:500 }}>
  <CardActionArea sx={{paddingTop:"30px"}}>
    <center>
        <img src="https://companieslogo.com/img/orig/TWKS-99196fdf.png?t=1635516178" className='card-image-3'/>

    </center>
    <CardContent>
        <center>

      <Typography gutterBottom variant="h5" component="div">
       ThoughtWorks
      </Typography>
        
      <Typography variant="body2" color="text.secondary">
      ThoughtWorks, founded in 1993, is a global software consultancy headquartered in Chicago. 
      Renowned for agile methodologies, it focuses on digital transformation and technology 
      solutions while prioritizing social justice and diversity. 
      The company is recognized for its collaborative and innovative approach to delivering impactful.
      </Typography>
      
    </center>
    </CardContent>
  </CardActionArea>
    <center>

    <Button size="small" color="success"variant="contained"
    sx={{
        width:"300px",
    }}>
      Share
    </Button>
    <br></br><br></br>
    <Button size="small" color="success"
     sx={{
        width:"300px"
    }}>
      Read more
    </Button>
    </center>
</Card>
    </div>
    </center>
</>
  );
}
