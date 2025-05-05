import image from './assets/profilePicture/téléchargement .jpg'

interface CardProps {
    text: string;
    image: string;
    name: string;
    title: string;
    company: string;
  }

function Card(props : CardProps){
    return(
    <div className="card">
        <div className='cardContainer'>
            <div >
            <h2> {props.text}</h2>
            </div>
            <div className='userInfo'>
                <img src={props.image} alt={props.name} />
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.title}, {props.company}</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Card