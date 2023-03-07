import background_image from './../../static/img/content_background.webp';

const Profile = () => {
    return (
        <div className='main'>
        <div className='bg_image'>
        <img src={background_image} alt="bg" />
        </div>

        <div>
          ava-info
        </div>

        <div>
          posts
        </div>
      </div>
    );
}


export default Profile