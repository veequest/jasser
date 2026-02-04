
import { createElement } from './tsx-runtime'

function Label({ tabs_id, index, title }:{ tabs_id: string, index: number, title: string }){
  let radio_id = tabs_id + "_radio" + index
  let className = tabs_id + "_label"
  let id = className + index
  return <label role="tab" for={radio_id} id={id} class={className}>{title}</label>
}

function LabelStyle(tabs_id: string, index: number){
  let radio_id = tabs_id + "_radio" + index
  let children_id = tabs_id + "_children"
  return `#${radio_id}:checked ~ #${children_id} label[for="${radio_id}"]`
}

function LabelStyles({tabs_id, num, selected_css}:{tabs_id: string, num: number, selected_css: string}){
  let labelSelects = Array.from({length: num}, (_, index) => LabelStyle(tabs_id, index))
  let labelStyle = labelSelects.join(",") + `{${selected_css}}`
  return <style>{labelStyle}</style>
}

export function Labels({ tabs_id, titles, selected_css }:{ tabs_id: string, titles: string[], selected_css: string }){
  let id = tabs_id + "_labels"
  return <nav id={id}>
    {titles.map((title, i)=> <Label tabs_id={tabs_id} index={i} title={title}/>)}
    <LabelStyles tabs_id={tabs_id} num={titles.length} selected_css={selected_css} />
  </nav>
}