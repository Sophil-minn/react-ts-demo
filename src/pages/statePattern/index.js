import React, { useState } from 'react'
const StateMachine = require('javascript-state-machine');

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
      updateText()
    },
    // 取消收藏
    onDeleteStore: function () {
      console.log('已取消收藏')
      updateText()
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
function updateText() {
  debugger
  console.log(fsm.state, 'fsm.state');
  if (document.getElementById('btn')) {
    document.getElementById('btn').innerText = fsm.state;
  }

}

// 初始化文案
updateText()



function Index() {
  // const [state, setState] = useState('Minn');
  const toggleClick = () => {
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