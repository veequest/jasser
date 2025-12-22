
export function initNode(){
  let jsdom = require("jsdom")
  let { JSDOM } = jsdom;
  let dom = new JSDOM('')
  global.document = dom.window.document
  global.window = dom.window
}