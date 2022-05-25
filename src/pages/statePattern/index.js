import React, { useState } from 'react'
// const StateMachine = require('javascript-state-machine');
import StateMachine from 'javascript-state-machine'


var fsm = new StateMachine({
  init: '收藏',  // 初始状态，待收藏
  transitions: [
    {
      name: 'doStore',
      from: '收藏',
      to: '取消收藏'
    },
    {
      name: 'deleteStore',
      from: '取消收藏',
      to: '收藏'
    }
  ],
  methods: {
    // 执行收藏
    onDoStore: function () {
      console.log('收藏成功')
      updateText(fsm.state)
    },
    // 取消收藏
    onDeleteStore: function () {
      console.log('已取消收藏')
      updateText(fsm.state)
    }
  }
})

// 点击事件
// $btn.click(function () {
//   if (fsm.is('收藏')) {
//     fsm.doStore()
//   } else {
//     fsm.deleteStore()
//   }
// })

// 更新文案
function updateText(value) {
  console.log(fsm.state, 'fsm.state');
  if (document.getElementById('btn')) {
    document.getElementById('btn').innerText = value;
  }

}


var fsm2 = new StateMachine({
  init: 'pending',
  transitions: [
    {
      name: 'resolve',
      from: 'pending',
      to: 'fullfilled'
    },
    {
      name: 'reject',
      from: 'pending',
      to: 'rejected'
    }
  ],
  methods: {
    // 成功
    onResolve: function (state, data) {
      // 参数：state - 当前状态示例; data - fsm.resolve(xxx) 执行时传递过来的参数
      data.successList.forEach(fn => fn())
    },
    // 失败
    onReject: function (state, data) {
      // 参数：state - 当前状态示例; data - fsm.reject(xxx) 执行时传递过来的参数
      data.failList.forEach(fn => fn())
    }
  }
})

class MyPromise {
  constructor(fn) {
    this.successList = []
    this.failList = []

    fn(() => {
      // resolve 函数
      fsm2.resolve(this)
    }, () => {
      // reject 函数
      fsm2.reject(this)
    })
  }
  then(successFn, failFn) {
    this.successList.push(successFn)
    this.failList.push(failFn)
  }
}


function Index() {
  // const [state, setState] = useState('Minn');
  const toggleClick = () => {
    function loadImg(src) {
      const promise = new MyPromise(function (resolve, reject) {
        var img = document.createElement('img')
        img.onload = function () {
          resolve(img)
        }
        img.onerror = function () {
          reject()
        }
        img.src = src
      })
      return promise
    }
    var src = 'http://www.imooc.com/static/img/index/logo_new.png'
    var result = loadImg(src)
    console.log(result, 'loadImg')
    result.then(function (img) {
      console.log('success 1')
    }, function () {
      console.log('failed 1')
    })
    result.then(function (img) {
      console.log('success 2')
    }, function () {
      console.log('failed 2')
    })
    if (fsm.is('收藏')) {
      fsm.doStore()
    } else {
      fsm.deleteStore()
    }
  }

  return (
    <div>
      statePattern:
      <button id="btn" onClick={toggleClick}>收藏</button>
    </div>
  )
}

export default Index