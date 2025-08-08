export default function QuantityInput(props: { value: number, onChange: (n:number)=>void, min?: number, max?: number }) {
  const { value, onChange, min = 1, max = 99 } = props
  return (
    <div className="row">
      <button className="btn" onClick={() => onChange(Math.max(min, value - 1))}>-</button>
      <input className="input" style={{width:80, textAlign:'center'}} type="number" min={min} max={max} value={value} onChange={e => onChange(parseInt(e.target.value || '0', 10))} />
      <button className="btn" onClick={() => onChange(Math.min(max, value + 1))}>+</button>
    </div>
  )
}
