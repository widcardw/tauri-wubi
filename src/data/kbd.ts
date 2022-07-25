const kbd = {
  q: {
    name: 'q',
    strokes: ['仠', '仡', '令', '仨', '以', '仦', '仢', '代', '仧', '仩', '仪', '仫', '们', '仭', '仮'],
    char: '我',
    code: 35,
    indicator: '',
  },
  w: {
    name: 'w',
    strokes: ['仐', '仑', '仒', '仓', '仔'],
    char: '人',
    code: 34,
    indicator: '',
  },
  e: {
    name: 'e',
    strokes: ['什', '仁', '仃', '仅', '仆', '仄', '仂', '仇', '仈', '仌', '今', '仉', '介'],
    char: '有',
    code: 33,
    indicator: '仃',
  },
  r: {
    name: 'r',
    strokes: ['亰', '亱', '亳', '亵', '亲', '亶', '亴', '亷', '亹', '亸'],
    char: '的',
    code: 32,
    indicator: '亴',
  },
  t: {
    name: 't',
    strokes: ['亠', '亡', '交', '亥', '亢', '亣', '亨', '亦', '产'],
    char: '和',
    code: 31,
    indicator: '㇒',
  },
  y: {
    name: 'y',
    strokes: ['仰', '仱', '仲', '仳', '价', '仵', '件', '仴', '仸', '仹'],
    char: '主',
    code: 41,
    indicator: '仸',
  },
  u: {
    name: 'u',
    strokes: ['伀', '企', '伅', '伃', '伇', '伆', '伋', '伄', '伉', '伊', '伂', '伌', '伈'],
    char: '产',
    code: 42,
    indicator: '伆',
  },
  i: {
    name: 'i',
    strokes: ['伐', '伕', '休', '伓', '伒', '优', '会', '伔', '伖', '众', '伙'],
    char: '不',
    code: 43,
    indicator: '伕',
  },
  o: {
    name: 'o',
    strokes: ['传', '伡', '伢', '伤', '伣', '伥'],
    char: '为',
    code: 44,
    indicator: '伣',
  },
  p: {
    name: 'p',
    strokes: ['估', '伴', '伳', '伲', '伱', '伵'],
    char: '这',
    code: 45,
    indicator: '',
  },
  a: {
    name: 'a',
    strokes: ['乀', '乁', '乂', '久', '乄', '乆', '乇', '乃', '么', '之', '乍', '义', '乊', '乌'],
    char: '工',
    code: 15,
    indicator: '',
  },
  s: {
    name: 's',
    strokes: ['丰', '丱', '串', '丳'],
    char: '要',
    code: 14,
    indicator: '',
  },
  d: {
    name: 'd',
    strokes: ['丠', '両', '两', '严', '並', '丢', '丣', '丨', '丩', '个', '丫', '丧'],
    char: '在',
    code: 13,
    indicator: '三',
  },
  f: {
    name: 'f',
    strokes: ['丐', '丑', '专', '丒', '丕', '丘', '丙', '世', '丗', '且'],
    char: '地',
    code: 12,
    indicator: '二',
  },
  g: {
    name: 'g',
    strokes: ['一', '丁', '丅', '丄', '丂', '七'],
    char: '一',
    code: 11,
    indicator: '',
  },
  h: {
    name: 'h',
    strokes: ['乐', '乒', '乗', '乘', '乙', '乕', '乖', '乓', '乔', '乑', '乚'],
    char: '上',
    code: 21,
    indicator: '乓',
  },
  j: {
    name: 'j',
    strokes: ['习', '乡', '乢', '乣', '乤', '乥', '书', '乧', '乨'],
    char: '是',
    code: 22,
    indicator: '乤',
  },
  k: {
    name: 'k',
    strokes: ['买', '乱', '乲'],
    char: '中',
    code: 23,
    indicator: '〣',
  },
  l: {
    name: 'l',
    strokes: ['亀', '亁', '亃', '亂', '亄', '亅', '了', '亇', '争', '予', '亊'],
    char: '国',
    code: 24,
    indicator: '',
  },
  m: {
    name: 'm',
    strokes: ['亐', '云', '互', '亓', '五', '井', '亖', '亗'],
    char: '同',
    code: 25,
    indicator: '',
  },
  x: {
    name: 'x',
    strokes: ['侓', '侔', '侕', '侖', '侗', '侒', '侐', '侑'],
    char: '经',
    code: 55,
    indicator: '',
  },
  c: {
    name: 'c',
    strokes: ['侀', '侄', '侅', '侃', '侁', '侂'],
    char: '以',
    code: 54,
    indicator: '',
  },
  v: {
    name: 'v',
    strokes: ['佰', '佱', '佲', '佴', '併', '佶', '佷', '佳'],
    char: '发',
    code: 53,
    indicator: '巛',
  },
  b: {
    name: 'b',
    strokes: ['你', '佡', '佨', '佥', '佬', '佦', '佩', '佧', '佪', '佫', '佤', '佢', '佣', '佭'],
    char: '了',
    code: 52,
    indicator: '巜',
  },
  n: {
    name: 'n',
    strokes: ['佀', '佁', '佂', '佃', '佄', '佌', '佋', '位', '低', '住', '佐', '佒', '体', '佔', '何', '佖', '佇', '佈', '佉', '但', '佑', '佊', '佅'],
    char: '民',
    code: 51,
    indicator: '㇛',
  },
  z: {
    name: 'z',
    strokes: [],
    char: '',
    code: 0,
    indicator: '',
  },
}

const topLvCharDict = {
  我: 'q',
  人: 'w',
  有: 'e',
  的: 'r',
  和: 't',
  主: 'y',
  产: 'u',
  不: 'i',
  为: 'o',
  这: 'p',
  工: 'a',
  要: 's',
  在: 'd',
  地: 'f',
  一: 'g',
  上: 'h',
  是: 'j',
  中: 'k',
  国: 'l',
  同: 'm',
  民: 'n',
  了: 'b',
  发: 'v',
  以: 'c',
  经: 'x',
}

const topLvChar = Object.keys(topLvCharDict)

export default kbd

export { topLvCharDict, topLvChar }

type letter = keyof(typeof kbd)
type topLvCharType = keyof(typeof topLvCharDict)

export type {
  letter, topLvCharType,
}
