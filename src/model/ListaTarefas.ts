import Tarefa from "./Tarefa";
import TipoFiltro from "./TipoFiltro";

export default class ListaTarefas {
  #todas: Tarefa[];
  #filtroUtilizado: TipoFiltro;

  constructor(todas: Tarefa[], filtroUtilizado = TipoFiltro.NENHUM) {
    this.#todas = todas;
    this.#filtroUtilizado = filtroUtilizado ?? TipoFiltro.NENHUM;
  }

  get itens() {
    return this.aplicarFiltroEm(this.#todas);
  }

  get quantidade() {
    return this.itens.length;
  }

  get filtroUtilizado() {
    return this.#filtroUtilizado;
  }

  exibindoTodas(): boolean {
    return this.#filtroUtilizado === TipoFiltro.NENHUM;
  }
  exibindoSomenteAtivas(): boolean {
    return this.#filtroUtilizado === TipoFiltro.ATIVAS;
  }
  exibindoSomenteConlcuidas(): boolean {
    return this.#filtroUtilizado === TipoFiltro.CONCLUIDAS;
  }

  private aplicarFiltroEm(tarefas: Tarefa[]): Tarefa[] {
    if (this.exibindoSomenteAtivas()) {
      return this.aplicarFiltroAtivas(tarefas);
    } else if (this.exibindoSomenteConlcuidas()) {
      return this.aplicarFiltroConcluidas(tarefas);
    } else {
      return [...tarefas]
    }
  }

  private aplicarFiltroAtivas(tarefas: Tarefa[]): Tarefa[] {
    return tarefas.filter((tarefa) => tarefa.ativa);
  }
  private aplicarFiltroConcluidas(tarefas: Tarefa[]): Tarefa[] {
    return tarefas.filter((tarefa) => tarefa.concluida);
  }
}
