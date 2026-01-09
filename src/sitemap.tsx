
import { createElement } from './tsx-runtime'
import { writeStaticFile } from './writeRoute'

export function Sitemap({children}:{children?: any}) {
  let xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  let xhtml="http://www.w3.org/1999/xhtml"
  return <urlset xmlns={xmlns} xmlns:xhtml={xhtml}>
    {children}
  </urlset>
}

export function toXML(dom: HTMLElement){
  let doctype = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
  return doctype + dom.outerHTML
}

export async function writeSitemap(rootDir: string, dom: HTMLElement){
  let filePath = rootDir + "/sitemap.xml"
  let content = toXML(dom)
  await writeStaticFile(filePath, content)
  return filePath
}