import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function StartupCard(props: { name: string; dateFounded: string; employees: string; totalFunding: string; currentInvestmentStage: string}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          founded: {props.dateFounded}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          employees: {props.employees}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           funding: {props.totalFunding}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            investment:  {props.currentInvestmentStage}
        </Typography>
      </CardContent>
    </Card>
  );
}