import React from 'react'
import './Player.css'
import Card from 'react-bootstrap/Card'


const Player = ({name, team, nationality, jerseyNumber, age, img, background, border}) => {

   // const {name ="John", team= "Team", nationality="America", jerseyNumber="jersey", age=} = props;
  return (
    <Card className='main' style={{ display:"flex", justifyContent:"space-between", alignItems:"center", overflow:"hidden", borderRadius:10, border:`${border}`,background: `${background}`}}>
        <Card.Img src={img} width={500} height={300} style={{flex:1, borderRadius:10}}/>

        <Card.Body style={{flex:1}}>
            <Card.Title style={{fontFamily:'cursive', fontWeight:'bolder', fontSize:"30px"}}>{name}</Card.Title>

            <Card.Text>{nationality}</Card.Text>

            <Card.Text>{team}</Card.Text>

            <Card.Text>{jerseyNumber}</Card.Text>

            <Card.Text>{age}</Card.Text>

            
        </Card.Body>
    </Card>
  )
}

export default Player