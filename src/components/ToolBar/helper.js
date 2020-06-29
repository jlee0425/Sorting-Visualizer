import { uuid } from 'uuidv4'

export const generateRandomArray = size => {
  const MAX_WIDTH = 80
  return [...Array(size)].map(() => {
    return {
      width: `${Math.floor(Math.random() * MAX_WIDTH + 10)}%`,
      key: uuid()
    }
  })
}
export const resizeHandler = () => {
  const width = window.innerWidth
  if (width > 768) return 'large'
  else if (width > 640) return 'medium'
  else return 'mini'
}
