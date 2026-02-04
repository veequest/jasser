
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

export function Tabs({ id, len, children }:{ id: string, len: number, children?: any }) {
  let radios = Array.from({length: len}, (_, index) => <Radio tabs_id={id} index={index} />)
  return <div id={id}>
    {radios}
    <div id={id + "_children"}>
      {children}
    </div>
  </div>
}