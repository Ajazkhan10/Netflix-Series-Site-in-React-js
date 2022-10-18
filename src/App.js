import './App.css';
import Netflix from './Compononts/Netflix';
import sdata from './Compononts/Sdata';
function App() {

  // function ncard(val) {
  //   return (
  //     <Netflix
  //       img={val.img}
  //       url={val.url}
  //       title={val.title}
  //       category={val.category}
  //     />
  //   )
  // }

  return (
    <div className='App'>
      <div className='heading'>
        <h1>List of Top Netflix Series In 2022</h1>
      </div>
      {/* {sdata.map(ncard)}; */}
      {sdata.map(function abc(val) {
        return (
          <Netflix
            img={val.img}
            url={val.url}
            title={val.title}
            category={val.category}
          />
        )
      })
      }

      {/* <Netflix
        img={sdata[1].img}
        url={sdata[1].url}
        title={sdata[1].title}
        category={sdata[1].category}
      />
      <Netflix
        img={sdata[2].img}
        url={sdata[2].url}
        title={sdata[2].title}
        category={sdata[2].category}
      />
      <Netflix
        img={sdata[3].img}
        url={sdata[3].url}
        title={sdata[3].title}
        category={sdata[3].category}
      />
      <Netflix
        img={sdata[4].img}
        url={sdata[4].url}
        title={sdata[4].title}
        category={sdata[4].category}
      />
      <Netflix
        img={sdata[5].img}
        url={sdata[5].url}
        title={sdata[5].title}
        category={sdata[5].category}
      />
       <Netflix
        img={sdata[6].img}
        url={sdata[6].url}
        title={sdata[6].title}
        category={sdata[6].category}
      /> */}
    </div>
  );
}

export default App;
