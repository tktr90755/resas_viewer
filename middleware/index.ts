import { Middleware } from '@nuxt/types'
import { Context } from '@nuxt/types'
const myMiddleware: Middleware = ({ redirect, app: { $accessor } }: Context) => {
  // context を使用します
  console.log('hogehoge@@')
  const res = $accessor.age.hoge()
  console.log(res)
}

export default myMiddleware