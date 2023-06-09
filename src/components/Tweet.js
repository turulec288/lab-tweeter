import ProfileImage from "./ProfileImage";
import Timestamps from "./Timestamps";
import User from "./User";
import Message from "./Message";
import Actions from "./Actions";
function Tweet(props) {
  console.log(props)
  return (
    <div className="tweet">
      
      <ProfileImage image={props.tweet.user.image}/>
    
      <div className="body">
        <div className="top">
          
        <User user={props.tweet.user} />
        <Timestamps timestamp={props.tweet.timestamp}/>
        </div>

        <Message message={props.tweet.message}/>

       <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
