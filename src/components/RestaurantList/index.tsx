import Restaurant from '../models/restaurant'
import Rest from '../Card/index'
import { Container, List } from './style'

export type Props = {
  restaurant: Restaurant[]
}

const RestaurantList = ({ restaurant }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurant.map((restaurant) => (
          <Rest
            key={restaurant.id}
            titulo={restaurant.titulo}
            descricao={restaurant.descricao}
            imagem={restaurant.imagem}
            categoria={restaurant.categoria}
            nota={restaurant.nota}
            id={restaurant.id}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantList
