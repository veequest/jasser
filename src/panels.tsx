
import { createElement } from './tsx-runtime'

function Panel({ tabs_id, index, content }:{ tabs_id: string, index: number, content: HTMLElement }){
  let className = tabs_id + "_panel"
  let id = className + index
  return <div role="tabpanel" id={id} class={className}>{content}</div>
}

function PanelStyle(tabs_id: string, index: number){
  let radio_id = tabs_id + "_radio" + index
  let panel_id = tabs_id + "_panel" + index
  let children_id = tabs_id + "_children"
  return `
    #${panel_id} { display: none; }
    #${radio_id}:checked ~ #${children_id} #${panel_id} { display: block; }
  `
}

function TabsStyle({tabs_id, num}:{tabs_id: string, num: number}){
  let panelStyles = Array.from({length: num}, (_, index) => PanelStyle(tabs_id, index))
  let css = panelStyles.join("")
  return <style>{css}</style>
}

export function Panels({ tabs_id, contents }:{ tabs_id: string, contents: HTMLElement[] }){
  return <div id={tabs_id + "_panels"}>
    {contents.map((content, i)=> <Panel tabs_id={tabs_id} index={i} content={content} />)}
    <TabsStyle tabs_id={tabs_id} num={contents.length} />
  </div>
}