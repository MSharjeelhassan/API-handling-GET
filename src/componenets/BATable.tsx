import React from "react";

function BATable(props: any) {
  return (
    <>
    {props.loading? <h1><img src="loading.png" alt="hello world" /></h1> :
    //  props.dataBank.length != 0 ? null : 
     
     <table className="table">
        <thead>
          <tr>
            {props.col.map((v: any, i: number) => {
              return (
                <>
                  <th key={i}>{v.title}</th>
                </>
              );
            })}
          </tr>
        </thead>
        <tbody>
        
            {props.dataBank.map((value: any, i: any) => {
              return (
                <>
                  <tr key={i}>
                  {props.col.map((v: any, i: any) => {
                    return (
                      <>
                        <td key={i}>{typeof  v.displayField=== 'function'?
                        v.displayField(): v.displayField? v.displayField :value[v.values]}</td>
                      </>
                    );
                  })}
                  </tr>
                </>
              );
            })}
          
        </tbody>
      </table>}
    </>
  );
}

export default BATable;
