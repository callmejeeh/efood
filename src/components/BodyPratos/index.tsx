import { BotaoPrato, CardPratos, Descricao, Titulo } from './style'

type Props = {
  descricao: string
  imagem: string
  titulo: string
  id: number
}

const BodyPratos = ({ titulo, descricao, imagem }: Props) => (
  <CardPratos>
    <img src={imagem} alt={titulo} />
    <Titulo>{titulo}</Titulo>
    <Descricao>{descricao}</Descricao>
    <BotaoPrato>Adicionar ao carrinho</BotaoPrato>
  </CardPratos>
)

export default BodyPratos
