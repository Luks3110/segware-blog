import { useEffect, useState } from "react";
import Feed from "../../components/Posts/Feed";
import Leftbar from "../../components/Navigation/Leftbar";
import Rightbar from "../../components/Navigation/Rightbar";
import Grid from '@mui/material/Grid'
import Add from "../../components/Navigation/Add";
import axios from "axios";

export default function Home() {
  const url = "https://segware-book-api.segware.io/api";
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${url}/feeds`,
       {headers: {Authorization: "Bearer "+JSON.parse(localStorage.getItem("token"))}});
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="App">
     <Grid container>
       <Grid item sm={2} xs={2}>
        <Leftbar />
       </Grid>
       <Grid item sm={7}  xs={10}>
         <Feed posts={posts}/>
       </Grid> 

       <Grid item sm={3} sx={{display:{xs: 'none', sm: 'block'}}}>
         <Rightbar />
       </Grid>

     </Grid>
     <Add />
    </div>
  );
}