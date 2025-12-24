
import { createElement, writeRouteHtml } from '../src'
import { initNode } from '../src/init-node'
import { DownloadPage } from './download'
import { IntroPage } from './intro'

function writeLang(rootDir: string){
  writeRouteHtml(rootDir, "/intro.html", <IntroPage />)
  writeRouteHtml(rootDir, "/download.html", <DownloadPage />)
}

function all(){
  let rootDir = './public'
  writeLang(rootDir)
}

initNode()
all()
