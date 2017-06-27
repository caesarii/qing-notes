

// 根据 id 获取 实例

const get = (id, objList) => {
  let target = null
  objList.forEach((obj) => {
    if(obj.id === id) {
      target = obj
    }
  })

  return target
}

export {get}