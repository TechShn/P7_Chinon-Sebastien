import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';
/*const plantList = [
    {
        name: 'monstera',
        category: 'classique',
        id: '1ed',
        isBestSale: true,
        water: true,
        light: true
    },
    {
        name: 'yucca',
        category: 'classique',
        id: '1ed',
        isBestSale: false,
        water: true,
        light: false
    },
    {
        name: 'ficus lyrata',
        category: 'modern',
        id: '1ed',
        isBestSale: true,
        water: true,
        light: true
    },
    {
        name: 'pothos argenté',
        category: 'classique',
        id: '1ed',
        isBestSale: false,
        water: true,
        light: false
    },
    {
        name: 'palmier',
        category: 'modern',
        id: '1ed',
        isBestSale: true,
        water: true,
        light: true
    }
]*/

function NewsFeed() {
   return (
   <div className="block-newsfeed">
        <h2>Fil d'Actualité</h2>
        <div className="blockNewsFeed">
            <p><FontAwesomeIcon icon={faThumbsUp} /></p>
        </div>
    </div>
    )
}

export default NewsFeed

/*{plantList.map((plant, index) => (
    <li key={`${plant}-${index}`} >
        {plant.name} : {plant.isBestSale &&  <span>🔥</span> }
    </li>
))}*/