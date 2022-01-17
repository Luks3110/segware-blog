import * as React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import moment from "moment";

const Post = ({ post }) => {
    const [like, setLike] = useState(false);
    const [love, setLove] = useState(false);

    const handleLike = async () => {
        like === false ? setLike(true) : setLike(false);
        if(like === true){
            await axios.post(`https://segware-book-api.segware.io/api/reaction`,{       
                feedId: post.id,
                like: like,
                love: love
            }, {headers: {Authorization: "Bearer "+JSON.parse(localStorage.getItem("token"))}})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
    const handleLove = async () => {
        love === false ? setLove(true) : setLove(false);
        if(love === true){
            await axios.post(`https://segware-book-api.segware.io/api/reaction`,{
                feedId: post.id,
                like: like,
                love: love
            }, {headers: {Authorization: "Bearer "+JSON.parse(localStorage.getItem("token"))}})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
            
        }
    }

    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h6">
                @{post.author.username}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" sx={{mb: 3}}>
                {moment(post.createdAt).fromNow()}
                </Typography>
                <Typography variant="body2">
                {post.content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={() => handleLike()}>
                    <ThumbUpAltIcon fontSize= "small"  />
                    Like {post.likes}
                </Button>
                <Button size="small" color="primary" onClick={() => handleLove()}>
                    <FavoriteIcon fontSize= "small" />
                    Love {post.loves}
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post
