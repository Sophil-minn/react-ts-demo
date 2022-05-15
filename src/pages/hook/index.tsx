import Counter from './Counter'
import Example from './Example'
import ReducerDemo from './ReducerDemo'
import ThemeContextDemo from './ThemeContextDemo'


function index() {
  return (
    <div>
      Hook state effect Example
      <Example />

      <h4>ThemeContextDemo</h4>
      <ThemeContextDemo />
      <h4>ReducerDemo</h4>
      <ReducerDemo />
      <h4>Counter</h4>
      {Counter(1)}
    </div>
  )
}

export default index
