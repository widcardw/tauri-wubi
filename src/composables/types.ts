interface OnePoem {
  content: string
  origin: string
  author: string
  category: string
}

interface LunYu {
  fulltext: Array<string>
  title: string
}

type PartialOnePoem = Partial<OnePoem>
type PartialLunYu = Partial<LunYu>

const DEFAULT_FONT_SIZE = 3

export type {
  OnePoem,
  PartialOnePoem,
  LunYu,
  PartialLunYu,
}

export {
  DEFAULT_FONT_SIZE,
}
