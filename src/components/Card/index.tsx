import { CardRest, Descricao, Nota, Titulo } from './style'
import Tag from '../Tags'
import estrela from '../../assets/images/star_favorite-[#1499].png'
import Button from '../Button'

type Props = {
  descricao: string
  imagem: string
  categoria: string[]
  nota: string
  titulo: string
  id: number
}

const Rest = ({ titulo, nota, descricao, imagem, categoria }: Props) => (
  <CardRest>
    <Tag>{categoria}</Tag>
    <img src={imagem} alt={titulo} />
    <Titulo>{titulo}</Titulo>
    <Nota style={{ paddingLeft: `200px` }}>
      {nota} <img src={estrela} alt="estrela" />
    </Nota>
    <Descricao>{descricao}</Descricao>
    <Button type="link" to="/pratos">
      Saiba Mais
    </Button>
  </CardRest>
)

export default Rest
