
import { createElement } from './tsx-runtime'

function Radio({ tabs_id, index }:{ tabs_id: string, index: number}){
  let name = tabs_id + "_radio"
  let id = name + index
  let style = "display: none"
  if(index === 0){
    return <input type="radio" name={name} id={id} style={style} checked></input>
  } else {
    return <input type="radio" name={name} id={id} style={style}></input>
  }
}

function Radios(tabs_id: string, num: number){
  return Array.from({length: num}, (_, index) => <Radio tabs_id={tabs_id} index={index} />)
}

function Label({ tabs_id, index, title }:{ tabs_id: string, index: number, title: string }){
  let tab = tabs_id + "_radio" + index
  let className = tabs_id + "_label"
  let id = className + index
  return <label role="tab" for={tab} id={id} class={className}>{title}</label>
}

function LabelList({ tabs_id, titles }:{ tabs_id: string, titles: string[] }){
  let id = tabs_id + "_labels"
  return <nav id={id}>
    {titles.map((title, i)=> <Label tabs_id={tabs_id} index={i} title={title}/>)}
  </nav>
}

function Panel({ tabs_id, index, content }:{ tabs_id: string, index: number, content: HTMLElement }){
  let className = tabs_id + "_panel"
  let id = className + index
  return <div role="tabpanel" id={id} class={className}>{content}</div>
}

function Panels({ tabs_id, contents }:{ tabs_id: string, contents: HTMLElement[] }){
  let id = tabs_id + "_panels"
  return <div id={id}>
    {contents.map((content, i)=> <Panel tabs_id={tabs_id} index={i} content={content} />)}
  </div>
}

function PanelStyle(tabs_id: string, index: number){
  let radio_id = tabs_id + "_radio" + index
  let panels_id = tabs_id + "_panels" 
  let panel_id = tabs_id + "_panel" + index
  return `
    #${panel_id} { display: none; }
    #${radio_id}:checked ~ #${panels_id} #${panel_id} { display: block; }
  `
}

function LabelStyle(tabs_id: string, index: number){
  let tab_id = tabs_id + "_radio" + index
  let labels_id = tabs_id + "_labels"
  return `#${tab_id}:checked ~ #${labels_id} label[for="${tab_id}"]`
}

function TabsStyle({tabs_id, num, selected_css}:{tabs_id: string, num: number, selected_css: string}){
  let panelStyles = Array.from({length: num}, (_, index) => PanelStyle(tabs_id, index))
  let labelSelects = Array.from({length: num}, (_, index) => LabelStyle(tabs_id, index))
  let labelStyle = labelSelects.join(",") + `{${selected_css}}`
  let css = panelStyles.join("") + labelStyle
  return <style>{css}</style>
}

export function Tabs({ id, titles, contents, selected_css }:{ id: string, titles: string[], contents: HTMLElement[], selected_css: string }) {
  return <div id={id}>
    {Radios(id, titles.length)}
    <LabelList tabs_id={id} titles={titles} />
    <Panels tabs_id={id} contents={contents} />
    <TabsStyle tabs_id={id} num={titles.length} selected_css={selected_css} />
  </div>
}