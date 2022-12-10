import React from 'react';

const CardEffect = (props) => {
    return (
      <div>
        <div className="card">
          <div className="mt-2">
            <div className="mt-3" >
              <i className="pi pi-cloud mt-2" style={{ fontSize: "3rem",color:'#f4b805' }}></i>
              <p className="text-2 m-0" style={{ fontWeight: "14px",color:'#545454' }}>
               {props.title}
              </p>
              <p className="text-1 width-400 m-auto justify mt-1" style={{color:'#545454'}}>
                {props.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default CardEffect;