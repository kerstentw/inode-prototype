import * as caverHandlers from './klaytn/caverApiHandler';
import * as scopeApiHandlers from './klaytn/scopeApiHandler';
import * as klaytnNewsHandlers from './klaytn/klaytnNewsHandler'

const klaytnHandlers = {
  caverHandlers:  caverHandlers,
  scopeApiHandlers: scopeApiHandlers,
  klaytnNewsHandlers: klaytnNewsHandlers
}

export { klaytnHandlers };
