import Counter from './Counter'
import Example from './Example'
import MeasureExample from './MeasureExample'
import MeasureExample2 from './MeasureExample2'
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
      <h4>MeasureExample</h4>
      <MeasureExample />
      <h4>MeasureExample2</h4>
      <MeasureExample2 />
    </div>
  )
}

export default index
