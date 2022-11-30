import { Card, SectionBox } from '../../components'
import { youngFavorites } from '../../data/dummy'

const YoungFavoritesSection = () => {
  return (
    <SectionBox title='Young’s Favorites'>
      <div className="grid grid-cols-2 gap-10">
        {
          youngFavorites.map(card => (
            <Card key={card.title} {...card} />
          ))
        }
      </div>
    </SectionBox>
  )
}

export default YoungFavoritesSection