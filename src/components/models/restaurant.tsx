class Restaurant {
  descricao: string
  imagem: string
  categoria: string[]
  nota: string
  titulo: string
  id: number

  constructor(
    descricao: string,
    imagem: string,
    nota: string,
    categoria: string[],
    titulo: string,
    id: number
  ) {
    this.id = id
    this.descricao = descricao
    this.imagem = imagem
    this.categoria = categoria
    this.nota = nota
    this.titulo = titulo
    this.id = id
  }
}

export default Restaurant
