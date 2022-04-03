import React from 'react';
import { Card, CardHeader } from 'semantic-ui-react';

const CardExampleCard = ({ weatherData }) => (
    <Card>
        <Card.Content>
            <CardHeader className='header'>{weatherData.name}</CardHeader>
        </Card.Content>
    </Card>
)

export default CardExampleCard;