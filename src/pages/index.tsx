import Tarefa from "../model/Tarefa"

let tarefa: Tarefa = new Tarefa(1, 'Exemplo de tarefa')
tarefa = tarefa.alternarStatus()
tarefa = tarefa.alternarStatus()

export default function Home() {
  return (
  <div>
    <p>{tarefa.id}</p>
    <p>{tarefa.descricao}</p>
    <p>{tarefa.id ? 'Concluída' : 'Ativa'}</p>    
  </div>    
  )
}