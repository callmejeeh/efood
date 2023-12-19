import Pratos from '../models/pratos'
import BodyPratos from '.'
import { Container } from '../../styles'
import { ListPratos } from './style'

export type Props = {
  plate: Pratos[]
}

const PlateList = ({ plate }: Props) => (
  <Container>
    <div className="container">
      <ListPratos>
        {plate.map((plates) => (
          <BodyPratos
            key={plates.id}
            titulo={plates.titulo}
            descricao={plates.descricao}
            imagem={plates.imagem}
            id={plates.id}
          />
        ))}
      </ListPratos>
    </div>
  </Container>
)

export default PlateList
