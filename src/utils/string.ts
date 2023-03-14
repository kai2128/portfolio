export function replaceNewlineWithBR(str?: string | null) {
  return str?.replace(/\n/g, '<br/>') || ''
}
