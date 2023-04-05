import SelectInput from "./SelectInput/select-input";

function App() {
    const options = [
        {
            label:'test1'
        },
        {
            label:'test2'
        },
        {
            label:'test3'
        },
        {
            label:'test4'
        },
    ]
    const  onChange = (e) => {
        console.log(e.target.value);
    }
  return (
      <div style={{display:'flex',justifyContent:'center',paddingTop:'200px'}}>
        <SelectInput placeholder={'placeholder'} width={'150px'} options={options} onChange={onChange} showClear />
      </div>

  );
}

export default App;
